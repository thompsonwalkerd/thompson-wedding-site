'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PaymentOptions from '@/components/registry/PaymentOptions';
import { Translations } from '@/lib/translations';

interface RegistryClientProps {
  t: Translations;
}

export default function RegistryClient({ t }: RegistryClientProps) {
  const [expandedFund, setExpandedFund] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = (index: number) => {
    setExpandedFund(expandedFund === index ? null : index);
  };

  const handleClose = () => {
    setExpandedFund(null);
  };

  useEffect(() => {
    if (expandedFund !== null) {
      // Lock body scroll on mobile when modal is open
      if (window.innerWidth < 768) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [expandedFund]);

  const modalContent = expandedFund !== null && (
    <div
      role='dialog'
      aria-modal='true'
      className='fixed inset-0 z-50 overflow-y-auto bg-bg md:hidden'
      onClick={handleClose}
    >
      <div className='min-h-full p-6' onClick={e => e.stopPropagation()}>
        <div className='flex justify-end mb-6'>
          <button
            onClick={handleClose}
            className='text-text/60 hover:text-text text-6xl font-thin leading-none'
            aria-label='Close'
          >
            ×
          </button>
        </div>
        {t.registry.options[expandedFund] && (
          <div className='space-y-6 pb-8'>
            <div className='text-center'>
              <h3 className='text-3xl font-heading text-heading mb-3 flex items-center justify-center gap-4'>
                {t.registry.options[expandedFund].name}
                <Image
                  src={t.registry.options[expandedFund].icon}
                  alt={t.registry.options[expandedFund].name}
                  width={50}
                  height={50}
                  className='object-contain'
                />
              </h3>
              <p className='text-text/70 font-sans'>
                {t.registry.options[expandedFund].description}
              </p>
            </div>
            <PaymentOptions
              fundType={
                t.registry.options[expandedFund].name.toLowerCase().includes('honeymoon')
                  ? 'honeymoon'
                  : 'car'
              }
              paymentOptions={t.registry.paymentOptions}
              labels={t.registry.paymentLabels}
              isExpanded={true}
            />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Modal Overlay - Rendered via Portal */}
      {mounted && modalContent && createPortal(modalContent, document.body)}

      {/* Desktop Grid */}
      <div
        className={`hidden md:grid gap-6 transition-all duration-500 ${
          expandedFund !== null ? 'md:grid-cols-1' : 'md:grid-cols-2'
        }`}
      >
        {t.registry.options.map((option, index) => {
          const fundType = option.name.toLowerCase().includes('honeymoon') ? 'honeymoon' : 'car';
          const isExpanded = expandedFund === index;
          const isHidden = expandedFund !== null && !isExpanded;

          return (
            <div
              key={index}
              className={`bg-surface/5 border border-text/20 rounded-lg p-6 transition-all duration-500 ${
                isHidden ? 'opacity-0 scale-95 hidden' : 'opacity-100 scale-100'
              } flex flex-col`}
            >
              {/* Fund Info Section - Top */}
              <div className={`${isExpanded ? 'text-center mb-6' : 'grow'}`}>
                <h3 className='text-2xl font-heading text-heading mb-3 flex items-center justify-center gap-4'>
                  {option.name}
                  <Image
                    src={option.icon}
                    alt={`${option.name}`}
                    width={50}
                    height={50}
                    className='object-contain'
                  />
                </h3>
                <p className='text-text/70 font-sans mb-6'>{option.description}</p>
              </div>

              {/* Payment Options Section - Bottom or Button */}
              <div>
                <PaymentOptions
                  fundType={fundType}
                  buttonText={t.registry.externalLinkLabel}
                  paymentOptions={t.registry.paymentOptions}
                  labels={t.registry.paymentLabels}
                  isExpanded={isExpanded}
                  onToggle={() => handleToggle(index)}
                  onClose={handleClose}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Grid (non-modal) */}
      <div className='grid gap-4 md:hidden'>
        {t.registry.options.map((option, index) => (
          <div
            key={index}
            className='bg-surface/5 border border-text/20 rounded-lg p-6 flex flex-col h-full'
          >
            <div className='flex-grow'>
              <h3 className='text-3xl font-heading text-heading mb-3 flex items-center justify-center gap-4'>
                {option.name}
                <Image
                  src={option.icon}
                  alt={`${option.name}`}
                  width={50}
                  height={50}
                  className='object-contain'
                />
              </h3>
              <p className='text-text/70 font-sans mb-6'>{option.description}</p>
            </div>
            <button
              onClick={() => handleToggle(index)}
              className='w-full bg-accent/90 hover:bg-accent text-bg font-sans py-2 px-6 rounded-lg transition-colors duration-200'
            >
              {t.registry.externalLinkLabel}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

'use client';

import Image from 'next/image';
import { useState } from 'react';

interface PaymentOption {
  type: 'zelle' | 'venmo' | 'qr';
  label: string;
  value?: string;
  qrImage?: string;
}

interface PaymentOptionsProps {
  fundType?: 'honeymoon' | 'car';
  buttonText?: string;
  paymentOptions: PaymentOption[];
  labels: {
    copyButton: string;
    copiedButton: string;
    scanQr: string;
  };
  isExpanded?: boolean;
  onToggle?: () => void;
  onClose?: () => void;
}

export default function PaymentOptions({
  buttonText,
  paymentOptions,
  labels,
  isExpanded = false,
  onToggle,
  onClose,
}: PaymentOptionsProps) {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className='relative'>
      {!isExpanded && buttonText && onToggle && (
        <button
          onClick={onToggle}
          className='w-full bg-accent/90 hover:bg-accent text-bg font-sans py-2 px-6 rounded-lg transition-colors duration-200'
        >
          {buttonText}
        </button>
      )}

      {isExpanded && (
        <div className='bg-surface/10 border border-text/20 rounded-lg p-6 md:p-8'>
          {onClose && (
            <div className='flex justify-end mb-4'>
              <button
                onClick={onClose}
                className='text-text/60 hover:text-text transition-colors text-sm font-sans'
              >
                Close ✕
              </button>
            </div>
          )}
          {/* Mobile: Vertical Stack */}
          <div className='flex flex-col gap-8 md:hidden'>
            {paymentOptions.map(option => (
              <div key={option.type} className='space-y-2'>

                {option.type === 'qr' && option.qrImage ? (
                  <div className='flex flex-col items-center space-y-2'>
                    <h4 className='font-heading text-2xl text-text'>{option.label}</h4>
                    <Image
                      src={option.qrImage}
                      alt={`${option.label} QR Code`}
                      width={200}
                      height={200}
                      className='rounded-lg border border-text/20'
                    />
                    <p className='text-sm text-text/60 italic'>{labels.scanQr}</p>
                  </div>
                ) : (
                  <div className='flex flex-col gap-2'>
                    <h4 className='font-heading text-2xl text-text'>{option.label}</h4>
                    <code className='bg-bg/50 text-text px-3 py-2 rounded text-sm border border-text/20 break-all'>
                      {option.value}
                    </code>
                    <button
                      onClick={() => option.value && handleCopy(option.value, option.type)}
                      className='w-full bg-accent/80 hover:bg-accent text-bg px-3 py-2 rounded text-sm transition-colors'
                    >
                      {copiedType === option.type ? labels.copiedButton : labels.copyButton}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop */}
          <div className='hidden md:block'>
            {/* Americn: Zelle and Venmo */}
            <div className='flex flex-col gap-6 justify-center'>
              {paymentOptions
                .filter(option => option.type !== 'qr')
                .map(option => (
                  <div key={option.type} className='flex flex-col space-y-2'>
                    <h4 className='font-heading text-lg text-text'>{option.label}</h4>
                    <code className='bg-bg/50 text-text px-2 py-2 rounded text-xs border border-text/20 truncate'>
                      {option.value}
                    </code>
                    <button
                      onClick={() => option.value && handleCopy(option.value, option.type)}
                      className='w-full bg-accent/80 hover:bg-accent text-bg px-3 py-2 rounded text-sm transition-colors'
                    >
                      {copiedType === option.type ? labels.copiedButton : labels.copyButton}
                    </button>
                  </div>
                ))}
            </div>

            {/* Czech: QR code */}
            {paymentOptions
              .filter(option => option.type === 'qr')
              .map(option => (
                <div
                  key={option.type}
                  className='flex flex-col items-center justify-center space-y-3'
                >
                  <h4 className='font-heading text-lg text-text'>{option.label}</h4>
                  {option.qrImage && (
                    <>
                      <Image
                        src={option.qrImage}
                        alt={`${option.label} QR Code`}
                        width={200}
                        height={200}
                        className='rounded-lg border border-text/20'
                      />
                      <p className='text-sm text-text/60 italic'>{labels.scanQr}</p>
                    </>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PaymentOption {
  type: 'zelle' | 'venmo' | 'qr';
  label: string;
  value?: string;
  qrImage?: string;
}

interface PaymentOptionsProps {
  fundType: 'honeymoon' | 'car';
  buttonText: string;
  paymentOptions: PaymentOption[];
  labels: {
    copyButton: string;
    copiedButton: string;
    scanQr: string;
  };
}

export default function PaymentOptions({
  fundType,
  buttonText,
  paymentOptions,
  labels
}: PaymentOptionsProps) {
  const [isOpen, setIsOpen] = useState(false);
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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full bg-accent/90 hover:bg-accent text-bg font-sans py-3 px-6 rounded-md transition-colors duration-200'
      >
        {buttonText} {isOpen ? '▲' : '▼'}
      </button>

      {isOpen && (
        <div className='mt-4 space-y-4 bg-surface/10 border border-text/20 rounded-lg p-6'>
          {paymentOptions.map((option) => (
            <div key={option.type} className='space-y-2'>
              <h4 className='font-heading text-lg text-text'>{option.label}</h4>

              {option.type === 'qr' && option.qrImage ? (
                <div className='flex flex-col items-center space-y-2'>
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
                <div className='flex items-center gap-2'>
                  <code className='flex-1 bg-bg/50 text-text px-3 py-2 rounded text-sm border border-text/20'>
                    {option.value}
                  </code>
                  <button
                    onClick={() => option.value && handleCopy(option.value, option.type)}
                    className='bg-accent/80 hover:bg-accent text-bg px-3 py-2 rounded text-sm transition-colors whitespace-nowrap'
                  >
                    {copiedType === option.type ? labels.copiedButton : labels.copyButton}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

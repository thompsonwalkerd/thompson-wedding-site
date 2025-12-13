'use client';

import { useState } from 'react';
import Image from 'next/image';

type AccommodationDetailsProps = {
  labels: {
    rooms: string;
    priceNote: string;
    contactToBook: string;
    photos: string;
  };
  contact: {
    phoneLabel: string;
    email: string;
    phone: string;
  };
  hotel: {
    name: string;
    extraInfoNote: string;
    url: string;
    gallery?: string[];
    roomOptions: Array<{ name: string; details: string; extraGuests?: string; price: string }>;
  };
};

export default function AccommodationDetails({ contact, hotel, labels }: AccommodationDetailsProps) {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className='space-y-6 md:space-y-8'>
      {/* Room Types Section */}
      <div>
        <h3 className='font-heading text-2xl md:text-3xl mb-2 text-heading'>{labels.rooms}</h3>
        <p className='text-text/60 font-sans text-sm mb-4'>{labels.priceNote}</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {hotel.roomOptions.map((room, index) => (
            <div
              key={index}
              className='bg-surface/5 border border-text/20 rounded-lg p-4 md:p-5 flex flex-col gap-3'
            >
              <h4 className='font-heading text-xl md:text-2xl font-bold text-text'>{room.name}</h4>
              <p className='text-text/80 font-sans text-md whitespace-pre-wrap'>{room.details}</p>
              {room.extraGuests && (
                <i className='text-text/80 font-sans text-sm font-extralight whitespace-pre-wrap'>
                  {room.extraGuests}
                </i>
              )}
              <p className='text-text/80 font-sans text-md text-right font-semibold whitespace-pre-wrap'>{room.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className='font-heading text-2xl md:text-3xl mb-4 text-heading'>
          {labels.contactToBook}
        </h3>
        <div className='bg-surface/5 border border-text/20 rounded-lg p-4 md:p-6 space-y-4'>
          {/* Email */}
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
            <div>
              <p className='text-text/60 text-sm font-sans'>E-mail</p>
              <p className='text-text font-sans text-lg'>{contact.email}</p>
            </div>
            <button
              onClick={() => handleCopy(contact.email, 'email')}
              className={`px-4 py-2 rounded-lg font-sans text-sm transition-colors ${
                copiedType === 'email'
                  ? 'bg-green-600 text-white'
                  : 'bg-accent/90 hover:bg-accent text-bg'
              }`}
            >
              {copiedType === 'email' ? 'Copied!' : 'Copy'}
            </button>
          </div>

          {/* Phone */}
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
            <div>
              <p className='text-text/60 text-sm font-sans'>{contact.phoneLabel}</p>
              <p className='text-text font-sans text-lg'>{contact.phone}</p>
            </div>
            <button
              onClick={() => handleCopy(contact.phone, 'phone')}
              className={`px-4 py-2 rounded-lg font-sans text-sm transition-colors ${
                copiedType === 'phone'
                  ? 'bg-green-600 text-white'
                  : 'bg-accent/90 hover:bg-accent text-bg'
              }`}
            >
              {copiedType === 'phone' ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      {hotel.gallery && hotel.gallery.length > 0 && (
        <div>
          <h3 className='font-heading text-2xl md:text-3xl mb-4 text-heading'>{labels.photos}</h3>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {hotel.gallery.map((image, index) => (
              <div key={index} className='relative aspect-video rounded-lg overflow-hidden'>
                <Image
                  src={'/accommodations'.concat(image)}
                  alt={`${hotel.name} ${index + 1}`}
                  fill
                  className='object-cover'
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

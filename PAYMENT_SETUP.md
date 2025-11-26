# Payment Options Setup Guide

## What You Need To Do

Since your `src/lib/translations.ts` file is gitignored (contains private info), you'll need to manually add the payment configuration.

### 1. Update the `Translations` Type

Find the `registry` section in the type definition (around line 99-114) and replace it with:

```typescript
registry: {
  title: string;
  message: string;
  vinylTitle: string;
  vinylInfo: string;
  vinylsPurchased: string;
  vinylSearchPlaceholder: string;
  vinylSearchButton: string;
  options: Array<{
    name: string;
    description: string;
    url: string;
    icon: string;
  }>;
  externalLinkLabel: string;
  // ADD THESE NEW FIELDS:
  paymentOptions: Array<{
    type: 'zelle' | 'venmo' | 'qr';
    label: string;
    value?: string;
    qrImage?: string;
  }>;
  paymentLabels: {
    copyButton: string;
    copiedButton: string;
    scanQr: string;
  }
}
```

### 2. Add Payment Options to English Translations

In the `en` translations object, add these fields to the `registry` section:

```typescript
registry: {
  title: 'Registry',
  message: '...',
  vinylTitle: '...',
  vinylInfo: '...',
  vinylsPurchased: '...',
  vinylSearchPlaceholder: '...',
  vinylSearchButton: '...',
  options: [...],
  externalLinkLabel: 'Contribute',
  // ADD THESE:
  paymentOptions: [
    {
      type: 'zelle',
      label: 'Zelle',
      value: 'your-email@example.com', // Replace with your actual Zelle email/phone
    },
    {
      type: 'venmo',
      label: 'Venmo',
      value: '@your-venmo-handle', // Replace with your actual Venmo username
    },
    {
      type: 'qr',
      label: 'Czech Bank Transfer (QR Code)',
      qrImage: '/registry/qr-code.png', // You'll need to add this image
    },
  ],
  paymentLabels: {
    copyButton: 'Copy',
    copiedButton: 'Copied!',
    scanQr: 'Scan with your banking app',
  },
},
```

### 3. Add Payment Options to Czech Translations

Do the same for the `cz` translations object (translate the labels):

```typescript
registry: {
  // ... existing fields
  paymentOptions: [
    {
      type: 'zelle',
      label: 'Zelle',
      value: 'your-email@example.com', // Same as English
    },
    {
      type: 'venmo',
      label: 'Venmo',
      value: '@your-venmo-handle', // Same as English
    },
    {
      type: 'qr',
      label: 'Bankovní převod (QR kód)', // Translated
      qrImage: '/registry/qr-code.png',
    },
  ],
  paymentLabels: {
    copyButton: 'Kopírovat',
    copiedButton: 'Zkopírováno!',
    scanQr: 'Naskenujte pomocí bankovní aplikace',
  },
},
```

### 4. Add Your QR Code Image

1. Generate a QR code for your Czech bank account (most Czech banks provide this)
2. Save it as: `public/registry/qr-code.png`

**How to get your QR code:**

- If you have a Czech bank account, most banking apps let you generate a QR code for receiving payments
- Look for "Generate QR code" or "Payment QR" in your banking app
- Screenshot or download it, then save to `public/registry/qr-code.png`

### 5. Replace Placeholder Values

Update these with your actual information:

- `your-email@example.com` → Your Zelle email or phone number
- `@your-venmo-handle` → Your Venmo username (starts with @)

## How It Works

Once you've added these translations:

1. Each fund (Honeymoon & Car) will have a "Contribute ▼" button
2. Clicking it reveals three payment options:
   - **Zelle** - Shows your Zelle email/phone with a copy button
   - **Venmo** - Shows your Venmo handle with a copy button
   - **Czech Bank Transfer** - Shows the QR code for Czech guests to scan

Guests can easily copy your payment info or scan the QR code to send money!

## Need Help?

If you have any questions about:

- Where exactly to add these in your translations file
- Getting your Czech bank QR code
- Testing the payment options

Just let me know!

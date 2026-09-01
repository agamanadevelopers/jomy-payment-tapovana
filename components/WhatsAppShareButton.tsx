'use client';

import { Share2 } from 'lucide-react';
import type { PaymentDetails } from '@/lib/paymentDetails';

interface WhatsAppShareButtonProps {
  details: PaymentDetails;
}

export function WhatsAppShareButton({ details }: WhatsAppShareButtonProps) {
  const handleShare = () => {
    const pageUrl =
      typeof window !== 'undefined' ? window.location.href : 'https://tapovana.com/payment/landowner-1';

    const message = `Tapovana Farmland - Official Payment Details

Account Name: ${details.accountName}
Bank Name: ${details.bankName}
Branch Name: ${details.branchName}
Account Number: ${details.accountNumber}
IFSC Code: ${details.ifsc}

Please verify the bank details before making the transfer.

Official Payment Page:
${pageUrl}`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${details.whatsappNumber}?text=${encodedMessage}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleShare}
      aria-label="Share bank details on WhatsApp"
      className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-whatsapp text-white text-sm font-bold uppercase tracking-widest shadow-sm hover:bg-whatsapp-hover transition-all duration-200 min-h-[52px] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp-dark"
    >
      <Share2 size={18} strokeWidth={2} aria-hidden="true" />
      SHARE ON WHATSAPP
    </button>
  );
}

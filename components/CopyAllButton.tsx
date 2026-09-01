'use client';

import { useState, useCallback } from 'react';
import { Check, Copy } from 'lucide-react';
import type { PaymentDetails } from '@/lib/paymentDetails';
import { formatAllDetails } from '@/lib/paymentDetails';

interface CopyAllButtonProps {
  details: PaymentDetails;
}

export function CopyAllButton({ details }: CopyAllButtonProps) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle');

  const handleCopyAll = useCallback(async () => {
    const text = formatAllDetails(details);
    try {
      await navigator.clipboard.writeText(text);
      setStatus('copied');
      setTimeout(() => setStatus('idle'), 2500);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  }, [details]);

  return (
    <div>
      <button
        onClick={handleCopyAll}
        aria-label={
          status === 'copied'
            ? 'Bank details copied to clipboard'
            : 'Copy all bank details to clipboard'
        }
        aria-live="polite"
        className={`w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-200 min-h-[52px] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tapovana-green ${
          status === 'copied'
            ? 'bg-emerald-600 text-white shadow-md'
            : status === 'error'
            ? 'bg-amber-100 text-amber-800 border border-amber-300'
            : 'bg-tapovana-green text-white shadow-md hover:bg-tapovana-green-hover'
        }`}
      >
        {status === 'copied' ? (
          <>
            <Check size={18} strokeWidth={2.5} aria-hidden="true" />
            BANK DETAILS COPIED
          </>
        ) : status === 'error' ? (
          'Unable to Copy — Please Select Manually'
        ) : (
          <>
            <Copy size={18} strokeWidth={2} aria-hidden="true" />
            COPY ALL BANK DETAILS
          </>
        )}
      </button>

      {status === 'error' && (
        <p className="mt-2 text-xs text-center text-tapovana-muted px-2">
          Unable to copy automatically. Please select and copy the details manually.
        </p>
      )}
    </div>
  );
}

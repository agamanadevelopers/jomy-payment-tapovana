'use client';

import { useState, useCallback } from 'react';
import { Check, Copy } from 'lucide-react';

interface CopyButtonProps {
  value: string;
  label: string;
}

export function CopyButton({ value, label }: CopyButtonProps) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle');

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      if (typeof navigator.vibrate === 'function') navigator.vibrate(10);
      setStatus('copied');
      setTimeout(() => setStatus('idle'), 2000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  }, [value]);

  return (
    <div className="flex flex-col items-end gap-1">
      <button
        onClick={handleCopy}
        aria-label={status === 'copied' ? `${label} copied to clipboard` : `Copy ${label}`}
        aria-live="polite"
        className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-200 ease-out min-h-[36px] min-w-[80px] justify-center cursor-pointer select-none active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tapovana-green ${
          status === 'copied'
            ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
            : status === 'error'
            ? 'bg-amber-50 text-amber-700 border border-amber-200'
            : 'bg-tapovana-green-light text-tapovana-green border border-tapovana-green-border hover:bg-tapovana-green-border'
        }`}
      >
        {status === 'copied' ? (
          <>
            <Check size={12} strokeWidth={2.5} aria-hidden="true" />
            COPIED
          </>
        ) : status === 'error' ? (
          'SELECT'
        ) : (
          <>
            <Copy size={12} strokeWidth={2} aria-hidden="true" />
            COPY
          </>
        )}
      </button>
      {status === 'error' && (
        <p className="text-[11px] text-amber-700 text-right">
          Unable to copy. Please select and copy manually.
        </p>
      )}
    </div>
  );
}

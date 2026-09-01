import { ShieldCheck } from 'lucide-react';

export function PaymentSafety() {
  return (
    <section
      aria-label="Payment Safety"
      className="bg-tapovana-green-light border border-tapovana-green-border rounded-2xl px-5 py-5"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck
          size={20}
          className="text-tapovana-green mt-0.5 shrink-0"
          strokeWidth={1.8}
          aria-hidden="true"
        />
        <div>
          <h2 className="text-sm font-bold text-tapovana-green uppercase tracking-widest mb-3">
            Payment Safety
          </h2>
          <p className="text-sm text-tapovana-secondary leading-relaxed mb-2">
            Please verify the Account Name, Account Number and IFSC Code before making the transfer.
          </p>
          <p className="text-sm text-tapovana-secondary leading-relaxed">
            For your security, please use only the bank details displayed on this official Tapovana
            payment page.
          </p>
        </div>
      </div>
    </section>
  );
}

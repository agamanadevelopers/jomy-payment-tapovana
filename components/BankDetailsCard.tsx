import Image from 'next/image';
import type { PaymentDetails } from '@/lib/paymentDetails';
import { CopyButton } from './CopyButton';

interface DetailRowProps {
  label: string;
  value: string;
  mono?: boolean;
  copyLabel?: string;
  prominent?: boolean;
}

function DetailRow({ label, value, mono = false, copyLabel, prominent = false }: DetailRowProps) {
  return (
    <div className="py-4 border-b border-tapovana-border last:border-b-0">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-tapovana-muted mb-2">
        {label}
      </p>
      <div className="flex items-center justify-between gap-3">
        <p
          className={`leading-tight break-all text-tapovana-charcoal ${
            prominent ? 'text-[19px] font-bold' : 'text-[17px] font-semibold'
          } ${mono ? 'font-mono-detail' : ''}`}
        >
          {value}
        </p>
        {copyLabel && <CopyButton value={value} label={copyLabel} />}
      </div>
    </div>
  );
}

interface BankDetailsCardProps {
  details: PaymentDetails;
}

export function BankDetailsCard({ details }: BankDetailsCardProps) {
  return (
    <section aria-label="Bank Account Details">
      <div className="bg-tapovana-card rounded-2xl border border-tapovana-border shadow-sm overflow-hidden">
        <div className="px-5 pt-5 pb-3 border-b border-tapovana-border">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-tapovana-green rounded-full" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-widest text-tapovana-green">
              Payment Account
            </p>
          </div>
        </div>

        <div className="px-5 pb-2">
          <DetailRow
            label="Account Name"
            value={details.accountName}
            copyLabel="Account Name"
          />

          {/* Bank Name row with logo */}
          <div className="py-4 border-b border-tapovana-border">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-tapovana-muted mb-2">
              Bank Name
            </p>
            <div className="flex items-center justify-between gap-3">
              <p className="text-[17px] font-semibold text-tapovana-charcoal leading-tight">
                {details.bankName}
              </p>
              <Image
                src="/southindianbank.png"
                alt="South Indian Bank"
                width={120}
                height={47}
                className="object-contain h-8 w-auto shrink-0"
              />
            </div>
          </div>

          <DetailRow label="Branch Name" value={details.branchName} />
          <DetailRow
            label="Account Number"
            value={details.accountNumber}
            mono
            prominent
            copyLabel="Account Number"
          />
          <DetailRow
            label="IFSC Code"
            value={details.ifsc}
            mono
            copyLabel="IFSC Code"
          />
        </div>
      </div>
    </section>
  );
}

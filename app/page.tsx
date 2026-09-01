import type { Metadata } from 'next';
import { paymentDetails } from '@/lib/paymentDetails';
import { LogoHeader } from '@/components/LogoHeader';
import { BankDetailsCard } from '@/components/BankDetailsCard';
import { CopyAllButton } from '@/components/CopyAllButton';
import { WhatsAppShareButton } from '@/components/WhatsAppShareButton';
import { DownloadDetailsButton } from '@/components/DownloadDetailsButton';
import { PaymentSafety } from '@/components/PaymentSafety';
import { HelpSection } from '@/components/HelpSection';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Tapovana Farmland | Official Payment Details',
  description: 'Official payment details for Tapovana Farmland.',
};

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-tapovana-cream font-sans">
      <div className="max-w-content mx-auto px-4 sm:px-6 pb-16">
        <LogoHeader />

        {/* Bank details — primary content */}
        <BankDetailsCard details={paymentDetails} />

        {/* Primary + secondary actions */}
        <div className="flex flex-col gap-3 mt-4">
          <CopyAllButton details={paymentDetails} />
          <WhatsAppShareButton details={paymentDetails} />
          <DownloadDetailsButton details={paymentDetails} />
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-tapovana-border" role="separator" aria-hidden="true" />

        {/* Safety notice */}
        <PaymentSafety />

        {/* Divider */}
        <div className="my-6 border-t border-tapovana-border" role="separator" aria-hidden="true" />

        {/* Help */}
        <HelpSection
          whatsappNumber={paymentDetails.whatsappNumber}
          whatsappDisplay={paymentDetails.whatsappDisplay}
        />

        <Footer />
      </div>
    </main>
  );
}

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

        <div className="space-y-4">
          <BankDetailsCard details={paymentDetails} />

          <div className="flex flex-col gap-3 pt-1">
            <CopyAllButton details={paymentDetails} />
            <WhatsAppShareButton details={paymentDetails} />
            <DownloadDetailsButton details={paymentDetails} />
          </div>

          <div className="pt-2">
            <PaymentSafety />
          </div>

          <div className="pt-1">
            <HelpSection
              whatsappNumber={paymentDetails.whatsappNumber}
              whatsappDisplay={paymentDetails.whatsappDisplay}
            />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}

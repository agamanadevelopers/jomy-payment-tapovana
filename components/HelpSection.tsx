import { MessageCircle, Phone } from 'lucide-react';

interface HelpSectionProps {
  whatsappNumber: string;
  whatsappDisplay: string;
}

export function HelpSection({ whatsappNumber, whatsappDisplay }: HelpSectionProps) {
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section
      aria-label="Payment Help"
      className="bg-tapovana-card border border-tapovana-border rounded-2xl px-5 py-6 text-center"
    >
      <h2 className="text-base font-bold text-tapovana-charcoal mb-1">
        Need Help with Payment?
      </h2>
      <p className="text-sm text-tapovana-muted mb-5">Our team is happy to assist you.</p>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Tapovana team on WhatsApp"
        className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-xl bg-whatsapp text-white text-sm font-bold uppercase tracking-widest shadow-sm hover:bg-whatsapp-hover transition-all duration-200 ease-out min-h-[52px] cursor-pointer select-none active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp-dark"
      >
        <MessageCircle size={18} strokeWidth={2} aria-hidden="true" />
        CHAT ON WHATSAPP
      </a>

      <a
        href={`tel:+${whatsappNumber}`}
        className="inline-flex items-center justify-center gap-2 mt-4 text-sm text-tapovana-secondary hover:text-tapovana-charcoal transition-colors duration-150 ease-out cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tapovana-green rounded"
        aria-label={`Call Tapovana at ${whatsappDisplay}`}
      >
        <Phone size={14} strokeWidth={1.8} aria-hidden="true" />
        {whatsappDisplay}
      </a>
    </section>
  );
}

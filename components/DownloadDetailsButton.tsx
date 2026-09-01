'use client';

import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import type { PaymentDetails } from '@/lib/paymentDetails';

interface DownloadDetailsButtonProps {
  details: PaymentDetails;
}

export function DownloadDetailsButton({ details }: DownloadDetailsButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const { jsPDF } = await import('jspdf');

      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pageW = doc.internal.pageSize.getWidth();
      const margin = 25;
      const contentW = pageW - margin * 2;
      let y = 28;

      // Title
      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(42, 83, 17);
      doc.text('TAPOVANA FARMLAND', pageW / 2, y, { align: 'center' });
      y += 10;

      // Subtitle
      doc.setFontSize(13);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(50, 50, 50);
      doc.text('Official Payment Details', pageW / 2, y, { align: 'center' });
      y += 10;

      // Divider
      doc.setDrawColor(210, 205, 195);
      doc.setLineWidth(0.4);
      doc.line(margin, y, pageW - margin, y);
      y += 14;

      const addField = (label: string, value: string) => {
        doc.setFontSize(9);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(120, 115, 107);
        doc.text(label.toUpperCase(), margin, y);
        y += 6;
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(26, 26, 26);
        doc.text(value, margin, y);
        y += 11;
      };

      addField('Account Name', details.accountName);
      addField('Bank Name', details.bankName);
      addField('Branch Name', details.branchName);
      addField('Account Number', details.accountNumber);
      addField('IFSC Code', details.ifsc);

      // Divider
      y += 4;
      doc.setDrawColor(210, 205, 195);
      doc.line(margin, y, pageW - margin, y);
      y += 12;

      // Safety section heading
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(42, 83, 17);
      doc.text('Payment Safety', margin, y);
      y += 7;

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(50, 50, 50);

      const safety1 = doc.splitTextToSize(
        'Please verify the Account Name, Account Number and IFSC Code before making the transfer.',
        contentW,
      );
      doc.text(safety1, margin, y);
      y += safety1.length * 5 + 3;

      const safety2 = doc.splitTextToSize(
        'For your security, please use only the bank details displayed on this official Tapovana payment page.',
        contentW,
      );
      doc.text(safety2, margin, y);
      y += safety2.length * 5 + 10;

      // Divider
      doc.setDrawColor(210, 205, 195);
      doc.line(margin, y, pageW - margin, y);
      y += 10;

      // Contact
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(120, 115, 107);
      doc.text('TAPOVANA WHATSAPP', margin, y);
      y += 6;
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(26, 26, 26);
      doc.text(details.whatsappDisplay, margin, y);

      doc.save('tapovana-payment-details.pdf');
    } catch {
      // Fallback: plain text download
      const content = `TAPOVANA FARMLAND
Official Payment Details

Account Name:
${details.accountName}

Bank Name:
${details.bankName}

Branch Name:
${details.branchName}

Account Number:
${details.accountNumber}

IFSC Code:
${details.ifsc}

Payment Safety:
Please verify the Account Name, Account Number and IFSC Code before making the transfer.
For your security, please use only the bank details displayed on this official Tapovana payment page.

Tapovana WhatsApp:
${details.whatsappDisplay}`;

      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'tapovana-payment-details.txt';
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      aria-label="Download bank details as PDF"
      className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl border-2 border-tapovana-green text-tapovana-green bg-transparent text-sm font-bold uppercase tracking-widest hover:bg-tapovana-green-light transition-all duration-200 min-h-[52px] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tapovana-green"
    >
      {loading ? (
        <>
          <Loader2 size={18} className="animate-spin" aria-hidden="true" />
          PREPARING...
        </>
      ) : (
        <>
          <Download size={18} strokeWidth={2} aria-hidden="true" />
          DOWNLOAD BANK DETAILS
        </>
      )}
    </button>
  );
}

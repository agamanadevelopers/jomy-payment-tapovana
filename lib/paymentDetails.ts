export const paymentDetails = {
  accountName: 'JOMY MATHEW',
  bankName: 'South Indian Bank',
  branchName: 'POTHANICAD',
  accountNumber: '0125053000008291',
  ifsc: 'SIBL0000760',
  whatsappNumber: '917090884850',
  whatsappDisplay: '+91 7090 884 850',
} as const;

export type PaymentDetails = typeof paymentDetails;

export function formatAllDetails(d: PaymentDetails): string {
  return `Account Name: ${d.accountName}
Bank Name: ${d.bankName}
Branch Name: ${d.branchName}
Account Number: ${d.accountNumber}
IFSC Code: ${d.ifsc}`;
}

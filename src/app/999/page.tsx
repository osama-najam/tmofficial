import PaymentSection from "@/app/compoenent/paymentsection";

export const metadata = {
  title: "Fee 999 - USTPO",
  description: "Payment Method",
};

export default function Page() {
  return (
    <PaymentSection
      invoiceImage="/Invoice-999.jpg"
      paymentLink="https://www.paypal.com/ncp/payment/3P6E6TJWAL9YW" // apna stripe link yahan dal
    />
  );
}






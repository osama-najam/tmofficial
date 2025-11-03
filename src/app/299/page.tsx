import PaymentSection from "@/app/compoenent/paymentsection";

export const metadata = {
  title: "Fee 299 - USTPO",
  description: "Payment Method",
};

export default function Page() {
  return (
    <PaymentSection
      invoiceImage="/Invoice-299.jpg"
      paymentLink="https://www.paypal.com/ncp/payment/MD67M28EFS2ZS"
    />
  );
}



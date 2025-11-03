import PaymentSection from "@/app/compoenent/paymentsection";

export const metadata = {
  title: "Fee 249 - USTPO",
  description: "Payment Method",
};

export default function Page() {
  return (
    <PaymentSection
      invoiceImage="/Invoice-249.png"
      paymentLink="https://www.paypal.com/ncp/payment/MD67M28EFS2ZS"
    />
  );
}




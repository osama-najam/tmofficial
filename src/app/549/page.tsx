import PaymentSection from "@/app/compoenent/paymentsection";

export const metadata = {
  title: "Fee 549 - USTPO",
  description: "Payment Method",
};

export default function Page() {
  return (
    <PaymentSection
      invoiceImage="/Invoice-999.png"
      paymentLink="https://www.paypal.com/paypalme/DigiclubPH?locale.x=en_US" // apna stripe link yahan dal
    />
  );
}


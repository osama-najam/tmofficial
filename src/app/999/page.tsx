import PaymentSection from "@/app/compoenent/paymentsection";

export const metadata = {
  title: "Fee 999 - USTPO",
  description: "Payment Method",
};

// build time check
if (!process.env.NEXT_API_ROLE_NINETYNINE) {
  throw new Error("❌ NEXT_API_ROLE is missing in .env.local");
}

const paymenthidelinknine = process.env.NEXT_API_ROLE_NINETYNINE as string;

export default function Page() {
  return (
    <PaymentSection
      invoiceImage="/Invoice-999.jpg"
      paymentLink={paymenthidelinknine}
    />
  );
}







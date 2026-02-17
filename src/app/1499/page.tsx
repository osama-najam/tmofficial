import PaymentSection from "@/app/compoenent/paymentsection";

export const metadata = {
  title: "Fee 549 - USTPO",
  description: "Payment Method",
};

// build time check
if (!process.env.NEXT_API_ROLE_FOURNINETYNINE) {
  throw new Error("❌ NEXT_API_ROLE is missing in .env.local");
}

const paymenthidelinkfournine = process.env.NEXT_API_ROLE_FOURNINETYNINE as string;

export default function Page() {
  return (
    <PaymentSection
      invoiceImage="/1499.jpg"
      paymentLink={paymenthidelinkfournine} // apna stripe link yahan dal
    />
  );
}




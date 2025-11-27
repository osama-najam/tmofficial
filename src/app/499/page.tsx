import PaymentSection from "@/app/compoenent/paymentsection";

export const metadata = {
  title: "Fee 499 - USTPO",
  description: "Payment Method",
};

type Paymenttype = [
  payment : string,
]

const paymenthidelkink : Paymenttype =process.env.NEXT_API_ROLE;

export default function Page() {
  return (
    <PaymentSection
      invoiceImage="/Invoice-499.png"
      paymentLink={paymenthidelkink}
    />
  );
}










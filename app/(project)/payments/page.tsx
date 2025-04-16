"use client";
import Button from "@/app/components/button";
import { useStripe } from "@/app/hooks/useStripe";

export default function Payments() {
  const {
    createPaymentStripeCheckout,
    createSubscriptionStripeCheckout,
    handleCreateStripePortal,
  } = useStripe();
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8 max-w-[800px] m-auto p-4">
      <h1 className="text-2xl">Pagamentos</h1>
      <div className="flex gap-2">
        <div onClick={() => createPaymentStripeCheckout({ testeId: "123" })}>
          <Button text="Pagamento Stripe" type="button" />
        </div>
        <div
          onClick={() => createSubscriptionStripeCheckout({ testeId: "123" })}
        >
          <Button text="Criar Assinatura Stripe" type="button" />
        </div>
        <div onClick={handleCreateStripePortal}>
          <Button text="Criar Portal de Pagamentos" type="button" />
        </div>
      </div>
    </div>
  );
}

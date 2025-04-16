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
        <Button
          onClick={() => createPaymentStripeCheckout({ testeId: "123" })}
          text="Pagamento Stripe"
        />
        <Button
          onClick={() => createSubscriptionStripeCheckout({ testeId: "123" })}
          text="Criar Assinatura Stripe"
        />
        <Button
          onClick={handleCreateStripePortal}
          text="Criar Portal de Pagamentos"
        />
      </div>
    </div>
  );
}

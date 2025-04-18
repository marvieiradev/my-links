"use client";
import useMercadoPago from "@/app/hooks/useMercadoPago";
import { useStripe } from "@/app/hooks/useStripe";
import { Button } from "@/components/ui/button";

export default function Payments() {
  const {
    createPaymentStripeCheckout,
    createSubscriptionStripeCheckout,
    handleCreateStripePortal,
  } = useStripe();

  const { createMercadoPagoCheckout } = useMercadoPago();

  return (
    <div className="flex flex-col justify-center items-center gap-8 max-w-[800px] m-auto p-4">
      <h1 className="text-2xl">Pagamentos</h1>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div onClick={() => createPaymentStripeCheckout({ testeId: "123" })}>
          <Button>Pagar com Stripe</Button>
        </div>
        <div
          onClick={() => createSubscriptionStripeCheckout({ testeId: "123" })}
        >
          <Button>Assinar com Stripe</Button>
        </div>

        <div
          onClick={() =>
            createMercadoPagoCheckout({
              testeId: "123",
              userEmail: "teste@teste.com",
            })
          }
        >
          <Button>Pagar com Mercado Pago</Button>
        </div>

        <div onClick={handleCreateStripePortal}>
          <Button variant="outline">Portal de Pagamentos</Button>
        </div>
      </div>
    </div>
  );
}

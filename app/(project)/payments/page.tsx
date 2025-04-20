"use client";
import useMercadoPago from "@/app/hooks/useMercadoPago";
import { useStripe } from "@/app/hooks/useStripe";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Payments() {
  const {
    createPaymentStripeCheckout,
    createSubscriptionStripeCheckout,
    handleCreateStripePortal,
  } = useStripe();

  const { createMercadoPagoCheckout } = useMercadoPago();

  return (
    <div className="flex flex-col justify-center items-center gap-8 m-auto p-4">
      <h1 className="text-3xl mb-4">Pagamentos</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center text-center">
        <Card className="flex flex-col w-full h-full border-indigo-500 rounded-2xl">
          <CardContent className="flex-1 pb-0 h-full justify-center gap-4 flex flex-col items-center w-[220px]">
            <p className="text-base font-semibold">Plano Gratuito</p>
            <div className="flex items-baseline">
              <p className="text-3xl font-bold">0,00</p>
            </div>
            <p className="text-lg font-semibold">Uso limitado</p>
            <div>
              <Button variant="outline">Selecionado</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col w-full h-full border-indigo-500 rounded-2xl">
          <CardContent className="flex-1 pb-0 h-full justify-center gap-4 flex flex-col items-center w-[220px]">
            <p className="text-base font-semibold">Pagamento anual</p>
            <div className="flex items-baseline">
              <p className="text-3xl font-bold">99,00</p>
              <p className="text-lg">/ano</p>
            </div>
            <p className="text-lg font-semibold">Pagar com Stripe</p>
            <div
              onClick={
                () => {} /*createPaymentStripeCheckout({ testeId: "123" })*/
              }
            >
              <Button>Pagar</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col w-full h-full border-indigo-500 rounded-2xl">
          <CardContent className="flex-1 pb-0 h-full justify-center gap-4 flex flex-col items-center w-[220px]">
            <p className="text-base font-semibold">Pagamento mensal</p>
            <div className="flex items-baseline">
              <p className="text-3xl font-bold">19,00</p>
              <p className="text-lg">/mês</p>
            </div>
            <p className="text-lg font-semibold">Pagar com Stripe</p>
            <div
              onClick={
                () => {} /*
                createSubscriptionStripeCheckout({ testeId: "123" })*/
              }
            >
              <Button>Pagar</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col w-full h-full border-indigo-500 rounded-2xl">
          <CardContent className="flex-1 pb-0 h-full justify-center gap-4 flex flex-col items-center w-[220px]">
            <p className="text-base font-semibold">Pagamento PIX</p>
            <div className="flex items-baseline">
              <p className="text-3xl font-bold">129,00</p>
            </div>
            <p className="text-lg font-semibold">Mercado Pago</p>
            <div
              onClick={
                () => {} /*
                createMercadoPagoCheckout({
                  testeId: "123",
                  userEmail: "teste@teste.com",
                })*/
              }
            >
              <Button>Pagar</Button>
            </div>
          </CardContent>
        </Card>

        {/* 
        <Card className="flex flex-col w-full h-full border-indigo-500 rounded-2xl">
          <CardContent className="flex-1 pb-0 h-full justify-center gap-4 flex flex-col items-center">
            <p className="text-base font-semibold">Gerenciar assinatura</p>
            <div className="flex items-baseline">
              <p className="text-3xl font-bold">99,00</p>
              <p className="text-lg">/ano</p>
            </div>
            <p className="text-lg font-semibold">Pagar com Stripe</p>
            <div onClick={handleCreateStripePortal}>
              <Button variant="outline">Gerenciar</Button>
            </div>
          </CardContent>
        </Card>
        */}
      </div>
    </div>
  );
}

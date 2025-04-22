"use client";
import { LogOutIcon, Wallet } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { handleAuth } from "@/app/actions/handle-auth";
import { redirect } from "next/navigation";

const SidebarSheet = () => {
  const handleLogoutClick = () => handleAuth();
  const toPayments = () => redirect("/payments");

  return (
    <Sheet>
      <SheetContent className="overflow-y-auto p-4">
        <SheetHeader>
          <SheetTitle className="text-left text-lg">Opções</SheetTitle>
        </SheetHeader>

        <div className="py-5 flex flex-col gap-4">
          <Button
            className="gap-2 justify-start text-white "
            variant="outline"
            onClick={toPayments}
          >
            <Wallet size={18} />
            Pagamentos
          </Button>

          <Button
            className="gap-2 justify-start text-white "
            variant="outline"
            onClick={handleLogoutClick}
          >
            <LogOutIcon size={18} /> Sair da conta
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarSheet;

"use client";
import { LogOutIcon, Wallet } from "lucide-react";
import { Button } from "./ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { handleAuth } from "@/app/actions/handle-auth";
import { redirect } from "next/navigation";

const SidebarSheet = () => {
  const handleLogoutClick = () => handleAuth();
  const toPayments = () => redirect("/payments");

  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="py-5 flex flex-col gap-2">
        <Button
          className="gap-2 justify-start"
          variant="ghost"
          onClick={handleLogoutClick}
        >
          <LogOutIcon size={18} /> Sair da conta
        </Button>

        <Button
          className="gap-2 justify-start"
          variant="ghost"
          onClick={toPayments}
        >
          <Wallet size={18} />
          Pagamentos
        </Button>
      </div>
    </SheetContent>
  );
};

export default SidebarSheet;

"use client";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
//import { Sheet, SheetTrigger } from "./ui/sheet";
//import { MenuIcon } from "lucide-react";
//import { Button } from "./ui/button";
import Image from "next/image";
import { Button } from "./ui/button";
//import { MenuIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { handleAuth } from "@/app/actions/handle-auth";
//import SidebarSheet from "./sidebar-sheet";

interface HeaderProps {
  image: string;
}

const Header = (props: HeaderProps) => {
  const handleLogoutClick = () => handleAuth();
  const toPayments = () => redirect("/payments");

  return (
    <>
      <Card className="rounded-t-none p-2 border-2 border-b-indigo-500 bg-background">
        <CardContent className="flex flex-row justify-between items-center">
          <Link href="/">
            <Image src="/my-logo.svg" height={26} width={26} alt="logo" />
          </Link>
          <p className="hidden md:flex">Dashboard</p>

          <div className="flex justify-center gap-2">
            <Button onClick={toPayments}>Planos</Button>
            <Button
              variant="outline"
              className="min-w-0 font-semibold"
              onClick={handleLogoutClick}
            >
              <img
                className="w-[30px] h-[30px] rounded-full"
                src={props.image}
                alt="avatar"
              />
              LogOut
            </Button>
          </div>

          {/*<Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="min-w-0">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src={props.image}
                  alt="avatar"
                />
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SidebarSheet />
          </Sheet>*/}
        </CardContent>
      </Card>
    </>
  );
};
export default Header;

"use client";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";
import { handleAuth } from "@/app/actions/handle-auth";
import { LogOut, MenuIcon, Wallet } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  image: string;
}

const Header = (props: HeaderProps) => {
  const handleLogoutClick = () => handleAuth();
  const toPayments = () => redirect("/payments");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <>
      <Card className="rounded-t-none p-2 border-2 border-b-indigo-500 bg-background">
        <CardContent className="flex flex-row justify-between items-center">
          <Link href="/">
            <Image src="/my-logo.svg" height={26} width={26} alt="logo" />
          </Link>
          <p>Dashboard</p>

          <div className="flex justify-center gap-2">
            <Button
              variant="outline"
              className="min-w-0"
              onClick={handleMenuClick}
            >
              <img
                className="w-[30px] h-[30px] rounded-full"
                src={props.image}
                alt="avatar"
              />
              <MenuIcon />
            </Button>

            {menuIsOpen && (
              <div
                className="z-50 absolute top-12 right-6 w-[100px] h-[70px] bg-white shadow-md flex flex-col justify-center items-start"
                onMouseLeave={() => setMenuIsOpen(false)}
              >
                <div onClick={() => setMenuIsOpen(false)}>
                  <button
                    className="text-indigo-500 text-base font-semibold cursor-pointer"
                    onClick={toPayments}
                  >
                    <div className="flex flex-row items-center gap-2 border-b border-background w-[100px] h-[35px] p-1 hover:bg-indigo-500 hover:text-white">
                      <Wallet size={20} />
                      Planos
                    </div>
                  </button>
                </div>

                <button
                  className="text-indigo-500 text-base font-semibold cursor-pointer"
                  onClick={handleLogoutClick}
                >
                  <div className="flex flex-row items-center gap-2 w-[100px] h-[35px] p-1 hover:bg-indigo-500 hover:text-white">
                    <LogOut size={20} />
                    Logout
                  </div>
                </button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
};
export default Header;

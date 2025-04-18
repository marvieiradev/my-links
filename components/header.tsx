import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import SidebarSheet from "./sidebar-sheet";

interface HeaderProps {
  image: string;
  name: string;
}

const Header = (props: HeaderProps) => {
  return (
    <>
      <Card className="rounded-t-none p-2 border-2 border-b-indigo-500 bg-background">
        <CardContent className="flex flex-row justify-between items-center">
          <Link href="/">
            <Image src="/vercel.svg" height={18} width={18} alt="logo" />
          </Link>
          <p>{props.name}</p>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="min-w-0">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src={props.image}
                  alt={props.name}
                />
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SidebarSheet />
          </Sheet>
        </CardContent>
      </Card>
    </>
  );
};
export default Header;

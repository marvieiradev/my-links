import { handleAuth } from "@/app/actions/handle-auth";
import { auth } from "@/app/lib/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LogIn } from "lucide-react";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8 max-w-[800px] m-auto p-4">
      <Card className="border-2 border-indigo-500 rounded-2xl">
        <CardContent className="flex flex-col justify-center items-center gap-8 ">
          <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text">
            My Links
          </h1>
          <h2 className="text-2xl">Bem vindo!</h2>
          <h3 className="text-lg text-center max-w-[80%]">
            Faça login para começar a criar seus links
          </h3>
          <form action={handleAuth}>
            <Button type="submit">
              <LogIn width={24} />
              Faça login com o Google
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

import { handleAuth } from "@/app/actions/handle-auth";
import { auth } from "@/app/lib/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8 max-w-[800px] m-auto p-4">
      <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text">
        My Links
      </h1>
      <h2 className="text-2xl">Faça login para começar</h2>
      <form action={handleAuth}>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}

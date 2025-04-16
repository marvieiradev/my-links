import { handleAuth } from "@/app/actions/handle-auth";
import Button from "@/app/components/button";
import { auth } from "@/app/lib/auth";
import Link from "next/link";

export default async function Dashboard() {
  const session = await auth();

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8 max-w-[800px] m-auto p-4">
      <h1 className="text-4xl font-extrabold">Dashborad</h1>
      <p className="text-xl">
        {session?.user?.email ? session?.user?.name : "Usuario não logado"}
      </p>
      {session?.user?.email && (
        <form action={handleAuth}>
          <Button text="Sair" type="submit" onClick={() => {}} />
        </form>
      )}

      <Link className="bg-blue-500 py-1 px-2 rounded-full" href="/payments">
        Pagamentos
      </Link>
    </div>
  );
}

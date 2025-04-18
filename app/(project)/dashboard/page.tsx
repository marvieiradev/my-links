import { handleAuth } from "@/app/actions/handle-auth";
import { auth } from "@/app/lib/auth";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  const image = session?.user?.image!;
  const name = session?.user?.name!;

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <Header name={name} image={image} />
      <div className="flex flex-col justify-center items-center gap-8 max-w-[800px] m-auto p-4">
        <h1 className="text-4xl font-extrabold">Dashborad</h1>
        <p className="text-xl">
          {session?.user?.email ? session?.user?.name : "Usuario não logado"}
        </p>
        <img
          className="w-[100px] h-[100px] rounded-full"
          src={image}
          alt="user"
        />
        {session?.user?.email && (
          <form action={handleAuth}>
            <Button type="submit">Sair</Button>
          </form>
        )}
      </div>
    </>
  );
}

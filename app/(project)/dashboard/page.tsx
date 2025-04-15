import { handleAuth } from "@/app/actions/handle-auth";
import { auth } from "@/app/lib/auth";
import { Session } from "inspector/promises";

export default async function Dashboard() {
  const session = await auth();
  return (
    <div>
      <h1 className="text-xl">Dashborad</h1>
      <p>
        {session?.user?.email ? session?.user?.email : "Usuario não logado"}
      </p>
      {session?.user?.email && (
        <form action={handleAuth}>
          <button type="submit">Sair</button>
        </form>
      )}
    </div>
  );
}

import { handleAuth } from "@/app/actions/handle-auth";
import Button from "@/app/components/button";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8 max-w-[800px] m-auto p-4">
      <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text">
        My Links
      </h1>
      <h2 className="text-2xl">Faça login para começar</h2>
      <form action={handleAuth}>
        <Button text="Signin with Google" type="submit" />
      </form>
    </div>
  );
}

import { handleAuth } from "@/app/actions/handle-auth";

export default function Login() {
  return (
    <>
      <h1 className="text-xl">Login</h1>
      <form action={handleAuth}>
        <button type="submit">Signin with Google</button>
      </form>
    </>
  );
}

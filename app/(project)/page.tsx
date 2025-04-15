import Link from "next/link";
import Button from "../components/button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8 max-w-[800px] m-auto p-4">
      <h1 className="text-4xl font-extrabold text-center">
        Bem-vindo ao{" "}
        <span className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text">
          My Links
        </span>
        !
      </h1>
      <h2 className="text-xl text-center">
        Personalize seu link na bio. Um link para ajudá-lo a compartilhar tudo o
        que você cria, seleciona e vende a partir do seu perfil de mídia social.
      </h2>
      <Link href="/login">
        <Button text="Quero meu link personalizado!" />
      </Link>
    </div>
  );
}

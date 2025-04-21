import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-full w-full flex flex-col">
      <div className="w-full mt-4 flex justify-end px-4">
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row justify-center itens-center px-4 w-[98%]">
        <div className="lg:w-[50%] flex flex-col justify-center items-center gap-8 mt-6 lg:mt-0">
          <h1 className="text-4xl font-extrabold text-center max-w-[80%]">
            Bem-vindo ao{" "}
            <span className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text">
              My Links
            </span>
            !
          </h1>
          <h2 className="text-xl lg:text-2xl text-center max-w-[80%]">
            Personalize seu link na bio. Um link para ajudá-lo a compartilhar
            tudo o que você cria, seleciona e vende a partir do seu perfil de
            mídia social.
          </h2>
          <Link href="/login">
            <Button>Quero meu link personalizado!</Button>
          </Link>
        </div>
        <div className="lg:w-[50%]">
          <img src="./home.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

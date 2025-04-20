"use client";
import { toast } from "sonner";
import { Button } from "./ui/button";

interface LinkInfoProps {
  userId: string;
}

const copy = () => {
  toast("Copiado");
};

const LinkInfos = (props: LinkInfoProps) => {
  return (
    <div className="p-0 mt-2 gap-2 flex flex-col items-center w-full">
      <p className="text-lg">Seu Link:</p>
      <p className="text-sm truncate max-w-[95%]">{`https://my-linkss.vercel.app/${props.userId}`}</p>
      <div className="mt-2 flex gap-4">
        <Button onClick={copy}>Copiar</Button>
        <Button>Acesar</Button>
      </div>
    </div>
  );
};

export default LinkInfos;

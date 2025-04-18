import InputLinks from "./input-links";
import { Button } from "./ui/button";

const FormLinks = () => {
  return (
    <>
      <h1 className="text-xl">Personalize seus links</h1>
      <div className="w-full flex flex-col gap-2">
        <InputLinks label="Detalhes do link #1" />
        <InputLinks label="Detalhes do link #2" />
        <InputLinks label="Detalhes do link #3" />
        <InputLinks label="Detalhes do link #4" />
      </div>
      <div className="flex justify-end items-end">
        <Button>Salvar</Button>
      </div>
    </>
  );
};

export default FormLinks;

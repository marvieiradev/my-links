import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface InputLinksProps {
  label: string;
}

const InputLinks = (props: InputLinksProps) => {
  return (
    <>
      <div className="w-full p-4 border border-indigo-500 rounded-2xl">
        <div className="w-full">
          <Label className="text-base mb-2">{props.label}</Label>
          <div className="flex flex-col md:flex-row gap-4">
            <Input placeholder="Título do link" />
            <Input placeholder="Url do link" />
          </div>
        </div>
      </div>
    </>
  );
};

export default InputLinks;

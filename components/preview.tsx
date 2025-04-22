import { Github, Instagram, Linkedin, Twitch } from "lucide-react";
//import { Button } from "./ui/button";

interface PreviewProps {
  image: string;
  title: string;
  subtitle: string;
}

const Preview = (props: PreviewProps) => {
  return (
    <>
      <h1 className="text-xl mb-2 text-center">Preview</h1>
      <div className=" flex flex-col gap-8 justify-center items-center bg-white rounded-3xl border-6 border-black min-w-[200px] w-[300px]">
        <div className="p-2 flex flex-col justify-center items-center gap-2 w-full moblie">
          <img
            className="w-[100px] h-[100px] rounded-full mt-4"
            src={props.image}
            alt="user"
          />
          <p className="text-lg font-bold text-center text-black truncate">
            {props.title}
          </p>
          <p className="text-base text-center text-black truncate">
            {props.subtitle}
          </p>
          <div className="w-full flex flex-col gap-2 mb-4 p-4 md:gap-4">
            <div className="p-2 px-4 bg-indigo-500 rounded-full flex justify-center">
              <div className="flex gap-4">
                <Instagram width={20} />
                <p className="text-center">Instagram</p>
              </div>
            </div>
            <div className="p-2 px-4 bg-indigo-500 rounded-full flex justify-center">
              <div className="flex gap-4">
                <Twitch width={20} />
                <p className="text-center">Twitch</p>
              </div>
            </div>
            <div className="p-2 px-4 bg-indigo-500 rounded-full flex justify-center">
              <div className="flex gap-4">
                <Linkedin width={20} />
                <p className="text-center">Linkedin</p>
              </div>
            </div>
            <div className="p-2 px-4 bg-indigo-500 rounded-full flex justify-center">
              <div className="flex gap-4">
                <Github width={20} />
                <p className="text-center">Github</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;

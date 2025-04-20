"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

interface FormLinksProps {
  userId: string;
  title: string;
  subtitle: string;
}

const FormLinks = (props: FormLinksProps) => {
  const [user, setUser] = useState(props.userId);
  const [title, setTitle] = useState(props.title);
  const [subtitle, setSubtitle] = useState(props.subtitle);
  const [tiltleLink1, setTiltleLink1] = useState("Intagram");
  const [urlLink1, setUrlLink1] = useState("https://www.instagram.com");
  const [tiltleLink2, setTiltleLink2] = useState("Twitch");
  const [urlLink2, setUrlLink2] = useState("https://www.twitch.com");
  const [tiltleLink3, setTiltleLink3] = useState("Linkedin");
  const [urlLink3, setUrlLink3] = useState("https://www.linkedin.com");
  const [tiltleLink4, setTiltleLink4] = useState("Github");
  const [urlLink4, setUrlLink4] = useState("https://www.github.com");

  const handleSave = () => {};

  return (
    <>
      <h1 className="text-xl">Personalize seus links</h1>
      <div className="w-full flex flex-col gap-2">
        {/*-------------------------------- */}
        <div className="w-full p-4 border border-indigo-500 rounded-2xl">
          <div className="w-full">
            <Label className="text-base mb-2">Informações Principais</Label>
            <div className="flex flex-col md:flex-row gap-2">
              <Input
                placeholder="User"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <Input
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                placeholder="Subtítulo"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/*-------------------------------- */}
        <div className="w-full p-4 border border-indigo-500 rounded-2xl">
          <div className="w-full">
            <Label className="text-base mb-2">Detalhes do link #1</Label>
            <div className="flex flex-col md:flex-row gap-2">
              <Input
                placeholder="Título do link"
                value={tiltleLink1}
                onChange={(e) => setTiltleLink1(e.target.value)}
              />
              <Input
                placeholder="Url do link"
                value={urlLink1}
                onChange={(e) => setUrlLink1(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/*-------------------------------- */}
        <div className="w-full p-4 border border-indigo-500 rounded-2xl">
          <div className="w-full">
            <Label className="text-base mb-2">Detalhes do link #2</Label>
            <div className="flex flex-col md:flex-row gap-2">
              <Input
                placeholder="Título do link"
                value={tiltleLink2}
                onChange={(e) => setTiltleLink2(e.target.value)}
              />
              <Input
                placeholder="Url do link"
                value={urlLink2}
                onChange={(e) => setUrlLink2(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/*-------------------------------- */}
        <div className="w-full p-4 border border-indigo-500 rounded-2xl">
          <div className="w-full">
            <Label className="text-base mb-2">Detalhes do link #3</Label>
            <div className="flex flex-col md:flex-row gap-2">
              <Input
                placeholder="Título do link"
                value={tiltleLink3}
                onChange={(e) => setUrlLink3(e.target.value)}
              />
              <Input
                placeholder="Url do link"
                value={urlLink3}
                onChange={(e) => setUrlLink3(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/*-------------------------------- */}
        <div className="w-full p-4 border border-indigo-500 rounded-2xl">
          <div className="w-full">
            <Label className="text-base mb-2">Detalhes do link #4</Label>
            <div className="flex flex-col md:flex-row gap-2">
              <Input
                placeholder="Título do link"
                value={tiltleLink4}
                onChange={(e) => setTiltleLink4(e.target.value)}
              />
              <Input
                placeholder="Url do link"
                value={urlLink4}
                onChange={(e) => setUrlLink4(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/*-------------------------------- */}
      </div>
      <div className="flex justify-end items-end">
        <Button onClick={handleSave}>Salvar</Button>
      </div>
    </>
  );
};

export default FormLinks;

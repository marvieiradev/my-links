"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

interface FormLinksProps {
  userId: string;
}

const FormLinks = () => {
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [tiltleLink1, setTiltleLink1] = useState("");
  const [urlLink1, setUrlLink1] = useState("");
  const [tiltleLink2, setTiltleLink2] = useState("");
  const [urlLink2, setUrlLink2] = useState("");
  const [tiltleLink3, setTiltleLink3] = useState("");
  const [urlLink3, setUrlLink3] = useState("");
  const [tiltleLink4, setTiltleLink4] = useState("");
  const [urlLink4, setUrlLink4] = useState("");

  const handleSave = () => {
    const links = {
      u: user,
      t: title,
      sub: subtitle,
      tl1: tiltleLink1,
      ul1: urlLink1,
      tl2: tiltleLink2,
      ul2: urlLink2,
      tl3: tiltleLink3,
      ul3: urlLink3,
      tl4: tiltleLink4,
      ul4: urlLink4,
    };
    console.log(links.u);
  };

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
              <Input placeholder="Título do link" />
              <Input placeholder="Url do link" />
            </div>
          </div>
        </div>
        {/*-------------------------------- */}
        <div className="w-full p-4 border border-indigo-500 rounded-2xl">
          <div className="w-full">
            <Label className="text-base mb-2">Detalhes do link #2</Label>
            <div className="flex flex-col md:flex-row gap-2">
              <Input placeholder="Título do link" />
              <Input placeholder="Url do link" />
            </div>
          </div>
        </div>
        {/*-------------------------------- */}
        <div className="w-full p-4 border border-indigo-500 rounded-2xl">
          <div className="w-full">
            <Label className="text-base mb-2">Detalhes do link #3</Label>
            <div className="flex flex-col md:flex-row gap-2">
              <Input placeholder="Título do link" />
              <Input placeholder="Url do link" />
            </div>
          </div>
        </div>
        {/*-------------------------------- */}
        <div className="w-full p-4 border border-indigo-500 rounded-2xl">
          <div className="w-full">
            <Label className="text-base mb-2">Detalhes do link #4</Label>
            <div className="flex flex-col md:flex-row gap-2">
              <Input placeholder="Título do link" />
              <Input placeholder="Url do link" />
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

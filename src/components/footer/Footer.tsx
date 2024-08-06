import React from "react";
import { InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
  return (
    <>
      <div className="flex justify-center bg-indigo-900 text-white py-4">
        <div className="container flex flex-col items-center py-4">
            <p className="text-xl font-bold">Blog pessoal João Pedro | Copyright: </p>
            <p className="text-lg">Acesse minhas redes sociais</p>
            <div className="flex gap-2">
                <LinkedinLogo size={48} weight="bold" />
                <InstagramLogo size={48} weight="bold" />
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

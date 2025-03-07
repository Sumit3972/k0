"use client";
import lookup from "@/data/lookup";
import { ArrowRight, Link } from "lucide-react";
import React, { useContext, useState } from "react";
import Colors from "@/data/color";
import { Messagecontext } from "@/context/messagecontext";
import { Userdetailcontext } from "@/context/Userdetail";
import Signdialog from "./Signdialog";

function Hero() {
  const [userinput, setuserinput] = useState();
  const { message, setmessage } = useContext(Messagecontext);
  const { userdetail, setuserdetail } = useContext(Userdetailcontext);
  const [openDialog, setopenDialog] = useState(false);
  const onGenerate = (input) => {
    if (!userdetail?.name) {
      setopenDialog(true);
      return;
    }
    setmessage({
      role: "user",
      content: input,
    });
  };

  return (
    <div className="flex flex-col items-center mt-36 xl:mt-52 gap-5">
      <h2 className="font-bold text-4xl">{lookup.HERO_HEADING}</h2>
      <p className="text-gray-400 font-medium">{lookup.HERO_DESC}</p>
      <div
        className="p-2 border rounded-xl max-w-xl w-full mt-3"
        style={{
          backgroundColor: Colors.BACKGROUND,
        }}
      >
        <div className="flex gap-2">
          <textarea
            onChange={(event) => setuserinput(event.target.value)}
            className="outline-none bg-transparent w-full h-32 max-h-56 resize-none"
            placeholder={lookup.INPUT_PLACEHOLDER}
          />

          {userinput && (
            <ArrowRight
              onClick={() => onGenerate(userinput)}
              className="bg-blue-500 w-10 h-10 rounded-md p-2 cursor-pointer"
            ></ArrowRight>
          )}
        </div>
        <Link className="h-5 w-5" />
      </div>
      <div className=" mt-5 flex flex-wrap max-w-2xl items-center justify-center gap-3">
        {lookup.SUGGSTIONS.map((suggestion, index) => (
          <h2
            onClick={() => onGenerate(suggestion)}
            className="p-1 px-2 border rounded-full text-sm text-gray-400 hover:text-white cursor-pointer"
            key={index}
          >
            {suggestion}
          </h2>
        ))}
      </div>
      <Signdialog
        opendialog={openDialog}
        closedialog={(v) => setopenDialog(false)}
      />
    </div>
  );
}

export default Hero;

import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="bg-lama mx-5 my-6 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-white text-3xl rotate-3  bg-head">
          Wear comfort and style
        </h2>
        <h1 className="text-2xl">Designed to fit your personal style.</h1>
        <button className="w-20 py-2 text-white bg-head rounded-md ">
          shopNow
        </button>
      </div>
      <div className="">
        <Image src="/man.png" alt="" width={200} height={100} />
      </div>
    </div>
  );
}

export default HeroSection;

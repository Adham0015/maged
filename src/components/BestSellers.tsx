import Image from "next/image";
import React from "react";

function BestSellers() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-5 mx-5 my-6 ">
      <div className="bg-lama ">
        <Image
          src="/shirt.png"
          alt=""
          width={350}
          height={350}
          className="cursor-pointer"
        />
      </div>
      <div className="bg-lama ">
        <Image
          src="/shirt.png"
          alt=""
          width={350}
          height={350}
          className="cursor-pointer"
        />
      </div>
      <div className="bg-lama ">
        <Image
          src="/shirt.png"
          alt=""
          width={350}
          height={350}
          className="cursor-pointer"
        />
      </div>
      <div className="bg-lama ">
        <Image
          src="/shirt.png"
          alt=""
          width={350}
          height={350}
          className="cursor-pointer"
        />
      </div>
      <div className="bg-lama ">
        <Image
          src="/shirt.png"
          alt=""
          width={350}
          height={350}
          className="cursor-pointer"
        />
      </div>
      <div className="bg-lama ">
        <Image
          src="/shirt.png"
          alt=""
          width={350}
          height={350}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default BestSellers;

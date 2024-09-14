import Image from "next/image";
import React from "react";

function FavoriteProducts() {
  return (
    <div className="flex justify-center gap-8 mx-5 my-6">
      <div className="bg-lama ">
        <Image
          src="/shirt.png"
          alt=""
          width={350}
          height={100}
          className="cursor-pointer"
        />
      </div>
      <div className="bg-lama ">
        <Image
          src="/shirt.png"
          alt=""
          width={350}
          height={100}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default FavoriteProducts;

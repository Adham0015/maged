import Image from "next/image";
import React from "react";

function FavoriteProducts() {
  return (
    <div className="flex justify-between gap-8 mx-5 my-6">
      <div className="bg-lama w-1/2">
        <Image src="/shirt.png" alt="" width={100} height={350} />
      </div>
      <div className="bg-lama w-1/2">
        <Image src="/shirt.png" alt="" width={100} height={350} />
      </div>
    </div>
  );
}

export default FavoriteProducts;

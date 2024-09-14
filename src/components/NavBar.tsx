import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div className="">
      <div className="bg-lama text-center">
        <h1 className="text-head text-xl font-bold">
          buy now and take a discount reach to 25%
        </h1>
      </div>
      <div className="flex justify-between mx-6 my-4">
        <div className="flex gap-5">
          <Image
            src="/cart.PNG"
            alt=""
            width={30}
            height={30}
            className="cursor-pointer"
          />
          <Image
            src="/search.png"
            alt=""
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </div>
        <div className="text-4xl font-bold">Hunter</div>
        <div className="flex gap-5">
          <Image
            src="/facebook.png"
            alt=""
            width={30}
            height={30}
            className="cursor-pointer"
          />

          <Image
            src="/instagram.png"
            alt=""
            width={30}
            height={30}
            className="cursor-pointer"
          />

          <Image
            src="/linked.png"
            alt=""
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 font-semibold text-gray-500">
        <Link href="">HomePage</Link>
        <Link href="">underShirt</Link>
        <Link href="">boxer</Link>
        <Link href="">t-shirt</Link>
        <Link href="">short</Link>
      </div>
    </div>
  );
}

export default NavBar;

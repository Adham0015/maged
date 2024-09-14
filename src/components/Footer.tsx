import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-black my-5 h-80 flex flex-col justify-center">
      <div className="mx-5 my-5 flex flex-row justify-center bg-black">
        <div className="w-2/6">
          <h1 className="text-white text-3xl font-semibold">Hunter</h1>
        </div>
        <div className="w-1/6 flex flex-col text-white gap-1">
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
        </div>
        <div className="w-1/6 flex flex-col text-white gap-1">
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
        </div>
        <div className="w-1/6 flex flex-col text-white gap-1">
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
        </div>
        <div className="w-1/6 flex flex-col text-white gap-1">
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
        </div>
      </div>
      <div className="border border-none bg-gray-500 mx-5  w-100vh h-1" />
      <div className="flex items-center justify-center mt-7 gap-3">
        <Image
          src="/facebook.png"
          alt=""
          width={30}
          height={30}
          className="cursor-pointer bg-white rounded-xl"
        />
        <Image
          src="/instagram.png"
          alt=""
          width={30}
          height={30}
          className="cursor-pointer  bg-white rounded-xl"
        />
        <Image
          src="/linked.png"
          alt=""
          width={30}
          height={30}
          className="cursor-pointer bg-white rounded-xl"
        />
        <Image
          src="/facebook.png"
          alt=""
          width={30}
          height={30}
          className="cursor-pointer bg-white rounded-xl"
        />
        <Image
          src="/instagram.png"
          alt=""
          width={30}
          height={30}
          className="cursor-pointer bg-white rounded-xl"
        />
      </div>
      <div className="flex justify-center mt-4">
        <h1 className="text-white">
          @CopyRight-All Right Reserved by
          <span className="font-semibold text-white">Adham.dev</span>
        </h1>
      </div>
    </div>
  );
}

export default Footer;

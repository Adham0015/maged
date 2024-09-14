import Image from "next/image";
import React from "react";

export default function Icons() {
  return (
    <div className="bg-head mx-5 my-6 py-7 flex items-center justify-center gap-24">
      <div className="flex flex-col items-center text-white">
        <Image src="/gift.png" alt="" width={40} height={40} />
        <p>Long lasting quality</p>
      </div>
      <div className="flex flex-col items-center text-white">
        <Image src="/vector.png" alt="" width={40} height={40} />
        <p>Exceptional comfort</p>
      </div>
      <div className="flex flex-col items-center text-white">
        <Image src="/badge.png" alt="" width={40} height={40} />
        <p>Proudly made in Egypt</p>
      </div>
    </div>
  );
}

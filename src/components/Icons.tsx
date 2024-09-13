import Image from "next/image";
import React from "react";

export default function Icons() {
  return (
    <div className="bg-head mx-5 my-6 py-5 flex items-center justify-center gap-24">
      <Image src="/gift.png" alt="" width={40} height={40} />
      <Image src="/vector.png" alt="" width={40} height={40} />
      <Image src="/badge.png" alt="" width={40} height={40} />
    </div>
  );
}

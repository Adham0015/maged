import Image from "next/image";

function CategoryList() {
  return (
    <div className="flex flex-row gap-3 mx-4 my-5 ">
      <div className="relative">
        <Image
          src="/shirt.png"
          alt=""
          width={200}
          height={200}
          //   className="object-cover"
        />
      </div>
      <div className="relative">
        <Image src="/shirt.png" alt="" width={200} height={200} />
      </div>
      <div className="relative">
        <Image src="/shirt.png" alt="" width={200} height={200} />
      </div>
      <div className="relative">
        <Image src="/shirt.png" alt="" width={200} height={200} />
      </div>
      <div className="relative">
        <Image src="/shirt.png" alt="" width={200} height={200} />
      </div>
      <div className="relative">
        <Image src="/shirt.png" alt="" width={200} height={200} />
      </div>
      <div className="relative">
        <Image src="/shirt.png" alt="" width={200} height={200} />
      </div>
      <div className="relative">
        <Image src="/shirt.png" alt="" width={200} height={200} />
      </div>
      <div className="relative">
        <Image src="/shirt.png" alt="" width={200} height={200} />
      </div>
      <div className="relative">
        <Image src="/shirt.png" alt="" width={200} height={200} />
      </div>
    </div>
  );
}

export default CategoryList;

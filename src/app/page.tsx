import BestSellers from "@/components/BestSellers";
import CategoryList from "@/components/CategoryList";
import FavoriteProducts from "@/components/FavoriteProducts";
import HeroSection from "@/components/HeroSection";
import Icons from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className="flex items-center justify-center gap-3">
        <div className=" w-32 h-1 bg-black border " />
        <h1 className="font-semibold text-xl">Favorite in Men's Section</h1>
        <div className=" w-32 h-1 bg-black border " />
      </div>
      <FavoriteProducts />
      <div className="flex items-center justify-center gap-3">
        <div className=" w-32 h-1 bg-black border " />
        <h1 className="font-semibold text-xl">best seller</h1>
        <div className=" w-32 h-1 bg-black border " />
      </div>
      <BestSellers />
      <Icons />
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-xl">Follow us on Instagram</h1>
        <div className="flex gap-3">
          <Link href="" className="font-semibold">
            @hunter-eg
          </Link>
          <Image
            src="/instagram.png"
            alt=""
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </div>
      </div>
      <CategoryList />
    </div>
  );
}

import BestSellers from "@/components/BestSellers";
import FavoriteProducts from "@/components/FavoriteProducts";
import HeroSection from "@/components/HeroSection";
import Icons from "@/components/Icons";

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
    </div>
  );
}

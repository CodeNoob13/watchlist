import Image from "next/image";

export const MovieCard = () => {
  return (
    <div className="w-[225px]">
      <div className="object-cover relative w-full h-[300px]">
        <Image src="/poster.jpg" fill alt="" />
      </div>
      <div className="flex flex-col bg-[#1F1F1F] text-white px-6 py-3">
        <span>Top Gun: Maverick</span>
        <span>(2022)</span>
      </div>
    </div>
  );
};

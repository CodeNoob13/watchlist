import Image from "next/image";

export const MovieCard = () => {
  return (
    <div className="w-[200px] relative">
      <div className="object-cover relative w-full h-[265px] rounded-t overflow-hidden">
        <Image src="/poster.jpg" fill alt="" />
      </div>
      <div>
        <div className="flex flex-col bg-[#1F1F1F] text-[#E1E1E1] px-5 py-9 relative rounded-b">
          <span className="text-2xl">Top Gun: Maverick</span>
          <span className="text-xl font-extralight">(2022)</span>
          <div className="absolute top-3 right-3 flex items-center gap-1">
            <Image src="/star.svg" height={20} width={20} alt="" />
            <span className="text-xl">
              9<span className="text-sm align-top">/10</span>
            </span>
          </div>
        </div>
      </div>
      <Image
        src="/ribbon.svg"
        width={34}
        height={45}
        alt=""
        className="absolute -top-1 left-0"
      />
    </div>
  );
};

import Image from "next/image";

export const MovieCard = ({ title, image }) => {
  return (
    <div className="w-full relative">
      <div className="object-cover relative w-full h-[350px] rounded-t overflow-hidden">
        <Image src={image} fill alt="" />
      </div>
      <div>
        <div className="flex flex-col bg-[#1F1F1F] text-[#E1E1E1] px-5 py-9 relative rounded-b min-h-[175px] max-h-[175px]">
          <span className="text-2xl">{title}</span>
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
        className="absolute top-0 left-0 cursor-pointer"
      />
    </div>
  );
};

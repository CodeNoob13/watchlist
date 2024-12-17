import Image from "next/image";

const MyLists = () => {
  return (
    <div>
      <h2 className="text-2xl text-[#D9D9D9] text-opacity-60">My Lists</h2>
      <div>
        <div className="flex gap-4 pt-6 pl-2 items-center">
          <Image src="/image.svg" width={24} height={24} alt="" />
          <h3 className="text-xl">Movies by Tom Cruise</h3>
        </div>
      </div>
    </div>
  );
};

export default MyLists;

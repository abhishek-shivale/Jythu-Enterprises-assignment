import partner from "@/assets/Partnner.png";
function Patnner() {
  return (
    <div>
      <div className="p-8 md:p-16">
        <p className="font-bold text-2xl md:text-4xl">
          <span className="text-[#00C397]">200+</span>
          Trusted Partners
        </p>
        <div className="">
          <img
            src={partner}
            className="mt-10 h-[50px] md:mt-20  w-full object-cover md:h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Patnner;

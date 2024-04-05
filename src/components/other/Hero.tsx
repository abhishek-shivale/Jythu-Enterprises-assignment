import { CirclePlayIcon } from "lucide-react";
import svg from "@/assets/hero.svg";
import photo from "@/assets/photo.png";
function Hero() {
  return (
    <div className="w-full min-h-screen object-center bg-[url('@/assets/image.png')] ">
      <div className="flex flex-1 flex-wrap justify-around items-center">
        <div className="">
          <img src={svg} className="max-h-screen" alt="" />
          <div className="bg-white shadow-gray-700 shadow-md py-3 p-5 max-w-[450px] rounded-lg flex justify-evenly ">
            <div>
              <img src={photo} className="max-h-16" alt="" />
            </div>
            <div>
              <p className="text-[#00C397] font-bold">5.4K</p>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
        <div className="font-extrabold overflow-clip mt-4 mx-4">
          <p className="text-[#00C397] text-lg">Welcome To jythu</p>
          <h1 className="text-7xl text-white">A Marketing</h1>
          <h1 className="text-7xl text-white">
            <span className="text-[#00C397] underline">Agency</span> To Grow
          </h1>
          <h1 className="text-7xl text-white">Your Business</h1>
          <p className="font-normal text-gray-600">
            We are 100+ professional software engineers with more than 10 year
            <br />
            of experience in delivering superior products Believe it because you
            <br />
            have seen it. Here are real numbers
          </p>
          <div className="flex mt-10 gap-6 mb-10">
            <div className="bg-transparent cursor-pointer rounded-full py-3 px-2 inline border text-[#00C397] border-[#00C397]">
              Get Started
            </div>
            <div className="flex py-3 gap-1">
              <CirclePlayIcon className="text-[#00C397] cursor-pointer" />
              <div className="text-white cursor-pointer">Watch Video</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

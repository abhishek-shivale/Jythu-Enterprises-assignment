import React from "react";
import svg from "@/assets/hero.svg";
function Hero() {
  return (
    <div className="w-full h-screen object-center bg-[url('@/assets/image.png')] ">
      <div>
        <div>
          <img src={svg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

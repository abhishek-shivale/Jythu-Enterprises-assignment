import about from "@/assets/aboutUs.png";
import { Button } from "../ui/button";

function Aboutus() {
  return (
    <div className="flex max-h-screen items-center justify-center flex-wrap max-w-full">
      <div className="mt-10 ml-6">
        <p className="text-[#00C397] font-light">ABOUT US</p>
        <br />
        <p className="font-bold text-6xl my-6">
          We Want To Give You
          <br />
          The Best Service
        </p>
        <p className="mt-5 text-gray-500 mb-5">
          We are 100+ professional software engineers with more than 10 year of
          <br />
          experience in delivering superior products Believe it because you have
          <br />
          seen it. Here are real numbers.
        </p>
        <div className="flex flex-shrink justify-around">
          <div>
            <p className="mb-4 md:md-5">
              <span className="font-extrabold text-[#00C397] text-8xl ">
                24
              </span>
            </p>
            <span className="text-gray-500 font-bold text-xl">Year</span>
            <br />
            <span className="text-gray-500 font-bold text-xl mb-10">
              Experience
            </span>
          </div>
          <ul className="font-semibold text-lg  ">
            <li className="my-2">Product Engineering</li>
            <li className="my-2">Digital Services</li>
            <li className="my-2">IT Consultancy</li>
            <li className="my-2">Digital Services</li>
          </ul>
        </div>
        <div className="mt-10 flex justify-center">
          <Button className="bg-transparent hover:bg-transparent text-[#00C397] border border-[#00C397] ">
            Get Started
          </Button>
        </div>
      </div>
      <div className="">
        <img src={about} className="max-h-screen" alt="" />
      </div>
    </div>
  );
}

export default Aboutus;

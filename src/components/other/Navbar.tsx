import { ShoppingBagIcon, SearchIcon, MenuIcon } from "lucide-react";
import image from "/image.png";
import { Button } from "../ui/button";
function Navbar() {
  return (
    <header className="flex justify-between h-15 items-center bg-[#BFF4BE] ">
      <aside>
        <img src={image} alt="" className="h-10 w-20 my-4 mx-4" />
      </aside>
      <aside className="hidden md:block">
        <ul className="flex text-bold gap-6 items-center ">
          <li>Home</li>
          <li>About Us</li>
          <li>Pages</li>
          <li>Service</li>
          <li>News & Event</li>
          <li>Contact Us</li>
        </ul>
      </aside>
      <aside>
        <ul className="flex gap-4 mr-4">
          <li>
            <ShoppingBagIcon />
          </li>
          <li>
            <SearchIcon />
          </li>
          <Button className="bg-[#38EF7D] hover:bg-[#38EF7D]">
            Get Quote {"->"}
          </Button>
          <div className="block md:hidden">
            <MenuIcon />
          </div>
        </ul>
      </aside>
    </header>
  );
}

export default Navbar;

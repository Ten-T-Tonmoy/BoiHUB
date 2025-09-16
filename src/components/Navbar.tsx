import React from "react";
import { Button } from "./ui/button";
import DrawerVault from "./Drawer";
import Image from "next/image";
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div
      className="flex w-full justify-between p-2 sticky top-0
    items-center border-b border-black/20 bg-secondary"
    >
      <div className="flex  items-center justify-center">
        <RiShoppingCart2Line
          className="text-4xl cursor-pointer
        mr-4 text-primary bg-primary/10 rounded-[4px] p-1"
        />
        <Image src={"/logo.png"} height={140} width={140} />
      </div>

      <div className="flex  items-center justify-center">
        <Button className="rounded-[3px] cursor-pointer">Sign In</Button>
        <DrawerVault />
      </div>
    </div>
  );
};

export default Navbar;

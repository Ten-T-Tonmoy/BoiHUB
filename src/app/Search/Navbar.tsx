import React from "react";
import { Button } from "../../components/ui/button";
import DrawerVault from "./Drawer";
import Image from "next/image";
import { RiShoppingCart2Line } from "react-icons/ri";
import SearchBar from "@/app/Search/SearchBar";
import SlidingMenus from "./SlidingMenus";

const Navbar = () => {
  return (
    <>
      <div
        className="flex w-full justify-between p-2 sticky top-0
      items-center border-b border-border bg-background z-10"
      >
        <div className="flex  items-center justify-center">
          <RiShoppingCart2Line
            className="text-4xl cursor-pointer
          mr-4 text-primary bg-primary-foreground rounded-[4px] p-1"
          />
          <Image alt="logo" src={"/logo.png"} height={140} width={140} />
        </div>

        <div className="flex  items-center justify-center">
          <Button className="rounded-[3px] cursor-pointer">Sign In</Button>
          <DrawerVault />
        </div>
      </div>
      <SearchBar />
      <SlidingMenus />
    </>
  );
};

export default Navbar;

import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../../components/ui/button";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

// -----------------icons ---------------
import { IoHomeOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoStorefrontOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { FiGift } from "react-icons/fi";
import { FcKindle } from "react-icons/fc";
import { LuMapPinHouse } from "react-icons/lu";
import { MdOutlineSmartToy } from "react-icons/md";
import { TbDeviceLandlinePhone } from "react-icons/tb";

// icon হোম
// icon বই
// icon ebook ই-বুক
// Become a seller Become A Seller
// icon ebook রকমারি কুইজPlay Quiz
// icon ইলেক্ট্রনিক্স
// icon কিডস জোন
//  ঘরে বসে আয় করুন
// icon আজকের অফার !
// icon প্রাতিষ্ঠানিক অর্ডার
// iconবেস্টসেলার অ্যাওয়ার্ড, ২৪
// icon অর্ডার ট্র্যাক
// Contact Us
// About Us

const DrawerVault = () => {
  const menuItems = [
    { title: "হোম", icon: IoHomeOutline },
    { title: "বই", icon: IoBookOutline },
    { title: "ই-বুক", icon: FcKindle },
    { title: "Become A Seller", icon: IoStorefrontOutline },
    { title: "রকমারি কুইজ", icon: IoGameControllerOutline },
    { title: "ইলেক্ট্রনিক্স", icon: AiOutlineThunderbolt },
    { title: "কিডস জোন", icon: MdOutlineSmartToy },
    { title: "ঘরে বসে আয় করুন", icon: HiOutlineLightBulb },
    { title: "আজকের অফার!", icon: FiGift },
    { title: "অর্ডার ট্র্যাক", icon: LuMapPinHouse },
    { title: "Contact Us", icon: TbDeviceLandlinePhone },
    { title: "About Us", icon: GoPeople },
  ];
  return (
    <div>
      <Drawer direction="left">
        <DrawerTrigger
          className="text-4xl cursor-pointer ml-4
         text-primary bg-primary-foreground rounded-[4px] p-1"
        >
          <RiMenu3Line className="text-3xl" />
        </DrawerTrigger>
        {/* ----------------------drawer element ---------------------- */}
        <DrawerContent>
          <DrawerHeader>
            <div className="flex w-full  items-center justify-between">
              <Image alt="logo" src={"/logo.png"} height={140} width={140} />
              <DrawerClose>
                <IoClose
                  className="text-4xl cursor-pointer
                      mr-4 text-primary bg-primary-foreground rounded-[4px] p-1"
                />
              </DrawerClose>
            </div>
          </DrawerHeader>

          {/* -------------------- each menu------------------ */}
          <div className="flex-1 overflow-y-scroll">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="w-full flex justify-start items-center gap-4
            hover:bg-primary-foreground hover:text-primary pl-8 p-4 transition-all ease-in-out
            duration-300 cursor-pointer text-lg border-y border-border"
              >
                <item.icon className="text-2xl" />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
          <DrawerFooter>
            <DrawerClose>
              <div
                className="rounded-[3px] w-full cursor-pointer bg-primary
              py-2 text-white font-semibold text-md hover:opacity-80"
              >
                Close
              </div>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerVault;

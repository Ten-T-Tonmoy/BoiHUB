import React from "react";

import { BsCashCoin } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";
import { RxReload } from "react-icons/rx";
import { TfiReload } from "react-icons/tfi";
import { IoBookSharp } from "react-icons/io5";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaComments,
} from "react-icons/fa";
import { MdBusinessCenter, MdEmail } from "react-icons/md";
import {
  FaFacebook,
  FaTwitter,
  FaTelegram,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
/**
 * 
 * 
 * 
 * 





হোম

বই
ইলেকট্রনিক্স
অ্যাক্সেসরিজ
গিফট ভাউচার
স্টেশনারি
পণ্যসমূহ

লেখকগণ
প্রকাশকগণ
তালিকা
রিভিউ
আমাদের সম্পর্কে জানুন

আমাদের সম্পর্কে
সাইট ম্যাপ



পলিসি

শর্তাবলী
গোপনীয়তা পলিসি
হ্যাপি রিটার্ন পলিসি
রিফান্ড পলিসি
*/

const Footer = () => {
  return (
    <>
      <TopStrip />
      <div className="w-full mt-10 bg-white grid grid-cols-1 md:grid-cols-4 md:px-[10vw]">
        {/* --------------------col main----------------- */}
        <div className="flex flex-col gap-4 p-4 md:col-span-2">
          <p className="font-black text-xl">Customare Care</p>
          {/* Live Chat */}
          <div className="flex items-center gap-3">
            <FaComments className="text-primary text-2xl flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">
                Contact us at Live Chat
              </p>
              <p className="text-sm text-muted-foreground">
                Send us an email:{" "}
                <span className="text-foreground">
                  notyetavailable@boihub.com
                </span>
              </p>
            </div>
          </div>

          {/* Become a Seller */}
          <div className="flex items-center gap-3">
            <MdBusinessCenter className="text-primary text-2xl flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">
                Corporate Sales – To be a seller!
              </p>
              <p className="text-sm text-muted-foreground">Email Us</p>
              <p className="text-sm text-foreground">notavailable@boihub.com</p>
            </div>
          </div>

          {/* Corporate Sales Only */}
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-primary text-2xl flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">
                Corporate Sales – Corporate Sales Only
              </p>
              <p className="text-sm text-foreground">
                Cell : <i>01XXXXXXXXXXXXXX</i> (Whatsapp Message)
              </p>
              <p className="text-sm text-foreground">
                E-mail : notavailable@boihub.com
              </p>
              <p className="text-xs text-muted-foreground">
                (E.g. Pharmaceuticals, Banks, Insurances & other Corporate
                Houses)
              </p>
            </div>
          </div>

          {/* Corporate Sales Retailer */}
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-primary text-2xl flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">
                Corporate Sales – Retailer Only
              </p>
              <p className="text-sm text-foreground">
                Cell : <i>01XXXXXXXXXXXXXX</i> (Whatsapp Message)
              </p>
              <p className="text-sm text-foreground">
                Email : notavailable@boihub.com
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-primary text-2xl flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Address</p>
              <p className="text-sm text-foreground">
                Some random street, Some random Thana, Dhaka-1000
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <MdEmail className="text-primary text-2xl flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Email Us</p>
              <p className="text-sm text-foreground">admin@rokomari.com</p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------col 2nd---------------------------- */}
        <div className="p-4">
          <p className="font-semibold">শপ বাই</p>
          <ul className="list-[circle] list-inside p-1 text-sm pl-4 text-muted-foreground">
            <li className="transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
              বইয়ের ক্যাটাগরি
            </li>
            <li className="transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
              ইলেকট্রনিক্স ক্যাটাগরি
            </li>
            <li className="transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
              বই মেলা ২০২৫
            </li>
            <li className="transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
              ইসলামিক বই
            </li>
            <li className="transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
              প্রি-অর্ডার
            </li>
            <li className="transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
              বিদেশি বই
            </li>
            <li className="transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
              বেস্ট সেলিং
            </li>
            <li className="transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
              অতিরিক্ত ছাড়
            </li>
            <li className="transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
              স্টেশনারি
            </li>
          </ul>

          <p className="font-semibold">সাপোর্ট</p>
          <ul className="list-[circle] list-inside p-1 text-sm pl-4 text-muted-foreground">
            <li className="transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
              অর্ডার ট্র্যাক করুন
            </li>
            <li className="transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
              যোগাযোগ করুন
            </li>
            <li className="transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
              আমার পণ্য খুঁজুন
            </li>
            <li className="transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
              সচরাচর জিজ্ঞাসা
            </li>
            <li className="transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
              হেল্প ডেস্ক
            </li>
            <li className="transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
              লেখক/প্রকাশক রিকোয়েস্ট
            </li>
            <li className="transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
              রিটেইলার রিকোয়েস্ট
            </li>
          </ul>
        </div>
        {/* ------------------------------------------col 3rd---------------------------- */}
        <div className="p-4">
          <p className="font-semibold">আমাদের সম্পর্কে জানুন</p>
          <ul className="  list-[circle] list-inside p-1 text-sm pl-20 text-muted-foreground">
            <li className="transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
              আমাদের সম্পর্কে
            </li>
            <li className="transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
              সাইট ম্যাপ
            </li>
          </ul>

          <p className="font-semibold ">পলিসি</p>
          <ul className="list-[circle] list-inside p-1 text-sm pl-20 text-muted-foreground">
            <li className="transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
              শর্তাবলী
            </li>
            <li className="transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
              গোপনীয়তা পলিসি
            </li>
            <li className="transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
              হ্যাপি রিটার্ন পলিসি
            </li>
            <li className="transition-all duration-200 ease-in-out hover:text-primary cursor-pointer">
              রিফান্ড পলিসি
            </li>
          </ul>

          {/* ----------------------Join us now------------------------- */}
          <h1 className="text-xl font-bold text-center py-2">Join us Now</h1>
          <div className="flex items-center space-x-4 text-3xl w-full justify-center">
            <FaFacebook className="text-blue-600 cursor-pointer hover:scale-110 transition" />
            <FaTwitter className="text-sky-400 cursor-pointer hover:scale-110 transition" />
            <FaTelegram className="text-blue-500 cursor-pointer hover:scale-110 transition" />
            <FaWhatsapp className="text-green-500 cursor-pointer hover:scale-110 transition" />
            <FaLinkedin className="text-blue-700 cursor-pointer hover:scale-110 transition" />
            <FaInstagram className="text-pink-500 cursor-pointer hover:scale-110 transition" />
            <FaYoutube className="text-red-600 cursor-pointer hover:scale-110 transition" />
          </div>
        </div>
      </div>

      <div
        className="text-gray-400/50 py-4  justify-center flex flex-col md:flex-row md:gap-1
            text-[.9rem] items-center bg-black"
      >
        Desgin inspired from রকমারি & programmed by
        <span className="text-primary font-bold ">FH Tonmoy </span>
        <p className="flex items-center gap-1">
          ©2025 <IoBookSharp className="text-white inline" /> BOIHUB
        </p>
      </div>
    </>
  );
};

export default Footer;

const TopStrip = () => {
  const items = [
    {
      icon: BsCashCoin,
      top: "Cash on delivery",
      bottom: "Pay cash at your doorstep",
    },
    {
      icon: FaTruckFast,
      top: "Delivery",
      bottom: "All over Bangladesh",
    },
    {
      icon: TfiReload,
      top: "Happy Return",
      bottom: "7 days return facility",
    },
  ];
  return (
    <div
      className="w-full flex py-4 flex-wrap
     items-center gap-2 md:gap-4 justify-center "
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center gap-2
        border border-border p-2 justify-center"
        >
          <item.icon className="text-3xl md:text-4xl" />
          <div>
            <p className="text-sm text-black/50">{item.top}</p>
            <p>{item.bottom}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

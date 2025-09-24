import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { FaUser } from "react-icons/fa";
import { IoKey } from "react-icons/io5";

const LoginPage = () => {
  return (
    <div className="py-10 bg-gray-200 md:px-[25vw]">
      <LoginCard />
    </div>
  );
};

export default LoginPage;

const LoginCard = () => {
  return (
    <div className="bg-background p-5 py-12 md:px-16 md:rounded-sm ">
      <form className="flex flex-col gap-4" action="">
        <h1 className="text-3xl font-bold text-center">Welcome! Hop ON</h1>
        <div className="flex  justify-center items-center">
          <FaUser className="bg-gray-100 text-primary h-9 w-9 px-2  border-b-2 border-primary/40" />
          {/* <p className="bg-gray-100 h-9 py-1 px-1  border-b-2 border-primary/40">
            Username:
          </p> */}
          <Input
            placeholder="Enter Your Username (@example124)"
            className=" px-4 border-0 border-b-2 border-primary/40 focus:ring-0 focus:outline-none
             focus-visible:ring-0 placeholder:text-black/30 focus-visible:outline-none focus-visible:border-b-2 focus-visible:rounded-none
          focus:rounded-[4px] focus:border-y-2 focus:bg-primary-foreground bg-gray-100 rounded-none"
            type="text"
          />
        </div>
        <div className="flex  justify-center items-center">
          <IoKey className="bg-gray-100 text-primary h-9 w-9 px-1 text-xl border-b-2  border-primary/40" />

          <Input
            placeholder="Enter Password ***********"
            className=" px-4 border-0 border-b-2 border-primary/40 focus:ring-0 focus:outline-none
             focus-visible:ring-0 placeholder:text-black/30 focus-visible:outline-none focus-visible:border-b-2 focus-visible:rounded-none
          focus:rounded-[4px] focus:border-y-2 focus:bg-primary-foreground bg-gray-100 rounded-none"
            type="password"
          />
        </div>
        <div className="flex  justify-center items-center">
          <IoKey className="bg-gray-100 text-primary h-9 w-9 px-1 text-xl border-b-2  border-primary/40" />

          <Input
            placeholder="Confirm Password ***********"
            className=" px-4 border-0 border-b-2 border-primary/40 focus:ring-0 focus:outline-none
             focus-visible:ring-0 placeholder:text-black/30 focus-visible:outline-none focus-visible:border-b-2 focus-visible:rounded-none
          focus:rounded-[4px] focus:border-y-2 focus:bg-primary-foreground bg-gray-100 rounded-none"
            type="password"
          />
        </div>

        {/* --------------buttons------------------------ */}
        <div className="flex justify-center items-center gap-4 w-full">
          <Button className="rounded-[3px] flex-1">Log In </Button>
          <Button variant="outline" className="rounded-[3px] flex-1">
            Forgot Password?{" "}
          </Button>
        </div>

        <p className="text-center">
          Don{"'"}t have an account ?{" "}
          <span className="text-primary font-bold cursor-pointer">
            Register yourself!
          </span>
        </p>
      </form>
    </div>
  );
};

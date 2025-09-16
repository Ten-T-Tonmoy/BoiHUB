"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import Link from "next/link";
import { useCounterStore } from "@/store/counter.app";

const HomePage = () => {
  const { count, decrease, increase, reset } = useCounterStore();
  const [val, setVal] = useState(0);
  return (
    <div>
      <p className="text-center w-full py-4">Let there be Next15</p>
      <div
        className=" flex flex-col justify-center items-center mx-auto w-[80vw]
      gap-4 p-10 rounded-lg bg-gray-100"
      >
        <h1
          className="text-pr 
        font-black text-3xl text-center"
        >
          {val}
        </h1>
        <Slider
          className=" w-[50vw]"
          step={1}
          max={100}
          defaultValue={[val]}
          onValueChange={(newVal) => setVal(newVal[0])}
        />
        <Button
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
          className="bg-destructive my-4"
        >
          Try it out!
        </Button>
      </div>

      {/* ---------------grid test---------------------- */}
      <div className="flex w-[80vw] mx-auto py-5 gap-4  justify-center-items-center">
        <div
          className="bg-gray-100 flex gap-2
        flex-col items-center justify-center rounded-lg h-40 w-full"
        >
          <Link href={"/home"}>
            <Button>Home</Button>
          </Link>
          <Link href={"/shop"}>
            <Button variant={"outline"}>Shop</Button>
          </Link>
        </div>
        {/* ----container 2--------- */}
        <div
          className="bg-gray-100 flex gap-2
        flex-col items-center justify-center rounded-lg h-40 w-full"
        >
          <Link href={"/login"}>
            <Button variant={"destructive"}>Login</Button>
          </Link>
          <Link href={"/signup"}>
            <Button className="bg-violet-400 hover:bg-violet-400/85">
              Signup
            </Button>
          </Link>
        </div>
      </div>

      {/* ------------------zustand check------------------------ */}
      <div
        className=" flex flex-col justify-center items-center mx-auto w-[80vw]
      gap-4 p-10 rounded-lg bg-gray-100"
      >
        <h1
          className="text-pr 
        font-black text-3xl text-center"
        >
          {count}
        </h1>
        <div
          className="bg-primary flex gap-2
         items-center justify-center rounded-lg h-20 w-full"
        >
          <Button
            onClick={decrease}
            variant={"secondary"}
            className="text-destructive font-black"
          >
            {"<<"} LOW
          </Button>
          <Button
            onClick={reset}
            variant={"secondary"}
            className="text-yellow-500 font-black"
          >
            Reset
          </Button>
          <Button
            onClick={increase}
            variant={"secondary"}
            className="text-green-500 font-black"
          >
            UP {">>"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";


const HomePage = () => {
  const [val, setVal] = useState(0);
  return (
    <div>
      <p className="text-center w-full py-4">Opening Page</p>
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
      <Button variant="outline">Show Toast</Button>
    </div>
  );
};

export default HomePage;

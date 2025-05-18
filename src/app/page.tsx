"use client";
import React, { useState } from "react";
import Image from "next/image";

const Home = () => {
  const [resolution, setResolution] = React.useState<string| number>("empty");

  const getResolution = (value: any) => {
    setResolution(value);
  };

  const images =
    (resolution == "empty" && "questionMark.png") ||
    (resolution == 140 && "heart1.png") ||
    (resolution == 280 && "heart2.png") ||
    (resolution == 360 && "heart3.png") ||
    (resolution == 720 && "heart4.png") ||
    (resolution == 1080 && "person.png");


  return (
    <div className="text-gray-600 w-screen h-screen flex flex-col">
      <h1 className="text-white text-xl font-semibold h-auto text-center py-8">
        I Love You 3000
      </h1>
      <div className=" grid  justify-items-center py-10 flex-1">
        <div className="flex flex-col justify-center w-2/3">
          <div className="basis-1/2 grid place-items-center">
            {resolution ? (
              <Image
                src={require(`../../public/images/${images}`)}
                alt="Photo"
                className="max-w-[8rem] max-h-[20rem] object-cover object-center"
              />
            ) : (
              <h1></h1>
            )}
          </div>
          <form className="basis-1/2 grid justify-items-center" action="">
            <div className="flex flex-col items-center justify-start gap-4">
              <label
                htmlFor="hearts"
                className="text-white text-lg font-normal"
              >
                Select resolutin you wanna see:{" "}
              </label>
              <select
                name="hearts"
                id="hearts"
                className="focus:outline-none w-[15rem] h-8 rounded cursor-pointer"
                onChange={(e) => getResolution(e.target.value)}
              >
                <option className="py-2" defaultChecked disabled value="">
                  Select resolution
                </option>
                <option className="py-2" value="140">
                  140p
                </option>
                <option className="py-2" value="280">
                  280p
                </option>
                <option className="py-2" value="360">
                  360p
                </option>
                <option className="py-2" value="720">
                  720p
                </option>
                <option className="py-2" value="1080">
                  1080p
                </option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

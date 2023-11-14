"use client";
import React, { useState } from "react";
import Image from "next/image";

const page = () => {
  const [resolution, setResolution] = useState(0);
  const getResolution = (value) => {
    setResolution(value);
  };
  const image = {
    140: "heart1.png",
    280: "heart2.png",
    360: "heart3.png",
    720: "heart4.png",
    1080: "lusi.png",
  };

  return (
    <div className="text-gray-600 w-screen h-screen grid  justify-items-center py-10">
      <div className="flex flex-col justify-center w-2/3">
        <div className="basis-3/5 grid place-items-center">
          {resolution ? (
            <Image
              src={require(`../../public/images/${image[resolution]}`)}
              alt="Photo"
              className="w-auto max-h-[20rem]"
            />
          ) : (
            <h1></h1>
          )}
        </div>
        <form className="basis-2/5 grid j justify-items-center" action="">
          <select
            name="hearts"
            id="hearts"
            className="focus:outline-none w-[10rem] h-8"
            onChange={(e) => getResolution(e.target.value)}
          >
            <option className="py-2" value=""></option>
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
        </form>
      </div>
    </div>
  );
};

export default page;

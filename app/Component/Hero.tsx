import Image from "next/image";
import React from "react";
import Button from "./Button";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 ">
        <Image
          src="/camp.svg"
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          width={50}
          alt="camp"
        />
        <h1 className="bold-52 lg:bold-88">Putul Park Camp area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          itaque quo facilis nesciunt reprehenderit ipsa sit cumque vero libero
          iure eveniet accusantium excepturi, doloribus nulla voluptatibus
          necessitatibus alias cupiditate sint!
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, id) => (
                <Image src="/star.svg" key={id} height={24} width={24} alt="" />
              ))}
            <p className="bold-16 lg:bold-20 texy-blue-70">
              123k
              <span className="regular-16 lg:regular-20 ml-1 underline">
                Reviews
              </span>
            </p>
          </div>
          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button type="button" value="Download Now" variant="btn_green" />
            <Button
              type="button"
              icon="/play.svg"
              value="How we work"
              variant="btn_white_text"
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-1 items-start ">
        <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90  px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image alt="image" height={24} width={24} src="/close.svg" />
            </div>
            <p className="bold-20 text-white">Agua clientes</p>
          </div>
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">123.45 m</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

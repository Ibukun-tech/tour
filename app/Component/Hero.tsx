import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
      <div className="hero-map " />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

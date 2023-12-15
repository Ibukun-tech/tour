import Image from "next/image";
import React from "react";

type Props = {};

const Guide = (props: Props) => {
  return (
    <section className="flexCenter flex-col ">
      <div className=" padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="regular-18 -mt-1 mb-3 text-green-50">
          WE ARE HERE FOR YOU
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide you to easy path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            labore, tempore amet nisi repudiandae mollitia unde aspernatur et
            minus ea? Nemo sed quos fuga ducimus, tempora cumque aut sequi
            adipisci.
          </p>
        </div>
      </div>
      <div className="flexCenter relative w-full max-container padding-container ">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center lg:rounded-5xl"
        />
        <div className="absolute flex bg-white py-8 pr-7 pl-5 gap-3 rounded-3xl border shadow-md md:left-[10%] lg:top-20">
          <Image
            src="/meter.svg"
            height={158}
            width={16}
            className="h-full w-auto"
            alt="meter"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full  flex-col mb-5">
              <div className="flexBetween  w-full">
                <p className="regular-16 mr-5 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 ">Abeokuta</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Destination</p>
              <h4 className="bold-20  whitespace-nowrap">Sagamu</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;

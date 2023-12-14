import Image from "next/image";
import React from "react";
import { PEOPLE_URL } from "../constants";
import { url } from "inspector";

type Props = {};
type campProps = {
  backgroundImage: string;
  title: string;
  subTitle: string;
  peopleJoined: String;
};
const DevCamp = ({
  backgroundImage,
  title,
  subTitle,
  peopleJoined,
}: campProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6  lg:px-20 lg:py-10 ">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subTitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden ">
            {PEOPLE_URL.map((index, id) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={index}
                key={id}
                alt="persons"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};
const Camp = (props: Props) => {
  return (
    <section className="  max-size-container  relative flex flex-col py-10 lg:py-20 lg:mb-10 xl:mb-20 ">
      <div className="hide-scrollbar flex h-[340px] w-full items-start overflow-x-auto justify-start gap-8  lg:h-[400px] xl:h-[640px]">
        <DevCamp
          backgroundImage="bg-bg-img-1"
          title="Olumo Rock Camp"
          subTitle="Ogun State Abeokuta"
          peopleJoined="50+ joined"
        />
        <DevCamp
          backgroundImage="bg-bg-img-1"
          title="Zuma rock"
          subTitle="Abuja"
          peopleJoined="75+ joined"
        />
      </div>
    </section>
  );
};

export default Camp;

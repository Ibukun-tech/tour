import Image from "next/image";
import React from "react";
import { FEATURES } from "../constants";

type Props = {};

const Features = (props: Props) => {
  return (
    <section className=" flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              width={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
              height={50}
              alt="camp"
            />
            <h2 className="bold-40 lg:bold-64">Our Feature</h2>
          </div>
          {FEATURES.map((feature, id) => (
            <FeatureItem
              title={feature.title}
              key={id}
              icon={feature.icon}
              variant={feature.variant}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
type featureProps = {
  title: string;
  icon: string;
  variant: string;
  description: string;
};
const FeatureItem = ({ title, icon, variant, description }: featureProps) => {
  return (
    <div className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} width={28} height={28} alt="icon" />
      </div>
    </div>
  );
};
export default Features;

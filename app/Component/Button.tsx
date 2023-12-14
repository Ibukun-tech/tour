import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  type: "button" | "submit";
  value: string;
  icon?: string;
  variant: "btn_dark_green" | "btn_white_text" | "btn_green";
};

const Button = ({ type, value, icon, variant }: Props) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} `}
    >
      {icon && <Image src={icon} width={24} height={24} alt="icon" />}
      <label className="bold-16 whitespace-nowrap">{value}</label>
    </button>
  );
};

export default Button;

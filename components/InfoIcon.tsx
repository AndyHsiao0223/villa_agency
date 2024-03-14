import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  blackText: string;
  grayText: string;
  hrHidden?: boolean;
}

const InfoIcon: React.FC<Props> = (props: Props) => {
  return (
    <div className="mx-7">
      <div className="flex">
        <Image
          src={props.src}
          alt={props.alt}
          width={52}
          height={52}
          className="object-contain"
        />
        <div className="ml-5">
          <p className="text-2xl font-bold">{props.blackText}</p>
          <p className="text-gray-400">{props.grayText}</p>
        </div>
      </div>
      <hr className={`my-5 ${props.hrHidden && "hidden"}`} />
    </div>
  );
};

export default InfoIcon;

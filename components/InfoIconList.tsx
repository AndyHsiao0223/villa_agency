import React from "react";
import InfoIcon from "./InfoIcon";
import { infoIconData } from "@/public/contents";

const InfoIconList = () => {
  return (
    <section className="mb-28 flex h-[60vh] w-full flex-col justify-around rounded-xl pt-4 shadow-around lg:w-[30vw]">
      {infoIconData.map((data, key) => (
        <InfoIcon
          key={key}
          src={data.src}
          alt={data.alt}
          blackText={data.blackText}
          grayText={data.grayText}
        />
      ))}
    </section>
  );
};

export default InfoIconList;

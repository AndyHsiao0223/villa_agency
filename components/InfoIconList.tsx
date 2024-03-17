import React from "react";
import InfoIcon from "./InfoIcon";

const InfoIconList = () => {
  return (
    <section className="mb-28 flex h-[60vh] w-full flex-col justify-around rounded-xl pt-4 shadow-around lg:w-[30vw]">
      <InfoIcon
        src="/images/info-icon-01.png"
        alt="info-icon-01"
        blackText="250 m2"
        grayText="Total Flat Space"
      />
      <InfoIcon
        src="/images/info-icon-02.png"
        alt="info-icon-02"
        blackText="Contract"
        grayText="Contract Ready"
      />
      <InfoIcon
        src="/images/info-icon-03.png"
        alt="info-icon-03"
        blackText="Payment"
        grayText="Payment Process"
      />
      <InfoIcon
        src="/images/info-icon-04.png"
        alt="info-icon-04"
        blackText="Safety"
        grayText="24/7 Under Control"
      />
    </section>
  );
};

export default InfoIconList;

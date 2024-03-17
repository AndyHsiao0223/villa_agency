import React from "react";
import Image from "next/image";
import ScheduleVisit from "./ScheduleVisit";
import { bestDealTitle } from "@/public/contents";

interface Props {
  details: string[];
  ImgSrc: string;
  alt: string;
  articles: { block1: string; block2: string };
}

const BestDealDetails: React.FC<Props> = (props: Props) => {
  return (
    <section className="lg:flex lg:gap-10 lg:px-0">
      <section className="mb-12 flex h-[45vh] w-full flex-col justify-around rounded-xl pt-4 shadow-around lg:w-[30vw]">
        <div className="mx-7">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-gray-400">Total Flat Space</p>
            <p className="text-xl font-bold">{props.details[0]}</p>
          </div>
          <hr />
        </div>
        <div className="mx-7">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-gray-400">Floor number</p>
            <p className="text-xl font-bold">{props.details[1]}</p>
          </div>
          <hr />
        </div>
        <div className="mx-7">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-gray-400">Number of rooms</p>
            <p className="text-xl font-bold">{props.details[2]}</p>
          </div>
          <hr />
        </div>
        <div className="mx-7">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-gray-400">Parking Available</p>
            <p className="text-xl font-bold">{props.details[3]}</p>
          </div>
          <hr />
        </div>
        <div className="mx-7">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-gray-400">Payment Process</p>
            <p className="text-xl font-bold">{props.details[4]}</p>
          </div>
          <hr />
        </div>
      </section>

      <section className="mb-12 lg:w-[30vw]">
        <Image src={props.ImgSrc} alt={props.alt} width={520} height={395} />
      </section>

      <section className="lg:w-[30vw]">
        <h2 className="mb-7 font-bold">Extra Info About Property</h2>
        <p className="mb-7 text-gray-600">
          {props.articles.block1}
          <br />
          <br />
          {props.articles.block2}
        </p>
        <ScheduleVisit />
      </section>
    </section>
  );
};

export default BestDealDetails;

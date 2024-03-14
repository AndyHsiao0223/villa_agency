import React from "react";
import { CarouselItem } from "./ui/carousel";
import Image from "next/image";

interface Props {
  blackTag?: string;
  orangeTag?: string;
  src: string;
  alt: string;
  title: { line1: string; line2: string; line3: string };
}

const HomeCarouselItem: React.FC<Props> = (props: Props) => {
  return (
    <CarouselItem className="relative h-[89.8vh] w-full">
      <Image
        src={props.src}
        alt={props.alt}
        fill
        loading="eager"
        className="object-cover"
      />
      <div className="lg:px-40">
        <p className="relative left-10 top-64 h-fit w-fit bg-white px-4 py-1.5 md:left-40 md:top-56">
          {props.blackTag}
          <span className="text-orange-600">{props.orangeTag}</span>
        </p>
        <p className="relative left-10 top-72 text-5xl font-bold leading-normal text-white md:left-40 md:top-64 md:text-6xl md:leading-relaxed">
          {props.title.line1}
          <br />
          {props.title.line2}
          <br />
          {props.title.line3}
        </p>
      </div>
    </CarouselItem>
  );
};

export default HomeCarouselItem;

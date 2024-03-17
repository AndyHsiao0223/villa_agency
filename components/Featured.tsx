import Image from "next/image";
import React from "react";
import DropdownItem from "./DropdownItem";
import InfoIconList from "./InfoIconList";

const Featured: React.FC = () => {
  return (
    <div className="mt-32 px-7 lg:flex lg:justify-center lg:gap-2">
      <section className="lg:w-[23vw]">
        <Image
          src="/images/featured.webp"
          alt="featured"
          width={600}
          height={800}
          className="relative left-20 w-[75vw] lg:left-0 lg:w-[20vw]"
        />
        <div className="relative bottom-12 left-6 h-28 w-28 rounded-full bg-orange-600 p-4 lg:-left-12">
          <Image
            src="/images/featured-icon.webp"
            alt="featured-icon"
            width={70}
            height={70}
            className="relative left-3 top-1"
          />
        </div>
      </section>

      <section className="mb-16 lg:w-[30vw]">
        <p className="flex items-center font-bold text-red-400">
          <span className="mr-1 text-xl lg:text-2xl">l</span>FEATURED
        </p>
        <h1 className="mt-5 text-4xl font-bold">
          Best Appartment
          <br />& Sea View
        </h1>
        <DropdownItem />
      </section>
      <InfoIconList />
    </div>
  );
};

export default Featured;

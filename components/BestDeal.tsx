"use client";

import React, { ReactNode, useEffect, useState } from "react";
import {
  bestDealAppartment,
  bestDealPenthouse,
  bestDealVilla,
} from "@/public/contents";
import BestDealDetails from "./BestDealDetails";

const BestDeal: React.FC = () => {
  const [category, setCategory] = useState("Appartment");

  const handleClick: Function = (prop: string) => {
    setCategory(prop);
  };

  const switchCategory: Function = (category: string) => {
    switch (category) {
      case "Appartment":
        return bestDealAppartment.map((data, key) => (
          <BestDealDetails key={key} {...data} />
        ));
      case "Villa":
        return bestDealVilla.map((data, key) => (
          <BestDealDetails key={key} {...data} />
        ));

      case "Penthouse":
        return bestDealPenthouse.map((data, key) => (
          <BestDealDetails key={key} {...data} />
        ));

      default:
        return bestDealAppartment.map((data, key) => (
          <BestDealDetails key={key} {...data} />
        ));
    }
  };

  return (
    <div className="bg-gray-50 px-7 py-20 lg:px-32">
      <section className="justify-between pb-20 xl:flex">
        <div>
          <p className="mb-3 flex items-center justify-center font-bold text-red-400">
            <span className="mr-1 text-xl">l </span>BEST DEAL
          </p>
          <div className="mb-16 flex flex-col items-center">
            <h1 className="text-4xl font-extrabold lg:text-5xl">
              Find Your Best Deal
            </h1>
            <h1 className="text-4xl font-extrabold lg:text-5xl">Rignt Now!</h1>
          </div>
        </div>
        <div className="flex items-end justify-center space-x-3">
          <button
            onClick={() => handleClick("Appartment")}
            className="h-10 w-28 rounded bg-black text-white hover:bg-orange-500 lg:h-12 lg:w-36"
          >
            Appartment
          </button>
          <button
            onClick={() => handleClick("Villa")}
            className="h-10 w-28 rounded bg-black text-white hover:bg-orange-500 lg:h-12 lg:w-36"
          >
            Villa House
          </button>
          <button
            onClick={() => handleClick("Penthouse")}
            className="h-10 w-28 rounded bg-black text-white hover:bg-orange-500 lg:h-12 lg:w-36"
          >
            Penthouse
          </button>
        </div>
      </section>

      {switchCategory(category)}
      {/* <section className="lg:flex lg:gap-10 lg:px-0">
        <section className="shadow-around mb-12 flex h-[45vh] w-full flex-col justify-around rounded-xl pt-4 lg:w-[30vw]">
          <div className="mx-7">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-gray-400">Total Flat Space</p>
              <p className="text-xl font-bold">185 m2</p>
            </div>
            <hr />
          </div>
          <div className="mx-7">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-gray-400">Floor number</p>
              <p className="text-xl font-bold">26th</p>
            </div>
            <hr />
          </div>
          <div className="mx-7">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-gray-400">Number of rooms</p>
              <p className="text-xl font-bold">4</p>
            </div>
            <hr />
          </div>
          <div className="mx-7">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-gray-400">Parking Available</p>
              <p className="text-xl font-bold">Yes</p>
            </div>
            <hr />
          </div>
          <div className="mx-7">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-gray-400">Payment Process</p>
              <p className="text-xl font-bold">Bank</p>
            </div>
            <hr />
          </div>
        </section>

        <section className="mb-12 lg:w-[30vw]">
          <Image
            src="/images/deal-01.jpg"
            alt="deal-01"
            width={520}
            height={395}
          />
        </section>

        <section className="lg:w-[30vw]">
          <h2 className="mb-7 font-bold">Extra Info About Property</h2>
          <p className="mb-7 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod
            tempor pack incididunt ut labore et dolore magna aliqua quised ipsum
            suspendisse.
            <br />
            <br />
            When you need free CSS templates, you can simply type TemplateMo in
            any search engine website. In addition, you can type TemplateMo
            Portfolio, TemplateMo One Page Layouts, etc.
          </p>
          <ScheduleVisit />
        </section>
      </section> */}
    </div>
  );
};

export default BestDeal;

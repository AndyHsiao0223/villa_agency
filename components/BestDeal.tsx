"use client";

import React, { useState } from "react";
import {
  bestDealAppartment,
  bestDealButton,
  bestDealPenthouse,
  bestDealVilla,
} from "@/public/contents";
import BestDealDetails from "./BestDealDetails";

const BestDeal: React.FC = () => {
  const [category, setCategory] = useState("Appartment");

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
          {bestDealButton.map((data, key) => (
            <button
              key={key}
              onClick={() => setCategory(data.handleClick)}
              className="h-10 w-28 rounded bg-black text-white hover:bg-orange-500 lg:h-12 lg:w-36"
            >
              {data.content}
            </button>
          ))}
        </div>
      </section>

      {switchCategory(category)}
    </div>
  );
};

export default BestDeal;

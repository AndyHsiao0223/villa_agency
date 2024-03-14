"use client";

import { Accordion, AccordionContent } from "@radix-ui/react-accordion";
import Image from "next/image";
import React from "react";
import { AccordionItem, AccordionTrigger } from "./ui/accordion";
import InfoIcon from "./InfoIcon";

const Featured: React.FC = () => {
  return (
    <div className="mt-32 px-7 lg:flex lg:justify-center">
      <section className="lg:w-[26vw]">
        <Image
          src="/images/featured.jpg"
          alt="featured"
          width={600}
          height={800}
          className="relative left-20 w-[75vw] lg:left-0 lg:w-[20vw]"
        />
        <div className="relative bottom-12 left-6 h-28 w-28 rounded-full bg-orange-600 p-4 lg:-left-12">
          <Image
            src="/images/featured-icon.png"
            alt="featured-icon"
            width={70}
            height={70}
            className="relative left-3 top-1"
          />
        </div>
      </section>

      <section className="mb-16 lg:w-[26vw]">
        <p className="flex items-center font-bold text-red-400">
          <span className="mr-1 text-xl lg:text-2xl">l</span>FEATURED
        </p>
        <h1 className="mt-5 text-4xl font-bold">
          Best Appartment
          <br />& Sea View
        </h1>

        {/* DRY */}
        <Accordion
          type="single"
          collapsible
          className="mb-6 mt-12 w-[90%] rounded-lg bg-slate-100 px-3 pb-3"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-orange-600">
              Best useful links ?
            </AccordionTrigger>
            <AccordionContent className="mb-3">
              Get the best villa website template in HTML CSS and Bootstrap for
              your business. TemplateMo provides you the best free CSS templates
              in the world. Please tell your friends about it.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-orange-600">
              How does this work ?
            </AccordionTrigger>
            <AccordionContent className="mb-3">
              Dolor almesit amet, consectetur adipiscing elit, sed doesn&apos;t
              eiusmod tempor incididunt ut labore consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-orange-600">
              Why is Villa Agency the best ?
            </AccordionTrigger>
            <AccordionContent className="mb-3">
              Dolor almesit amet, consectetur adipiscing elit, sed doesn&apos;t
              eiusmod tempor incididunt ut labore consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="shadow-around mb-28 flex h-[60vh] w-full flex-col justify-around rounded-xl pt-4 lg:w-[26vw]">
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
    </div>
  );
};

export default Featured;

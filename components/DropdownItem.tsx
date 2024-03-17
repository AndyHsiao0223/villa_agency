import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const DropdownItem = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="mb-6 mt-12 h-fit w-[90%] rounded-lg bg-slate-100 px-3 pb-3"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-orange-600">
          Best useful links ?
        </AccordionTrigger>
        <AccordionContent className="mb-3">
          Get the best villa website template in HTML CSS and Bootstrap for your
          business. TemplateMo provides you the best free CSS templates in the
          world. Please tell your friends about it.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-orange-600">
          How does this work ?
        </AccordionTrigger>
        <AccordionContent className="mb-3">
          Dolor almesit amet, consectetur adipiscing elit, sed doesn&apos;t
          eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-orange-600">
          Why is Villa Agency the best ?
        </AccordionTrigger>
        <AccordionContent className="mb-3">
          Dolor almesit amet, consectetur adipiscing elit, sed doesn&apos;t
          eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default DropdownItem;

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { accordionItemData } from "@/public/contents";

const DropdownItem: React.FC = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="mb-6 mt-12 h-fit w-[90%] rounded-lg bg-slate-100 px-3 pb-3"
    >
      {accordionItemData.map((data) => (
        <AccordionItem key={data.value} value={data.value}>
          <AccordionTrigger className="text-orange-600">
            {data.trigger}
          </AccordionTrigger>
          <AccordionContent className="mb-3">{data.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default DropdownItem;

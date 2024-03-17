import Banner from "@/components/Banner";
import React from "react";
import Image from "next/image";
import DropdownItem from "@/components/DropdownItem";
import InfoIconList from "@/components/InfoIconList";
import BestDeal from "@/components/BestDeal";

const property_details_page = () => {
  return (
    <div>
      <Banner label="HOME / SINGLE PROPERTY" title={["SINGLE", "PROPERTY"]} />
      <div className="relative mx-5 mb-10 h-[40vh] xl:h-[60vh]">
        <Image
          src="/images/single-property.webp"
          alt="single property"
          fill
          className="object-cover"
        />
      </div>
      <div className="mx-5 lg:flex lg:items-center lg:gap-10 xl:mx-32">
        <section>
          <div>
            <p className="mb-6 h-fit w-fit rounded bg-red-100 p-1">Apparment</p>
            <h2 className="mb-10 text-2xl font-bold">
              24 New Street Miami, or 24560
            </h2>
            <hr className="mb-10" />
            <p className="leading-relaxed text-gray-700">
              Get the best villa agency HTML CSS Bootstrap Template for your
              company website. TemplateMo provides you the best free CSS
              templates in the world. Please tell your friends about it. Thank
              you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr
              succulents single-origin coffee schlitz enamel pin you probably
              haven&apos;t heard of them ugh hella.
            </p>
            <br />
            <p className="leading-relaxed text-gray-700">
              When you look for free CSS templates, you can simply type
              TemplateMo in any search engine website. In addition, you can type
              TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc.
              Master cleanse +1 intelligentsia swag post-ironic, slow-carb
              chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie
              pop-up.
            </p>
          </div>
          <div>
            <DropdownItem />
          </div>
        </section>
        <section className="h-fit">
          <InfoIconList />
        </section>
      </div>
      <BestDeal />
    </div>
  );
};

export default property_details_page;

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import HomeCarouselItem from "./HomeCarouselItem";
import { carouselItemData } from "../public/contents";

const HomeCarousel: React.FC = () => {
  return (
    <Carousel className="h-[89.8vh] w-full">
      <CarouselContent>
        {carouselItemData.map((data, key) => (
          <HomeCarouselItem key={key} {...data} />
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HomeCarousel;

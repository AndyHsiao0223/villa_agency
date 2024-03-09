import React from "react";

const ViedoView: React.FC = () => {
  return (
    <div>
      <section className="mb-10 h-[60vh] bg-[url('/images/video-bg.jpg')] bg-cover px-3 pt-14">
        <p className="mb-3 flex items-center justify-center font-bold text-red-400">
          <span className="mr-1 text-xl">l </span>VIDEO VIEW
        </p>
        <h1 className="mb-20 flex items-center justify-center text-4xl font-bold leading-normal text-white">
          Get Closer View & <br className="lg:hidden" />
          Different Feeling
        </h1>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/K4DyBUG242c?si=fi6dgZAE5MvrUB9w"
            title="YouTube NCS video"
            loading="lazy"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="h-[25vh] w-[90vw] rounded-xl lg:h-[45vh] lg:w-[80vw]"
          ></iframe>
        </div>
      </section>
      <section>
        <div className="mx-10 flex">
          <p className="mr-6 flex items-center">34</p>
          <p>
            Buildings
            <br />
            Finished Now
          </p>
        </div>
      </section>
    </div>
  );
};

export default ViedoView;

import React from "react";

const ViedoView: React.FC = () => {
  return (
    <div className="mb-20">
      <section className="mb-10 h-[60vh] bg-[url('/images/video-bg.jpg')] bg-cover px-3 pt-14 lg:mb-48">
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
            className="h-[25vh] w-[90vw] rounded-xl lg:h-[50vh] lg:w-[50vw]"
          ></iframe>
        </div>
      </section>
      <section className="flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-12 xl:space-x-52">
        <div>
          <div className="relative left-56 top-6 h-12 w-12 rounded-full bg-orange-600" />
          <div className="flex h-24 w-64 rounded-2xl bg-[#ffeee9] p-5">
            <p className="mr-6 flex items-center text-4xl font-extrabold text-orange-600">
              34
            </p>
            <p className="flex items-center font-bold">
              Buildings
              <br />
              Finished Now
            </p>
          </div>
        </div>
        <div>
          <div className="relative left-56 top-6 h-12 w-12 rounded-full bg-orange-600" />
          <div className="flex h-24 w-64 rounded-2xl bg-[#ffeee9] p-5">
            <p className="mr-6 flex items-center text-4xl font-extrabold text-orange-600">
              12
            </p>
            <p className="flex items-center font-bold">
              Years
              <br />
              Experience
            </p>
          </div>
        </div>
        <div>
          <div className="relative left-56 top-6 h-12 w-12 rounded-full bg-orange-600" />
          <div className="flex h-24 w-64 rounded-2xl bg-[#ffeee9] p-5">
            <p className="mr-6 flex items-center text-4xl font-extrabold text-orange-600">
              24
            </p>
            <p className="flex items-center font-bold">
              Awwards
              <br />
              Won 2023
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViedoView;

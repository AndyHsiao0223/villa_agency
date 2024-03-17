import React from "react";

interface Props {
  label: string;
  title: string[];
}

const Banner: React.FC<Props> = (props: Props) => {
  return (
    <div className="mb-32 flex h-[45vh] flex-col items-center justify-center bg-[url(/images/page-heading-bg.jpg)]">
      <div className="mb-10 w-fit bg-white px-4 py-3">
        <p className="text-sm">{props.label}</p>
      </div>
      {props.title.map((title, key) => (
        <h2 key={key} className="text-5xl font-extrabold text-white">
          {title}
        </h2>
      ))}
    </div>
  );
};

export default Banner;

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  hidden?: boolean;
}

const ScheduleVisit: React.FC<Props> = (props: Props) => {
  return (
    <Link href="/">
      <div
        className={`${props.hidden ? "hidden" : "flex"} group h-fit w-fit min-w-48 rounded-full bg-black lg:flex`}
      >
        <div className="relative right-[1px] rounded-full bg-orange-600 p-3">
          <Image
            src="/images/calendar.png"
            alt="calendar"
            width={18}
            height={18}
          />
        </div>
        <p className="flex items-center px-3 text-white duration-500 group-hover:text-orange-600">
          Schedule a visit
        </p>
      </div>
    </Link>
  );
};

export default ScheduleVisit;

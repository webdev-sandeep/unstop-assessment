import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDateRange, MdLink } from "react-icons/md";

const AssessmentCard = ({ logo, title, subtitle, date, candidates }) => {
  let people = [
    { initials: "AS", color: "bg-red-500" },
    { initials: "SK", color: "bg-green-500" },
    { initials: "NR", color: "bg-yellow-500" },
  ];
  return (
    <div className="p-5 bg-white rounded border border-slate-200">
      <div className="flex justify-between items-start text-blue-900">
        <div className="inline-block p-3 rounded-xl bg-blue-100">{logo}</div>
        <div>
          <BsThreeDotsVertical />
        </div>
      </div>
      <div>
        <div className="capitalize pt-2 text-lg text-blue-900 font-semibold">
          {title}
        </div>
        <div className="flex items-center border-b-[3px] border-dotted border-slate-200 pb-4">
          <h3 className="capitalize text-xs text-blue-900 font-semibold pr-2 border-r-2 border-slate-200 inline-block">
            {subtitle}
          </h3>
          <div className="px-2 block">
            <div className="flex items-center">
              <span className="text-blue-900">
                <MdDateRange />
              </span>
              <span className="text-xs text-blue-200 font-semibold px-1">
                {date}
              </span>
            </div>
          </div>
        </div>
        <div className="pt-2 flex justify-between items-center">
          <div className="flex">
            <div className="flex flex-col items-start text-xs text-blue-900 font-semibold mr-4">
              <span>00</span>
              <span>Duration</span>
            </div>
            <div className="flex flex-col items-start text-xs text-blue-900 font-semibold mr-4">
              <span>00</span>
              <span>Questions</span>
            </div>
          </div>
          <div className="flex">
            <div className="text-blue-900 flex rounded-full py-1 px-2 border border-blue-900">
              <span className="mr-2">
                <MdLink />
              </span>
              <span className="text-xs">Share</span>
            </div>
            <div className="relative w-7 ms-2">
              {candidates.map((item, index) => (
                <span
                  className={`absolute ${
                    item.color
                  } w-6 h-6 grid place-items-center font-semibold text-xs rounded-full border border-white text-white translate-x-${
                    index * 2
                  }`}
                  key={index}
                >
                  {item.initials}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentCard;

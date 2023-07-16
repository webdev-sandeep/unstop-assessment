import React from "react";
import Heading from "../components/Heading";
import {
  MdOutlineViewAgenda,
  MdOutlineGroup,
  MdOutlineLanguage,
  MdOutlineLink,
  MdAdd,
} from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";
import AssessmentCard from "../components/Assessment/AssessmentCard";

const Assessment = ({ openModal, openSidebar }) => {
  const subCategories = [
    {
      title: "My Assessments",
      isActive: true,
    },
    {
      title: "Unstop Assessments",
      isActive: false,
    },
  ];

  const assessmentCardDetails = [
    {
      logo: <MdOutlineGroup />,
      title: "Math Assessment",
      subtitle: "Job",
      date: "20 Apr 2023",
      candidates: [{ initials: "SK", color: "bg-red-500" }],
    },
    {
      logo: <MdOutlineGroup />,
      title: "Math Assessment",
      subtitle: "Job",
      date: "20 Apr 2023",
      candidates: [
        { initials: "SK", color: "bg-red-500" },
        { initials: "AS", color: "bg-yellow-500" },
        { initials: "NR", color: "bg-green-500" },
      ],
    },
  ];
  return (
    <>
      <div className="rounded-b px-3">
        <header className="h-16 border-slate-100 grid grid-cols-12 place-item-start md:flex md:place-items-center">
          <div className="inline-block mr-4 col-span-12 md:col-span-2 border-b border-slate-200 mb-1">
            <div className="text-xl md:border-r-2 md:border-slate-100 pr-4 my-1 md:my-4 flex items-center">
              <span
                className="md:hidden mr-4 text-blue-900 rounded-full p-2 bg-blue-200"
                onClick={openSidebar}
              >
                <BiMenuAltLeft />
              </span>
              <span>Assessment</span>
            </div>
          </div>
          <div className="inline-block text-sm col-span-12 md:col-span-4 mt-1 border-b border-slate-200 pb-2 md:pb-5 md:grow">
            {subCategories.map((category) => (
              <span
                className={`py-2 md:py-5 mr-5 cursor-pointer ${
                  category.isActive
                    ? "border-b-2 border-sky-600 text-sky-600"
                    : "text-blue-900"
                }`}
                key={category.title}
              >
                {category.title}
              </span>
            ))}
          </div>
        </header>
        <main className="py-5">
          <Heading title={"Assessments Overview"} type={"lg"} />
          <div className="border rounded border-slate-200 grid grid-cols-12 mb-5">
            <div className="px-4 pb-4 col-span-6 md:col-span-2 border-r border-b md:border-b-none rounded border-slate-200 order-1">
              <Heading title={"Total Assessment"} type={"sm"} />
              <div className="flex items-center">
                <div className="text-indigo-600 p-2 bg-indigo-100 rounded mr-2">
                  <MdOutlineViewAgenda />
                </div>
                <div className="font-semibold text-indigo-600">34</div>
              </div>
            </div>
            <div className="px-4 pb-4 col-span-12 md:col-span-4 border-r border-b md:border-b-none rounded border-slate-200 order-3 md:order-2">
              <Heading title={"Candidates"} type={"sm"} />
              <div className="flex items-center">
                <div className="text-indigo-600 p-2 bg-indigo-100 rounded mr-2">
                  <MdOutlineGroup />
                </div>
                <div className="flex flex-col border-r-2 px-5 border-slate-200">
                  <div className="font-semibold text-indigo-600">
                    11,145 <span className="text-xs text-green-400">+89</span>
                  </div>
                  <div className="capitalize text-xs text-blue-900 font-semibold">
                    Total candidate
                  </div>
                </div>
                <div className="flex flex-col px-5">
                  <div className="font-semibold text-indigo-600">
                    11,145 <span className="text-xs text-green-400">+89</span>
                  </div>
                  <div className="capitalize text-xs text-blue-900 font-semibold">
                    Total candidate
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 pb-4 col-span-12 md:col-span-4 border-r rounded border-slate-200 order-4 md:order-3">
              <Heading title={"Candidates Source"} type={"sm"} />
              <div className="flex items-center">
                <div className="text-red-600 p-2 bg-red-100 rounded mr-2">
                  <MdOutlineLanguage />
                </div>
                <div className="flex flex-col border-r-2 px-5 border-slate-200">
                  <div className="font-semibold text-indigo-600">
                    11,000 <span className="text-xs text-green-400">+89</span>
                  </div>
                  <div className="capitalize text-xs text-blue-900 font-semibold">
                    Email
                  </div>
                </div>
                <div className="flex flex-col px-5 border-r-2 border-slate-200">
                  <div className="font-semibold text-indigo-600">
                    145 <span className="text-xs text-green-400">+89</span>
                  </div>
                  <div className="capitalize text-xs text-blue-900 font-semibold">
                    Unique Link
                  </div>
                </div>
                <div className="flex flex-col px-5">
                  <div className="font-semibold text-indigo-600">
                    145 <span className="text-xs text-green-400">+89</span>
                  </div>
                  <div className="capitalize text-xs text-blue-900 font-semibold">
                    Social Share
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 pb-4 col-span-6 md:col-span-2 border-b md:border-b-none order-2 md:order-4">
              <Heading title={"Total Purpose"} type={"sm"} />
              <div className="flex items-center">
                <div className="text-sky-600 p-2 bg-sky-100 rounded mr-2">
                  <MdOutlineLink />
                </div>
                <div className="font-semibold text-sky-600">11</div>
              </div>
            </div>
          </div>
          <Heading title={"My Assessments"} type={"lg"} />
          <div className="grid grid-cols-12 gap-x-5">
            <div
              className="col-span-12 md:col-span-4 border-4 p-3 pt-5 border-dotted rounded border-slate-200 text-center bg-slate-100 cursor-pointer"
              onClick={openModal}
            >
              <span className="rounded-full p-3 text-sky-600 bg-white inline-block">
                <MdAdd size={28} />
              </span>
              <Heading title={"New Assessment"} type={"lg"} />
              <Heading
                title={
                  "From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!"
                }
                type={"xs"}
              />
            </div>
            {assessmentCardDetails.map((item, index) => (
              <div
                className="col-span-12 md:col-span-4 mt-4 md:mt-0"
                key={index}
              >
                <AssessmentCard
                  logo={item.logo}
                  title={item.title}
                  subtitle={item.subtitle}
                  date={item.date}
                  candidates={item.candidates}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Assessment;

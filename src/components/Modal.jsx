import React from "react";
import Heading from "./Heading";
import { MdClose } from "react-icons/md";

const Modal = ({ isOpen, onClose, onSave }) => {
  return (
    <>
      <div
        className={`bg-black opacity-30 grid place-items-center absolute min-h-screen min-w-screen w-full h-full z-10 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`grid place-items-center min-h-screen min-w-screen h-full w-full z-10 absolute top-0 left-0 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-white rounded-lg w-full sm:w-1/2 md:w-1/3">
          <div className="flex justify-between items-center border-b border-slate-200 py-2 px-4">
            <Heading title={"Create New Assessment"} type={"lg"} />
            <span className="inline-block cursor-pointer" onClick={onClose}>
              <MdClose />
            </span>
          </div>
          <form className="p-4 mb-2">
            <Heading title={"Name of assessment"} type={"sm"} />
            <input
              type="text"
              placeholder="Type Here"
              className="p-2 text-xs placeholder:text-blue-900 font-semibold border border-slate-200 w-full rounded mb-4"
            />
            <Heading title={"Purpose of the test is"} type={"sm"} />
            <select className="p-2 text-xs text-blue-900 font-semibold border border-slate-200 w-full rounded mb-4">
              <option value="1">Select</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <Heading title={"Description"} type={"sm"} />
            <select className="p-2 text-xs text-blue-900 font-semibold border border-slate-200 w-full rounded mb-4">
              <option value="1">Select</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <Heading title={"Skills"} type={"sm"} />
            <div>
              <div className="p-2 text-sm font-semibold border border-slate-200 w-full rounded rounded-b-none flex flex-wrap">
                <span className="text-xs text-blue-900 rounded-xl px-2 py-1 bg-blue-200 flex items-center gap-x-1 mr-2 mb-2">
                  <span>UI/UX and Design</span>
                  <span>
                    <MdClose />
                  </span>
                </span>
                <span className="text-xs text-blue-900 rounded-xl px-2 py-1 bg-blue-200 flex items-center gap-x-1 mr-2 mb-2">
                  <span>UI/UX and Design</span>
                  <span>
                    <MdClose />
                  </span>
                </span>
                <span className="text-xs text-blue-900 rounded-xl px-2 py-1 bg-blue-200 flex items-center gap-x-1 mr-2 mb-2">
                  <span>UI/UX and Design</span>
                  <span>
                    <MdClose />
                  </span>
                </span>
                <span className="text-xs text-blue-900 rounded-xl px-2 py-1 bg-blue-200 flex items-center gap-x-1 mr-2 mb-2">
                  <span>UI/UX and Design</span>
                  <span>
                    <MdClose />
                  </span>
                </span>
              </div>
              <input
                type="text"
                placeholder="Type Here"
                className="p-2 text-xs placeholder:text-blue-900 font-semibold border border-slate-200 border-t-0 w-full rounded rounded-t-none mb-4"
              />
            </div>
            <Heading title={"Duration of assessment"} type={"sm"} />
            <input
              type="text"
              placeholder="HH:MM:SS"
              className="p-2 text-xs placeholder:text-blue-900 font-semibold border border-slate-200 w-full rounded mb-4"
            />
            <button
              className="bg-blue-600 text-white text-center w-full py-1 rounded-lg"
              onClick={onSave}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;

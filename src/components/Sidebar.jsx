import React from "react";
import {
  MdOutlineNoteAlt,
  MdOutlineDashboard,
  MdOutlineQuiz,
  MdOutlineMedicalServices,
  MdClose,
} from "react-icons/md";
import SidebarCard from "./Sidebar/SidebarCard";
import Heading from "./Heading";

const Sidebar = ({ onCloseSidebar, isOpenSidebar }) => {
  const sidebarPublicMenu = [
    {
      title: "Dashboard",
      logo: <MdOutlineDashboard />,
      isActive: false,
      isAdmin: false,
    },
    {
      title: "Assessment",
      logo: <MdOutlineNoteAlt />,
      isActive: true,
      isAdmin: false,
    },
    {
      title: "My Library",
      logo: <MdOutlineQuiz />,
      isActive: false,
      isAdmin: false,
    },
  ];
  const sidebarAdminMenu = [
    {
      title: "Round Status",
      logo: <MdOutlineMedicalServices />,
      isActive: false,
      isAdmin: true,
    },
  ];
  return (
    <>
      <aside className="max-h-[992px] h-full rounded-b p-4 bg-white hidden md:block">
        <div className="flex flex-col items-center">
          {sidebarPublicMenu.map((item) => (
            <SidebarCard
              key={item.title}
              title={item.title}
              logo={item.logo}
              isActive={item.isActive}
            />
          ))}
        </div>
        <hr className="border-dotted border-t-2 border-slate-300" />
        <div className="flex flex-col items-center">
          {sidebarAdminMenu.map((item) => (
            <SidebarCard
              key={item.title}
              title={item.title}
              logo={item.logo}
              isActive={item.isActive}
              isAdmin={item.isAdmin}
            />
          ))}
        </div>
      </aside>
      <aside
        className={`md:hidden absolute w-full sm:w-1/2 bg-white h-screen p-4 ${
          isOpenSidebar ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center justify-between px-2">
          <Heading title={"Menu"} type={"sm"} />
          <span
            className="inline-block text-blue-900 cursor-pointer"
            onClick={onCloseSidebar}
          >
            <MdClose />
          </span>
        </div>
        <div className="flex flex-col">
          {sidebarPublicMenu.map((item) => (
            <SidebarCard
              key={item.title}
              title={item.title}
              logo={item.logo}
              isActive={item.isActive}
            />
          ))}
        </div>
        <hr className="border-dotted border-t-2 border-slate-300" />
        <div className="flex flex-col">
          {sidebarAdminMenu.map((item) => (
            <SidebarCard
              key={item.title}
              title={item.title}
              logo={item.logo}
              isActive={item.isActive}
              isAdmin={item.isAdmin}
            />
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

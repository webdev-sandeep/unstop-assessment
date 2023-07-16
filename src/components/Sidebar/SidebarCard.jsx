import React from "react";

const SidebarCard = ({ title, logo, isActive, isAdmin }) => {
  return (
    <div
      className={`my-2 md:my-4 p-2 md:p-3rounded grid grid-row-6 grid-flow-col place-content-start md:flex md:items-center md:flex-col text-xs cursor-pointer ${
        isActive
          ? "bg-blue-50 text-blue-500 border border-blue-500"
          : "text-blue-900"
      }`}
    >
      {isAdmin && (
        <div className="text-red-600 border-2 bg-red-50 border-red-600 rounded-full px-2 mb-4 order-3 md:order-1">
          Admin
        </div>
      )}
      <div className="h-5 w-5 order-1 md:order-2">{logo}</div>
      <h3 className="whitespace-pre-wrap order-2 mr-2 md:mr-0 md:order-3">
        {title}
      </h3>
    </div>
  );
};

export default SidebarCard;

import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import EmployeeShiftCard from "../EmployeeShiftCard";

const EmployeeSchedule = () => {
  return (
    <main className="p-3 space-y-6 text-xs bg-gray-100 App lg:p-10 xl:p-12 md:text-sm lg:text-base xl:text-lg">
      <header className="flex justify-between">
        <button className="flex items-center justify-between px-2 py-1 text-center bg-white border-2 border-green-400 rounded-sm lg:rounded-md xl:w-48 xl:h-16 lg:justify-around w-28 lg:w-40 lg:py-2">
          <p className="font-medium">Tomorrow</p>
          <ChevronDownIcon className="w-6 h-6" />
        </button>
      </header>
      <section className="w-full space-y-6">
        <header className="flex justify-between w-full px-3 py-3 font-medium text-white bg-green-500 rounded-sm xl:text-xl xl:font-semibold xl:space-x-48 xl:items-start xl:pl-20">
          <h3 className="xl:pl-24">Staff Name</h3>
          <h3 className="hidden xl:pl-2 lg:block ">Post</h3>
          <h3 className="hidden xl:pl-2 lg:block">Lead</h3>
          <h3 className="text-right xl:text-left">Shift Time</h3>
        </header>
        <div className="space-y-6">
          <EmployeeShiftCard />
          <EmployeeShiftCard />
          <EmployeeShiftCard />
          <EmployeeShiftCard />
          <EmployeeShiftCard />
        </div>
        <div className="flex xl:hidden">
          <button className="h-10 mx-auto text-sm text-center text-white bg-green-500 rounded-sm w-60">
            View All
          </button>
        </div>
      </section>
    </main>
  );
};

export default EmployeeSchedule;

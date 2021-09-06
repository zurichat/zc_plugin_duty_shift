import React from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import ShiftCard from "../ShiftCard";

function Schedule() {
  return (
    <main className="p-3 space-y-6 text-xs bg-gray-100 App lg:p-10 xl:p-12 md:text-sm lg:text-base xl:text-lg">
      <header className="flex justify-between">
        <button className="flex items-center justify-between px-2 py-1 text-center bg-white border-2 border-green-400 rounded-sm lg:rounded-md xl:w-48 xl:h-16 lg:justify-around w-28 lg:w-40 lg:py-2">
          <p className="font-medium">Tomorrow</p>
          <ChevronDownIcon className="w-6 h-6" />
        </button>
        <button className="px-2 py-1 font-medium text-white bg-green-500 rounded-sm lg:rounded-md w-28 lg:w-40 xl:w-48 xl:h-16">
          Add new shift
        </button>
      </header>
      <section className="space-y-6">
        <header className="flex items-center justify-between w-full px-3 py-3 font-medium text-left text-white bg-green-500 rounded-sm xl:text-xl xl:font-semibold xl:justify-start xl:space-x-48 xl:items-start xl:pl-20">
          <h3 className="xl:ml-24">Staff Name</h3>
          <h3 className="hidden lg:inline-block">Title</h3>
          <h3 className="hidden lg:inline-block">Lead</h3>
          <h3 className="text-right xl:text-left">Shift Time</h3>
          <div className="hidden lg:inline-block"></div>
          <div className="hidden lg:inline-block"></div>
        </header>

        <div className="space-y-6">
          <ShiftCard />
          <ShiftCard />
          <ShiftCard />
          <ShiftCard />
          <ShiftCard />
        </div>

        <div className="flex xl:hidden">
          <button className="h-10 mx-auto text-sm text-center text-white bg-green-500 rounded-sm w-60">
            View All
          </button>
        </div>
      </section>
    </main>
  );
}

export default Schedule;

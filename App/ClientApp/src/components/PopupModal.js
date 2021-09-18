import React from "react";
import { XCircleIcon, XIcon } from "@heroicons/react/solid";
import {
  CalendarIcon,
  ClockIcon,
  UserAddIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";

function PopupModal({ mode, setModalStatus }) {
  return (
    <>
      <header className="flex justify-between p-4 mx-2 text-center text-white bg-green-500 rounded-t-xl lg:rounded-t-2xl">
        <h2 className="my-auto text-base lg:mr-10 lg:ml-3">
          {mode === "new" ? "Add new shift" : "Edit shift"}
        </h2>
        <XCircleIcon
          onClick={() => setModalStatus(null)}
          className="w-6 h-6 stroke-current stroke-1 lg:mr-3 lg:w-9 lg:h-9 lg:ml-60"
        />
      </header>

      <form
        action=""
        className="grid grid-cols-2 gap-6 p-5 mx-2 overflow-hidden bg-white mb-15 rounded-b-xl lg:rounded-b-2xl"
      >
        <div className="lg:relative lg:mt-4">
          <label
            htmlFor="date"
            className="flex items-center mb-3 text-gray-400"
          >
            <CalendarIcon className="w-6 h-6 lg:hidden" />
            <span className="ml-2 text-xs lg:text-base">Date</span>
          </label>
          <input
            type="text"
            id="date"
            className="p-3 font-sans text-base bg-gray-100 rounded-md outline-none lg:text-base w-100 lg:w-72 lg:ml-2"
            value="Mon, August 28, 2021"
          />
          <CalendarIcon className="hidden w-6 h-6 text-gray-400 lg:absolute lg:inline lg:bottom-4 lg:right-8" />
        </div>

        <div className="relative lg:mt-4">
          <label
            htmlFor="date"
            className="flex items-center mb-3 text-gray-400 lg:text-xl"
          >
            <span className="text-base lg:ml-2 lg:text-base">Shift</span>
          </label>
          <input
            type="text"
            id="date"
            className="p-3 font-sans text-sm bg-gray-100 border rounded-md outline-none lg:text-base w-44 lg:w-72 lg:ml-2"
            value="Morning Shift"
          />
          <ChevronDownIcon className="absolute w-6 h-6 text-gray-400 bottom-4 right-6 lg:bottom-4 lg:right-8" />
        </div>

        <div className="relative lg:mt-4">
          <label
            htmlFor="date"
            className="flex items-center mb-3 text-gray-400 lg:text-xl"
          >
            <ClockIcon className="w-6 h-6 lg:hidden" />
            <span className="ml-2 text-base lg:text-base">Time</span>
          </label>
          <input
            type="text"
            id="date"
            className="p-3 font-sans text-sm bg-gray-100 rounded-md outline-none lg:text-base w-44 lg:w-72 lg:ml-2"
            value="09:00am"
          />
          <ClockIcon className="hidden w-6 h-6 text-gray-400 lg:absolute lg:inline lg:bottom-6 lg:right-8" />
        </div>

        <div className="relative lg:mt-4">
          <label
            htmlFor="date"
            className="flex items-center mb-3 text-gray-400 lg:text-base"
          >
            <span className="text-base lg:ml-2 lg:text-base">End</span>
          </label>
          <input
            type="text"
            id="date"
            className="p-3 font-sans text-base bg-gray-100 rounded-md outline-none lg:text-base w-44 lg:w-72 lg:ml-2"
            value="12:00am"
          />
          <ClockIcon className="hidden w-6 h-6 text-gray-400 lg:absolute lg:inline lg:bottom-4 lg:right-8" />
        </div>

        <div className="relative lg:mt-4">
          <label
            htmlFor="date"
            className="flex items-center mb-3 text-gray-400 lg:text-xl"
          >
            <span className="text-base lg:ml-2 lg:text-base">Title</span>
          </label>
          <input
            type="text"
            id="date"
            className="p-3 font-sans text-sm bg-gray-100 border rounded-md outline-none lg:text-base w-44 lg:w-72 lg:ml-2"
            value="Morning Shift"
          />
          <ChevronDownIcon className="absolute w-6 h-6 text-gray-400 bottom-4 right-6" />
        </div>

        <div className="items-center justify-between hidden p-3 font-sans text-sm bg-gray-100 rounded-md lg:flex lg:self-end lg:text-lg w-44 lg:w-72 lg:h-1/2 lg:ml-2">
          <img
            src="https://res.cloudinary.com/moh-x/image/upload/v1618542907/fcc/portfolio/AvatarMaker_ipxz90.svg"
            alt="user's avatar"
            className="w-8 h-8 border border-green-500 rounded-full xl:border-4"
          />
          <p className="text-base font-extralight">Babatunde Xodeeq</p>
          <XIcon className="w-3 h-3" />
        </div>

        <div className="items-center justify-between hidden p-3 font-sans text-sm bg-gray-100 rounded-md lg:flex lg:self-end w-44 lg:w-70 lg:h-14 lg:text-base lg:ml-2">
          <img
            src="https://res.cloudinary.com/moh-x/image/upload/v1618542907/fcc/portfolio/AvatarMaker_ipxz90.svg"
            alt="user's avatar"
            className="w-8 h-8 border border-green-500 rounded-full"
          />
          <p className="font-extralight">Babatunde Xodeeq</p>
          <XIcon className="w-3 h-3" />
        </div>

        <div className="relative lg:mt-4">
          <label
            htmlFor="date"
            className="flex items-center mb-3 text-gray-400 lg:hidden lg:text-xl"
          >
            <span className="text-lg">Users</span>
          </label>
          <input
            type="text"
            id="date"
            className="p-3 font-sans text-base bg-gray-100 rounded-md outline-none lg:text-xl w-44 lg:w-64 lg:ml-2 lg:bg-transparent lg:text-center lg:font-medium lg:placeholder-gray-400"
            placeholder="Add Users"
            readOnly
          />
          <UserAddIcon className="absolute w-6 h-6 text-gray-500 lg:w-9 lg:h-9 bottom-4 right-6 lg:bottom-4 lg:right-8" />
        </div>

        <div className="relative lg:mt-4 lg:text-base">
          <label
            htmlFor="date"
            className="flex items-center mb-3 text-gray-500 lg:hidden"
          >
            <span className="">Users</span>
          </label>
          <input
            type="submit"
            value="Publish"
            className="col-span-2 p-2 mt-8 mb-6 font-medium text-white bg-green-500 rounded-lg text-md lg:text-lg w-72 lg:w-80 lg:h-16 place-self-center"
          />
          <UserAddIcon className="absolute w-6 h-6 text-gray-500 lg:w-7 lg:h-7 bottom-4 right-6 lg:bottom-4 lg:right-36" />
        </div>

        <input
          type="submit"
          value="Publish"
          className="col-span-2 p-2 mt-8 mb-6 text-lg font-medium text-white bg-green-500 rounded-md cursor-pointer w-80 lg:w-80 lg:h-12 place-self-center"
        />
      </form>
    </>
  );
}

export default PopupModal;

import React from "react";

function ShiftCard({ setModalStatus }) {
  return (
    <div className="items-center p-4 space-y-6 bg-white lg:space-y-0 lg:p-6 lg:flex lg:justify-between lg:text-lg rounded-xl">
      <div className="flex justify-between w-full lg:w-9/12">
        <div className="flex items-center space-x-2 text-center xl:space-x-6">
          <img
            src="https://res.cloudinary.com/moh-x/image/upload/v1618542907/fcc/portfolio/AvatarMaker_ipxz90.svg"
            alt="user's avatar"
            className="border border-green-500 rounded-full w-7 h-7 lg:w-11 lg:h-11"
          />
          <span className="lg:font-medium">Babatunde Adenowo</span>
        </div>

        <div className="hidden my-auto text-left text-gray-500 lg:block">
          <p>Developer</p>
        </div>

        <div className="hidden my-auto text-left text-gray-500 lg:block">
          <p>Eyimofe Omotayo</p>
        </div>

        <div className="my-auto">09:00am - 12:00pm</div>
      </div>

      <div className="flex items-center justify-between text-center lg:my-auto lg:space-x-8 lg:mr-6">
        <div className="items-center content-center my-auto border lg:text-xs">
          <button
            onClick={() => setModalStatus("edit")}
            className="py-2 my-auto font-medium text-center text-green-500 bg-white border-2 border-green-400 rounded-sm lg:rounded-md w-28"
          >
            Edit Shift
          </button>
        </div>
        <button
          onClick={() => setModalStatus("delete")}
          className="py-2 my-auto text-center text-red-500 cursor-pointer lg:text-xs"
        >
          Delete Shift
        </button>
      </div>
    </div>
  );
}

export default ShiftCard;

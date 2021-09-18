import React from "react";

function EmployeeShiftCard() {
  return (
    <div className="p-3 py-4 space-y-6 bg-white xl:py-3 xl:justify-between w-full xl:text-xl rounded-xl">
      <div className="flex justify-between xl:space-x-28 xl:ml-4">
        <div className="flex items-center space-x-2 text-center xl:space-x-6">
          <img
            src="https://res.cloudinary.com/moh-x/image/upload/v1618542907/fcc/portfolio/AvatarMaker_ipxz90.svg"
            alt="user's avatar"
            className="border border-green-500 rounded-full xl:border-4 w-7 h-7 xl:w-14 xl:h-14"
          />
          <span className="xl:font-medium">Babatunde Adenowo</span>
        </div>
        <p className="items-center hidden my-auto text-left text-gray-500 lg:block">
          Developer
        </p>
        <p className="items-center hidden my-auto text-left text-gray-500 lg:block">
          Eyimofe Omotayo
        </p>
        <div className="my-auto">09:00am - 12:00pm</div>
      </div>
    </div>
  );
}

export default EmployeeShiftCard;

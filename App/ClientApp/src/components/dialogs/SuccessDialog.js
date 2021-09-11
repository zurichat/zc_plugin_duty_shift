import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import Button from "../customs/Button";

function SuccessDialog({ mode, setModalStatus }) {
  return (
    <div className="flex flex-col items-center w-11/12 px-4 py-16 m-auto space-y-8 overflow-hidden text-white bg-green-500 lg:space-y-12 lg:w-9/12 lg:px-16 xl:w-10/12 xl:p-20 rounded-xl lg:rounded-2xl">
      <CheckCircleIcon className="w-20 h-20 bg-green-500 stroke-current" />

      <h2 className="text-3xl font-extrabold xl:text-4xl">Successful</h2>

      <p className="text-lg font-light text-center">
        Anifowose's shift has been deleted Successfully.
      </p>

      <div className="flex justify-center w-full">
        <Button
          onClick={() => setModalStatus(null)}
          text="Close"
          bgColor="green-400"
        ></Button>
      </div>
    </div>
  );
}

export default SuccessDialog;

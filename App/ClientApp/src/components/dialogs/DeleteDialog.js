import React from "react";
import { XCircleIcon } from "@heroicons/react/solid";
import Button from "../customs/Button";

function DeleteDialog({ mode, setModalStatus }) {
  return (
    <div className="flex flex-col items-center w-11/12 px-4 py-16 m-auto space-y-8 overflow-hidden bg-white lg:space-y-12 lg:w-9/12 lg:px-16 xl:w-10/12 xl:p-20 rounded-xl lg:rounded-2xl">
      <XCircleIcon className="w-20 h-20 text-red-500 stroke-current" />

      <h2 className="text-3xl font-medium xl:text-4xl">Are you sure?</h2>

      <p className="text-lg font-light text-center">
        Do you really want to delete this shift? This process cannot be undone.
      </p>

      <div className="flex justify-between w-full">
        <Button
          onClick={() => setModalStatus(null)}
          text="Cancel"
          bgColor="gray-300"
        />
        <Button
          onClick={() => setModalStatus("success")}
          text="Delete"
          textColor="white"
          bgColor="red-500"
        />
      </div>
    </div>
  );
}

export default DeleteDialog;

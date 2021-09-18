import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import ShiftCard from "../ShiftCard";
import Popup from "../Popup";
import PopupModal from "../PopupModal";
import SuccessDialog from "../dialogs/SuccessDialog";
import DeleteDialog from "../dialogs/DeleteDialog";

const Modal = Popup(PopupModal);
const GreenDialog = Popup(SuccessDialog);
const RedDialog = Popup(DeleteDialog);

function Schedule() {
  const [modalStatus, setModalStatus] = useState(null);

  return (
    <main
      className={`p-3 space-y-6 lg:space-y-10 text-xs bg-gray-100 App lg:p-6 xl:p-8 md:text-sm ${
        modalStatus && "overflow-hidden"
      }`}
    >
      <header className="flex justify-between lg:max-w-7xl lg:mx-auto">
        <button className="flex items-center justify-between px-2 py-1 text-center bg-white border-2 border-green-400 rounded-sm w-28 lg:w-36 lg:h-12 lg:justify-center">
          <span className="font-medium lg:mr-3">Today</span>
          <ChevronDownIcon className="w-6 h-6 text-gray-700 stroke-current stroke-0" />
        </button>
        <button
          onClick={() => setModalStatus("new")}
          className="px-2 py-1 font-medium text-white bg-green-500 rounded-sm w-28 lg:w-36 lg:h-12"
        >
          Add new shift
        </button>
      </header>
      {/* remove max-w-7xl and mx-auto when the plugin get's called */}
      <section className="space-y-6 lg:max-w-7xl lg:mx-auto">
        <header className="flex items-center justify-between w-full px-3 py-3 font-medium text-left text-white bg-green-500 rounded-sm lg:text-base xl:pl-8">
          <h3 className="lg:ml-16">Staff Name</h3>
          <h3 className="hidden lg:inline-block">Title</h3>
          <h3 className="hidden lg:inline-block">Lead</h3>
          <h3 className="text-right lg:text-left">Shift Time</h3>
          <div className="hidden lg:ml-44 lg:inline-block"></div>
        </header>

        <div className="space-y-6">
          <ShiftCard setModalStatus={setModalStatus} />
          <ShiftCard setModalStatus={setModalStatus} />
          <ShiftCard setModalStatus={setModalStatus} />
          <ShiftCard setModalStatus={setModalStatus} />
          <ShiftCard setModalStatus={setModalStatus} />
        </div>

        <div className="flex xl:hidden">
          <button className="h-10 mx-auto text-sm text-center text-white bg-green-500 rounded-sm w-60">
            View All
          </button>
        </div>
      </section>

      {modalStatus &&
        (modalStatus === "new" || modalStatus === "edit" ? (
          <Modal mode={modalStatus} setModalStatus={setModalStatus} />
        ) : modalStatus === "delete" ? (
          <RedDialog mode={modalStatus} setModalStatus={setModalStatus} />
        ) : (
          <GreenDialog mode={modalStatus} setModalStatus={setModalStatus} />
        ))}
    </main>
  );
}

export default Schedule;

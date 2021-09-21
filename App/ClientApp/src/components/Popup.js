import React from "react";

const Popup = function (Content) {
  return function (props) {
    return (
      <div className="fixed inset-0 z-50 flex w-full h-full overflow-auto bg-gray-900 bg-opacity-50 pin bg-blend-darken backdrop-filter backdrop-blur-sm overscroll-y-auto">
        <section className="relative flex flex-col m-auto lg:w-3/6">
          <Content {...props} />
        </section>
      </div>
    );
  };
};

export default Popup;

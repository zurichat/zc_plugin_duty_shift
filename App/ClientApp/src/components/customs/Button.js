import React from "react";

function Button({ text, textColor, bgColor, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-36 h-14 text-xl font-medium ${
        textColor && "text-" + textColor
      } ${
        bgColor && "bg-" + bgColor
      } rounded-md cursor-pointer lg:w-44 lg:h-16`}
    >
      {text}
    </button>
  );
}

export default Button;

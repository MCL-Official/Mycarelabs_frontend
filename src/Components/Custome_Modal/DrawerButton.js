import React from "react";

const DrawerButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded bg-indigo-500 px-4 py-2 text-white transition-colors hover:bg-indigo-600"
    >
      Book now
    </button>
  );
};

export default DrawerButton;

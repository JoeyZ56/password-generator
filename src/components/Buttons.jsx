import React from "react";

const Buttons = () => {
  return (
    <div className="items-center justify-items-center space-x-6">
      <button className="bg-green-400 rounded-sm border-solid border-inherit">
        Generate password
      </button>
      <button>Copy Password</button>
    </div>
  );
};

export default Buttons;

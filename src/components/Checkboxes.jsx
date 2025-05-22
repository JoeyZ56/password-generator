"use client";
import { useState } from "react";

const Checkboxes = () => {
  const { isChecked, setIsChecked } = useState(false);
  return (
    <div className="items-center justify-items-center ">
      <div className="flex flex-col">
        <label>Special Characters?</label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => e.target.value}
        />
      </div>
      <div className="flex flex-col">
        <label>Numbers?</label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => e.target.value}
        />
      </div>
    </div>
  );
};

export default Checkboxes;

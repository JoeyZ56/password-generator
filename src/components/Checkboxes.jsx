"use client";
import { useState } from "react";

const Checkboxes = ({ onOptionsChange }) => {
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);

  //Notify the parent when the checkboxes change
  const handleCheckedChange = (type, value) => {
    // Update local state based on which checkbox was changed
    if (type === "symbols") setIncludeSymbols(value);
    if (type === "numbers") setIncludeNumbers(value);

    // Update the parent with the new options object.
    // Use a ternary to decide which value was changed,
    // and keep the other value from local state.

    onOptionsChange({
      includeSymbols: type === "symbols" ? value : includeSymbols,
      includeNumbers: type === "numbers" ? value : includeNumbers,
    });
  };

  return (
    <div className="flex justify-center gap-6 mb-4">
      <div className="flex flex-col items-center gap-1 text-sm text-gray-200">
        <label>Add Special Characters</label>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={(e) => handleCheckedChange("symbols", e.target.checked)}
          className="cursor-pointer accent-emerald-500 w-4 h-4"
        />
      </div>
      <div className="flex flex-col items-center gap-1 text-sm text-gray-200">
        <label>Add Numbers</label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => handleCheckedChange("numbers", e.target.checked)}
          className="cursor-pointer accent-emerald-500 w-4 h-4"
        />
      </div>
    </div>
  );
};

export default Checkboxes;

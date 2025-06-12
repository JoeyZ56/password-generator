"use client";
import { useState } from "react";

const Checkboxes = ({ onOptionsChange }) => {
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeUpper, setIncludeUpper] = useState(false);
  const [length, setLength] = useState(12);

  //Notify the parent when the checkboxes change
  const handleCheckedChange = (type, value) => {
    // Update local state based on which checkbox was changed
    if (type === "symbols") setIncludeSymbols(value);
    if (type === "numbers") setIncludeNumbers(value);
    if (type === "upper") setIncludeUpper(value);

    if (type === "length") setLength(value);

    // Update the parent with the new options object.
    // Use a ternary to decide which value was changed,
    // and keep the other value from local state.

    onOptionsChange({
      includeSymbols: type === "symbols" ? value : includeSymbols,
      includeNumbers: type === "numbers" ? value : includeNumbers,
      includeUpper: type === "upper" ? value : includeUpper,
      includeLower: true,
      length: type === "length" ? value : length,
    });
  };

  return (
    <div className="flex justify-center flex-col gap-6 mb-4">
      <div className="flex flex-col items-center gap-1 text-sm text-gray-200">
        <label>Add Uppercase</label>
        <input
          type="checkbox"
          checked={includeUpper}
          onChange={(e) => handleCheckedChange("upper", e.target.checked)}
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
      <div className="flex flex-col items-center gap-1 text-sm text-gray-200">
        <label>Add Special Characters</label>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={(e) => handleCheckedChange("symbols", e.target.checked)}
          className="cursor-pointer accent-emerald-500 w-4 h-4"
        />
      </div>

      <div className="flex flex-col items-center gap-1 text-sm text-gray-200 mb-2">
        <label>Change Length</label>
        <input
          type="range"
          min={6}
          max={20}
          step={1}
          value={length}
          onChange={(e) =>
            handleCheckedChange("length", parseInt(e.target.value))
          }
          className="w-64 h-2 accent-emerald-500 cursor-pointer"
        />
        <div className="flex justify-between w-64 text-xs text-gray-400 mt-1">
          {Array.from({ length: 8 }, (_, i) => 6 + i * 2).map((num) => (
            <span key={num}>{num}</span>
          ))}{" "}
          {/* displays tick marks for the slider*/}
        </div>
      </div>
    </div>
  );
};

export default Checkboxes;

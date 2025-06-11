import React from "react";
import { useState } from "react";

const Buttons = ({ onGenerate, password }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPassword = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 1 second
    }
  };

  return (
    <div className="flex gap-15 justify-center mt-2">
      <button
        onClick={onGenerate}
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded w-2xl"
      >
        Generate
      </button>
      <button
        onClick={handleCopyPassword}
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded w-2xl"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default Buttons;

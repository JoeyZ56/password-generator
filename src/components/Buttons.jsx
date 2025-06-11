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
    <div className="items-center justify-items-center space-x-6">
      <button
        onClick={onGenerate}
        className="bg-green-400 rounded-sm border-solid border-inherit cursor-pointer"
      >
        Generate password
      </button>
      <button onClick={handleCopyPassword} className="cursor-pointer">
        {copied ? "Password Copied" : "Copy Password"}
      </button>
    </div>
  );
};

export default Buttons;

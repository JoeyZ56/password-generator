"use client";
import { useState } from "react";

const PasswordContainer = () => {
  const [displayPassword, setDisplayPassword] = useState("");
  return (
    <div className="items-center justify-items-center">
      <h1>Generated Password: {displayPassword}</h1>
    </div>
  );
};

export default PasswordContainer;

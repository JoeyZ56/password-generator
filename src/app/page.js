//Parent
"use client";
import { useState } from "react";
import PasswordDisplay from "@/components/PasswordContainer";
import Checkboxes from "@/components/Checkboxes";
import Buttons from "@/components/Buttons";

export default function Home() {
  const [options, setOptions] = useState({
    includeSymbols: false,
    includeNumbers: false,
  }); // state to manage options for checkboxes

  const [password, setPassword] = useState("");

  const handleOptionsChange = (newOptions) => {
    setOptions(newOptions);
  }; // handles the changes to checkboxes.jsx. setting the changes to newOptions then storing them in setOptions as the new state
  return (
    <div className="items-center justify-items-center mt-56">
      <main className="flex justify-center flex-col gap-4">
        <PasswordDisplay />
        <Checkboxes onOptionsChange={handleOptionsChange} />{" "}
        {/**Passing newOptions to checkboxes to grab new data */}
        <Buttons />
      </main>
    </div>
  );
}

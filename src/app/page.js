//Parent
"use client";
import { useState } from "react";
import PasswordDisplay from "@/components/PasswordContainer";
import Checkboxes from "@/components/Checkboxes";
import Buttons from "@/components/Buttons";
import { generatePassword } from "@/utils/generatePassword";

export default function Home() {
  const [options, setOptions] = useState({
    includeSymbols: false,
    includeNumbers: false,
  }); // state to manage options for checkboxes

  const [password, setPassword] = useState(""); //State to hold password

  const handleOptionsChange = (newOptions) => {
    setOptions(newOptions);
  }; // handles the changes to checkboxes.jsx. setting the changes to newOptions then storing them in setOptions as the new state.

  const handlePGeneratePassword = () => {
    const newPassword = generatePassword(options); // from utils
    setPassword(newPassword);
  }; // generates a password and sets it to the state

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      <h1 className="flex items-center gap-2 text-2xl text-gray-200 mb-1.5">
        Password Generator
      </h1>
      <main className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md">
        <PasswordDisplay password={password} />
        {/*Passing the password state to PasswordDisplay to be seen on the screen */}
        <Checkboxes onOptionsChange={handleOptionsChange} />{" "}
        {/*Passing newOptions to checkboxes to grab new data */}
        <Buttons onGenerate={handlePGeneratePassword} password={password} />
        {/*Linking siblings to get info from generatePassword to create a password */}
      </main>
    </div>
  );
}

"use client";

const PasswordContainer = ({ password }) => {
  return (
    <div className="w-full bg-gray-700 text-lg font-mono p-4 rounded text-center border border-gray-600 mb-4">
      {password || "Your secure password will appear here"}
    </div>
  );
};

export default PasswordContainer;

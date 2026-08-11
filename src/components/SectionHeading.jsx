import React from "react";

export default function SectionHeading({ children }) {
  return (
    <h2 className="text-lg font-bold tracking-normal mb-6 pb-2 border-b border-gray-200">
      {children}
    </h2>
  );
}

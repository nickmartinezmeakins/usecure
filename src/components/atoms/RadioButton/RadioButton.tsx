import React from "react";

interface RadioButtonProps {
  id: string;
  text: string;
  name: string;
  selected: boolean;
  onChange: (id: string) => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  text,
  name,
  selected,
  onChange,
}) => {
  return (
    <label
      htmlFor={id}
      className={`flex items-center my-3 rounded-md border p-3.5 cursor-pointer  focus-within:outline focus-within:outline-2 outline-brand-standard outline-offset-2
      ${
        selected
          ? "border-[#A0AABE] bg-[#EBEDF1]"
          : "bg-[#F5F6F8] border-[#CED3DD]"
      }`}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={id}
        checked={selected}
        onChange={() => onChange(id)}
        className="absolute opacity-0 pointer-events-none"
      />
      <div
        className={`w-3.5 h-3.5 min-w-3.5 flex items-center justify-center rounded-full border-2  ${
          selected ? "border-blue-500 bg-blue-500" : "border-gray-400 bg-white"
        }`}
      >
        {selected && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
      </div>
      <span className="text-sm ml-3.5">{text}</span>
    </label>
  );
};
import React from "react";

interface RadioButtonProps {
  id: string;
  text: string;
  name: string;
  selected: boolean;
  status?: "correct" | "incorrect" | "info";
  message?: string;
  onChange: (id: string) => void;
  showMessage: boolean;
  disabled: boolean;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  text,
  name,
  selected,
  status,
  message,
  onChange,
  showMessage,
  disabled,
}) => {
  const containerStyles = {
    correct: "border-green bg-green-light hover:bg-green-light",
    incorrect: "border-red-lightest bg-red-light hover:bg-red-light",
    info: "border-orange-lightest bg-orange-light hover:bg-orange-light",
    default: `${selected ? 'bg-gray-lightest border-gray-dark' : 'bg-gray-light border-border-neuteral'}`,
  };

  const textStyles = {
    correct: "text-green-dark",
    incorrect: "text-red",
    info: "text-orange",
    default: "text-text-neuteral",
  };

  const borderColor = status ? containerStyles[status] : containerStyles.default;
  const textColor = status ? textStyles[status] : textStyles.default;

  return (
    <div className="mb-3">
      <label
        htmlFor={id}
        className={`flex items-center rounded-md border p-3.5  focus-within:outline focus-within:outline-2 outline-brand-standard outline-offset-2 ${
          disabled ? "cursor-not-allowed" : "cursor-pointer hover:bg-gray-lightest"
        } ${borderColor}`}
      >
        <input
          type="radio"
          id={id}
          name={name}
          value={id}
          checked={selected}
          onChange={() => onChange(id)}
          disabled={disabled}
          className="absolute opacity-0 pointer-events-none"
        />
        <div
          className={`w-3.5 h-3.5 min-w-3.5 flex items-center justify-center rounded-full bg-contain bg-no-repeat bg-center ${
            selected && !showMessage
              ? " bg-blue border-blue border-2"
              : status === "correct"
              ? " bg-correct"
              : status === "incorrect"
              ? " bg-incorrect"
              : status === "info"
              ? " bg-info"
              : "bg-gray-light border-border-dark border-2"
          }`}
        >
          {selected && !showMessage && <div className="w-1.5 h-1.5 bg-gray-light rounded-full" />}
        </div>
        <span className="text-sm ml-3.5 text-text-neuteral">{text}</span>
      </label>
      {showMessage && message && (
        <div className={`text-sm mt-1 ${textColor}`}>{message}</div>
      )}
    </div>
  );
};
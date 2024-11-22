import React from "react";

interface ButtonProps {
  children: React.ReactNode; // Ensure `children` can be any valid React node
  onClick?: () => void; // Optional if you're handling button actions
  className?: string; // Optional if you're passing custom styles
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
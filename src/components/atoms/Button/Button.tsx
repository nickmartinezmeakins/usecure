import { twMerge } from "tailwind-merge";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const Button = ({
  children,
  variant = "primary",
  disabled = false,
  type = "button",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={twMerge(
        `rounded-md flex justify-center items-center border border-brand-standard px-5 py-3 focus:outline focus:outline-2 outline-brand-standard outline-offset-2`,
        variant === "primary" && `bg-brand-standard text-white`,
        variant === "secondary" && `bg-brand-light text-text-neuteral`,
        disabled && `bg-[#6A96ED4D] border-0 text-[#0C0D0D4D]`,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
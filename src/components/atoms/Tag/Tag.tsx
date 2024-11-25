export interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Tag = ({
  children,
}: TagProps) => {
  return (
    <span className="bg-gray-light border-border-neuteral border px-2 py-0.5 rounded-full text-xs leading-[18px] inline-block font-normal">{children}</span>
  )
};

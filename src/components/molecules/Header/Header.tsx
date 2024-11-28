import Image from "next/image";
import Link from "next/link";

export const Header = () => (
  <header className="py-6 sm:py-5 px-4 sm:px-8 border-b border-gray flex justify-between">
    <Image
      src="/logo.svg"
      alt="logo"
      width={104}
      height={20}
    />
    <Link className="hidden sm:flex hover:underline" href="#">Course Demo</Link>
  </header>
);

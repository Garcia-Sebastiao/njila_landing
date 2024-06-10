import Link from "next/link";

interface IButton {
  href?: string;
  onClick?: () => void;
  label?: string;
  className?: string;
}

export function Button({ href, onClick, label, className }: IButton) {
  return (
    <Link
      href={href as string}
      className={`px-12 py-4 rounded-xl text-white ${className}`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

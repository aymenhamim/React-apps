import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className="text-xl font-semibold text-primary-100 flex justify-center items-center gap-3"
    >
      <img src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" />
      The Wild Oasis
    </Link>
  );
}

export default Logo;

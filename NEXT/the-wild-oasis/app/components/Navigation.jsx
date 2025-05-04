import Link from "next/link";

function Navigation() {
  return (
    <ul className="flex gap-10 text-2xl font-bold text-gray-800">
      <li>
        <Link href="/">home</Link>
      </li>
      <li>
        <Link href="/cabins">cabins</Link>
      </li>
      <li>
        <Link href="/account">account</Link>
      </li>
      <li>
        <Link href="/about">about</Link>
      </li>
    </ul>
  );
}

export default Navigation;

import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-around py-5  w-full absolute backdrop-blur-2xl z-10 shadow-2xl">
      <h1 className="text-3xl font-bold">
        <Link href={"/"}>My APP</Link>
      </h1>

      <ul className="flex gap-10 items-center">
        <Link href={"/performance"}>Performance</Link>
        <Link href={"/reliability"}>Reliability</Link>
        <Link href={"/scale"}>Scale</Link>
      </ul>
    </div>
  );
}

export default Header;

import { auth } from "@/auth"; // Fixed typo: was "@/auh"
import HeaderClient from "./header-client";

async function Header() {
  const session = await auth();

  return <HeaderClient session={session} />;
}

export default Header;

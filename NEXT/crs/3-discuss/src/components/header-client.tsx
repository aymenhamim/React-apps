"use client";

import {
  Avatar,
  Button,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import type { Session } from "next-auth";
import * as actions from "@/actions";

interface HeaderClientProps {
  session: Session | null;
}

function HeaderClient({ session }: HeaderClientProps) {
  let authContent: React.ReactNode;

  if (session?.user) {
    authContent = (
      <Popover placement="bottom">
        <PopoverTrigger>
          <Avatar src={session.user?.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-2">
            <form action={actions.signOut}>
              <Button type="submit" variant="light">
                Sign Out
              </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <ul className="flex gap-2">
        <NavbarItem>
          <form action={actions.signIn}>
            <Button
              type="submit"
              color="secondary"
              variant="bordered"
              size="sm"
            >
              SignIn
            </Button>
          </form>
        </NavbarItem>

        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="primary" variant="flat" size="sm">
              SignUp
            </Button>
          </form>
        </NavbarItem>
      </ul>
    );
  }

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">{authContent}</NavbarContent>
    </Navbar>
  );
}

export default HeaderClient;

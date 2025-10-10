export type Navlink = {
  label: string;
  href: string;
};

export const navLinks: Navlink[] = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "Transactions",
    href: "/transactions",
  },
  {
    label: "Deposit",
    href: "/deposit",
  },
  {
    label: "Withdraw",
    href: "/withdraw",
  },
];

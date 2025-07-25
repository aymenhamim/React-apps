'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = href === pathname;

  console.log(pathname);

  return (
    <Link className={isActive ? 'text-cyan-500' : ''} href={href}>
      {children}
    </Link>
  );
}

export default NavLink;

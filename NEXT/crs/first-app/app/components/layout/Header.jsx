import Link from 'next/link';
import NavLink from '@/components/ui/NavLink';
import ContactButton from '@/components/ui/ContactButton';

function Header() {
  return (
    <header className="bg-sky-100">
      <nav>
        <ul className="flex justify-center gap-10">
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="/about/team">Team</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Contact</NavLink>
          </li>
          {/* <ContactButton /> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

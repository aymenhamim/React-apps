import Link from 'next/link';

function AboutLayout({ children }) {
  return (
    <div>
      {/* <header>
        <nav>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/about/team">Team</Link>
            </li>
          </ul>
        </nav>
      </header> */}
      {children}
      <h3 className="text-red-600">This is from about layout</h3>
    </div>
  );
}

export default AboutLayout;

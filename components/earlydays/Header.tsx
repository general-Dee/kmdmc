import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold text-gray-800">My Website</a>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">
              <a className="text-gray-600 hover:text-gray-800">About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="text-gray-600 hover:text-gray-800">Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="text-gray-600 hover:text-gray-800">Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

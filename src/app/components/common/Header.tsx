import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-6 px-8 bg-white">
      <div className="max-w-[1900px] mx-auto">
        <nav className="flex justify-between items-start w-full">
          {/* Logo - Left */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-black font-bold text-2xl">sansa</span>
            <span className="text-gray-400 font-light text-2xl">design.</span>
          </Link>

          {/* Social Links */}
          <div className="flex flex-col text-sm font-normal text-right">
            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-black hover:text-gray-600 transition-colors"
            >
              instagram
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              className="text-black hover:text-gray-600 transition-colors"
            >
              facebook
            </Link>
            <Link
              href="https://behance.net"
              target="_blank"
              className="text-black hover:text-gray-600 transition-colors"
            >
              behance
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col text-sm font-normal text-right">
            <a
              href="mailto:contact@sansa.com"
              className="text-black hover:text-gray-600 transition-colors"
            >
              contact@sansa.com
            </a>
            <a
              href="tel:593-094-390"
              className="text-black hover:text-gray-600 transition-colors"
            >
              593-094-390
            </a>
          </div>

          {/* Navigation Menu - Right */}
          <nav className="flex flex-col text-sm font-normal text-right">
            <Link
              href="/about"
              className="text-black hover:text-gray-600 transition-colors"
            >
              about
            </Link>
            <Link
              href="/portfolio"
              className="text-black hover:text-gray-600 transition-colors"
            >
              portfolio
            </Link>
            <Link
              href="/contact"
              className="text-black hover:text-gray-600 transition-colors"
            >
              contact
            </Link>
            <Link
              href="/blog"
              className="text-black hover:text-gray-600 transition-colors"
            >
              blog
            </Link>
          </nav>
        </nav>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link href="/" className="navbar__logo">
          Jamie Kim
        </Link>
        <nav className="navbar__links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`navbar__link ${pathname === link.href ? "navbar__link--active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1Tp5RD6ZMmUJuPz6QuRC1WLxcJs4Zcx1I/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__resume"
          >
            Resume ↗
          </a>
        </nav>
      </div>
    </header>
  );
}

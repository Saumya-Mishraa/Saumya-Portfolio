import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import MagneticButton from "./MagneticButton";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!menuRef.current) return;
    if (open) {
      document.body.style.overflow = "hidden";
      const items = menuRef.current.querySelectorAll(".mobile-menu-nav li");
      const cta = menuRef.current.querySelector(".mobile-menu-cta");
      gsap.fromTo(
        menuRef.current,
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 0.7, ease: "power4.inOut" }
      );
      gsap.fromTo(
        items,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.06, delay: 0.28, duration: 0.6, ease: "power3.out" }
      );
      gsap.fromTo(
        cta,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.28 + items.length * 0.06 + 0.08, duration: 0.55, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(menuRef.current, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.5, ease: "power3.inOut" });
    }
  }, [open]);

  const handleNav = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header ref={navRef} className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="#hero" className="navbar-brand" data-cursor="button" onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}>
          SAUMYA
        </a>

        <nav className="navbar-links" aria-label="Primary">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} data-cursor="button" onClick={(e) => { e.preventDefault(); handleNav(l.href); }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <MagneticButton
          as="a"
          href="#contact"
          className="btn btn-primary navbar-cta"
          onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
        >
          Hire Me
        </MagneticButton>

        <button
          className={`navbar-burger ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className="mobile-menu" ref={menuRef} aria-hidden={!open}>
        <nav className="mobile-menu-nav" aria-label="Mobile">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => { e.preventDefault(); handleNav(l.href); }} tabIndex={open ? 0 : -1}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="btn btn-primary mobile-menu-cta"
          onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
          tabIndex={open ? 0 : -1}
        >
          Hire Me <span className="arrow">→</span>
        </a>
      </div>
    </header>
  );
}

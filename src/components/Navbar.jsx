import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";
import logoLight from "../assets/logo.png";
import logoDark from "../assets/vendly-logo.png";

function Navbar() {
  const { theme } = useTheme();
  const logo = theme === "dark" ? logoDark : logoLight;
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Vendly home" onClick={closeMenu}>
          <img
            className="brand__logo"
            src={logo}
            alt="Vendly logo"
            width="32"
            height="32"
          />
        </a>

        <nav className="nav__links" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#workflow">Workflow</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Testimonials</a>
        </nav>

        <div className="nav__actions">
          <ThemeToggle />
          <a className="nav__button" href="#demo">
            Log in
          </a>
        </div>

        <button
          className="nav__hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`hamburger-line ${menuOpen ? "is-open" : ""}`} />
          <span className={`hamburger-line ${menuOpen ? "is-open" : ""}`} />
          <span className={`hamburger-line ${menuOpen ? "is-open" : ""}`} />
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} onClick={closeMenu}>
        <nav className="mobile-menu__inner" aria-label="Mobile navigation" onClick={(e) => e.stopPropagation()}>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#workflow" onClick={closeMenu}>Workflow</a>
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
          <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
          <hr className="mobile-menu__divider" />
          <ThemeToggle />
          <a className="button button--primary mobile-menu__cta" href="#demo" onClick={closeMenu}>
            Log in
          </a>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

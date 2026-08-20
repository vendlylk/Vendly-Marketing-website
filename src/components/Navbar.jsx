import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <header className="nav">
      <a className="brand" href="#top" aria-label="Vendly home">
        <span className="brand__mark">V</span>
        <span>
          <strong>Vendly.lk</strong>
          <small>Sell smarter, locally</small>
        </span>
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
    </header>
  );
}

export default Navbar;

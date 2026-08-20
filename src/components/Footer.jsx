function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="brand" href="#top" aria-label="Vendly home">
              <span className="brand__mark">V</span>
              <span>
                <strong>Vendly.lk</strong>
                <small>Sell smarter, locally</small>
              </span>
            </a>
            <p className="footer__tagline">
              The all-in-one platform for Sri Lankan sellers to manage orders,
              inventory, and deliveries from chat conversations.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#workflow">How it works</a>
              <a href="#testimonials">Testimonials</a>
            </div>
            <div className="footer__col">
              <h4>Company</h4>
              <a href="#">About us</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
            <div className="footer__col">
              <h4>Support</h4>
              <a href="#">Help center</a>
              <a href="#">API docs</a>
              <a href="#">Status page</a>
              <a href="#">Community</a>
            </div>
          </div>
        </div>

        <hr className="gradient-line" />

        <div className="footer__bottom">
          <p>&copy; {year} Vendly.lk. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

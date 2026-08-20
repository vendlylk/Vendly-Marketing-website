import { useScrollAnimation } from "../hooks/useScrollAnimation";

function CallToAction() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="cta" id="pricing">
      <div
        ref={ref}
        className={`anim-fade ${isVisible ? "is-visible" : ""}`}
      >
        <p className="eyebrow">Early access</p>
        <h2>Launch your seller dashboard with Vendly.</h2>
        <p>
          We are building Vendly for small and medium businesses that sell
          through chat, COD delivery, and social media pages. Join our early
          access program and get a founding seller discount.
        </p>
      </div>
      <div
        className={`anim-scale ${isVisible ? "is-visible" : ""} delay-2`}
      >
        <a className="button button--primary" href="mailto:hello@vendly.lk" id="demo">
          Contact us
        </a>
      </div>
    </section>
  );
}

export default CallToAction;

import heroVideo from "../assets/hero.mp4";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Hero() {
  const [c1, v1] = useScrollAnimation({ threshold: 0.1 });
  const [c2, v2] = useScrollAnimation({ threshold: 0.1 });
  const [c3, v3] = useScrollAnimation({ threshold: 0.1 });
  const [c4, v4] = useScrollAnimation({ threshold: 0.1 });
  const [c5, v5] = useScrollAnimation({ threshold: 0.1 });
  const [vWrap, vVis] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="hero" id="top">
      <div className="hero__content">
        <p ref={c1} className={`eyebrow anim-fade ${v1 ? "is-visible" : ""}`}>
          Built for Sri Lankan small businesses
        </p>
        <h1 ref={c2} className={`anim-fade ${v2 ? "is-visible" : ""}`} style={{ transitionDelay: "0.1s" }}>
          Turn chats into orders, inventory, and delivery workflows.
        </h1>
        <p ref={c3} className={`hero__text anim-fade ${v3 ? "is-visible" : ""}`} style={{ transitionDelay: "0.2s" }}>
          Vendly helps local sellers manage chatbot orders, product catalogues,
          stock, courier tracking, fake-order risk, and daily business reports
          from one clean dashboard.
        </p>

        <div ref={c4} className={`hero__actions anim-fade ${v4 ? "is-visible" : ""}`} style={{ transitionDelay: "0.3s" }}>
          <a className="button button--primary" href="#demo">
            Start with Vendly
          </a>
          <a className="button button--secondary" href="#features">
            Explore features
          </a>
        </div>

        <div ref={c5} className={`hero__proof anim-fade ${v5 ? "is-visible" : ""}`} style={{ transitionDelay: "0.4s" }}>
          <span>WhatsApp-ready flows</span>
          <span>COD-friendly tools</span>
          <span>Seller-first dashboard</span>
        </div>
      </div>

      <div ref={vWrap} className={`hero__video-wrap anim-scale ${vVis ? "is-visible" : ""}`} style={{ transitionDelay: "0.2s" }}>
        <video
          className="hero__video"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero__video-glow" aria-hidden="true" />
      </div>
    </section>
  );
}

export default Hero;

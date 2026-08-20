import { useScrollAnimation } from "../hooks/useScrollAnimation";

const steps = [
  {
    step: "01",
    title: "Create your seller account",
    text: "Sign up in under 5 minutes. Add your business name, logo, and product categories to set up your branded storefront.",
  },
  {
    step: "02",
    title: "Upload your product catalogue",
    text: "Add products with photos, prices, sizes, stock quantities, and descriptions. Bulk upload supported for large catalogues.",
  },
  {
    step: "03",
    title: "Connect your sales channels",
    text: "Link your WhatsApp Business account, Facebook Page, and Instagram to start receiving orders from all channels.",
  },
  {
    step: "04",
    title: "Activate the chatbot",
    text: "Set up automated responses, product recommendations, and order confirmations. The chatbot works 24/7 for your buyers.",
  },
  {
    step: "05",
    title: "Manage orders & deliveries",
    text: "View incoming orders, assign couriers, print waybills, and track COD payments all from the central dashboard.",
  },
  {
    step: "06",
    title: "Grow with analytics",
    text: "Track daily sales, customer trends, popular products, and delivery performance to make smarter business decisions.",
  },
];

function HowCard({ step, index }) {
  const [ref, visible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`how-card anim-bounce ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="how-card__step">{step.step}</div>
      <h3>{step.title}</h3>
      <p>{step.text}</p>
    </div>
  );
}

function HowItWorks() {
  const [introRef, introVisible] = useScrollAnimation();

  return (
    <section className="section" style={{ background: "#fff" }}>
      <div
        ref={introRef}
        className={`section__intro anim-fade ${introVisible ? "is-visible" : ""}`}
        style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 40px" }}
      >
        <p className="eyebrow">How it works</p>
        <h2>Get started with Vendly in six steps.</h2>
        <p>
          From sign-up to your first order, we make it easy to launch your
          online selling operation. No technical skills required.
        </p>
      </div>

      <div className="how-it-works-grid">
        {steps.map((step, index) => (
          <HowCard step={step} index={index} key={step.step} />
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;

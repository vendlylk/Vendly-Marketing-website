import { useScrollAnimation } from "../hooks/useScrollAnimation";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for individual sellers just getting started with online orders.",
    features: [
      "Up to 50 orders/month",
      "1 seller account",
      "WhatsApp chatbot (basic)",
      "Product catalogue (up to 20 items)",
      "COD tracking",
      "Daily email reports",
    ],
    cta: "Get started free",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "Rs 2,990",
    period: "/month",
    description: "For growing sellers who need more power and multi-channel support.",
    features: [
      "Unlimited orders",
      "Up to 5 seller accounts",
      "WhatsApp + Facebook + Instagram",
      "Unlimited product catalogue",
      "Fake order detection",
      "Courier integrations (all carriers)",
      "Advanced analytics dashboard",
      "Priority email support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Business",
    price: "Rs 7,990",
    period: "/month",
    description: "Full-scale operations for teams and multi-store businesses.",
    features: [
      "Everything in Growth",
      "Unlimited seller accounts",
      "Custom chatbot flows",
      "API access & webhooks",
      "White-label buyer links",
      "Team permissions & roles",
      "Dedicated account manager",
      "Custom integrations",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

function PricingCard({ plan, index }) {
  const [ref, visible] = useScrollAnimation({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`pricing-card anim-flip ${visible ? "is-visible" : ""} ${plan.highlighted ? "pricing-card--highlighted" : ""}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      {plan.highlighted && (
        <div className="pricing-card__badge">Most popular</div>
      )}
      <h3 className="pricing-card__name">{plan.name}</h3>
      <div className="pricing-card__price">
        <span className="pricing-card__amount">{plan.price}</span>
        {plan.period !== "forever" && (
          <span className="pricing-card__period">{plan.period}</span>
        )}
      </div>
      <p className="pricing-card__desc">{plan.description}</p>
      <ul className="pricing-card__features">
        {plan.features.map((feature) => (
          <li key={feature}>
            <span className="pricing-card__check" aria-hidden="true">{"\u2713"}</span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        className={`button ${plan.highlighted ? "button--primary" : "button--outline"}`}
        href="#demo"
      >
        {plan.cta}
      </a>
    </div>
  );
}

function Pricing() {
  const [introRef, introVisible] = useScrollAnimation();

  return (
    <section className="section" id="pricing" style={{ background: "var(--soft)" }}>
      <div
        ref={introRef}
        className={`section__intro anim-fade ${introVisible ? "is-visible" : ""}`}
        style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 48px" }}
      >
        <p className="eyebrow">Pricing</p>
        <h2>Simple plans for every seller.</h2>
        <p>
          Start free, upgrade when you're ready. No hidden fees, no commissions
          on your orders. Cancel anytime.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <PricingCard plan={plan} index={index} key={plan.name} />
        ))}
      </div>
    </section>
  );
}

export default Pricing;

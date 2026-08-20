import { useScrollAnimation } from "../hooks/useScrollAnimation";

const benefits = [
  {
    title: "Never miss an order",
    text: "Reduce missed orders from social media chats by capturing every inquiry as a potential sale through automated chatbot flows.",
    icon: "\uD83C\uDFAF",
  },
  {
    title: "Connected operations",
    text: "Keep products, stock, customers, and orders connected across your entire business in real-time.",
    icon: "\uD83D\uDD17",
  },
  {
    title: "Simple buyer experience",
    text: "Give buyers a simple catalogue link for each seller or product, making shopping easy on any device.",
    icon: "\uD83D\uDCF1",
  },
  {
    title: "Fake order protection",
    text: "Identify and reduce fake orders with risk scoring, phone verification, and delivery address validation tools.",
    icon: "\uD83D\uDEE1\uFE0F",
  },
  {
    title: "Local delivery support",
    text: "Built for Sri Lankan couriers with COD tracking, waybill generation, and island-wide delivery zone management.",
    icon: "\uD83D\uDE9A",
  },
  {
    title: "Daily business reports",
    text: "Get automated daily summaries of orders, revenue, pending deliveries, and key metrics sent straight to your phone.",
    icon: "\uD83D\uDCCA",
  },
];

function BenefitCard({ benefit, index }) {
  const [ref, visible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`anim-slide-right ${visible ? "is-visible" : ""}`}
      style={{
        padding: "24px",
        background: "var(--soft)",
        border: "1px solid var(--line)",
        borderRadius: "14px",
        cursor: "default",
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div style={{ fontSize: "1.6rem", marginBottom: "12px" }}>
        {benefit.icon}
      </div>
      <h3 style={{ marginBottom: "8px", fontSize: "1.08rem" }}>{benefit.title}</h3>
      <p style={{ margin: 0, color: "#30465e", fontWeight: 500, lineHeight: "1.6" }}>
        {benefit.text}
      </p>
    </div>
  );
}

function Benefits() {
  const [introRef, introVisible] = useScrollAnimation();

  return (
    <section className="section section--soft">
      <div
        ref={introRef}
        className={`section__intro anim-fade ${introVisible ? "is-visible" : ""}`}
      >
        <p className="eyebrow">Why Vendly</p>
        <h2>Made for sellers who run fast with small teams.</h2>
        <p>
          Whether you're a solo seller or managing a team of three, Vendly
          gives you the tools to compete with bigger brands without the
          complexity.
        </p>
      </div>

      <div className="benefit-row">
        {benefits.map((benefit, index) => (
          <BenefitCard benefit={benefit} index={index} key={benefit.title} />
        ))}
      </div>
    </section>
  );
}

export default Benefits;

import { useScrollAnimation } from "../hooks/useScrollAnimation";

const features = [
  {
    title: "Chatbot ordering",
    text: "Customers can ask about products, compare items, add quantities, and place orders through a guided chat flow.",
    icon: "\uD83D\uDCAC",
  },
  {
    title: "Inventory control",
    text: "Track stock, variants, barcodes, categories, product photos, reviews, and low-stock items from one dashboard.",
    icon: "\uD83D\uDCE6",
  },
  {
    title: "Courier workflow",
    text: "Calculate delivery fees, assign waybills, track courier issues, and prepare exports for delivery partners.",
    icon: "\uD83D\uDE9A",
  },
  {
    title: "Seller analytics",
    text: "View daily orders, revenue, profit, top items, returned orders, and business insights made for local sellers.",
    icon: "\uD83D\uDCCA",
  },
  {
    title: "Payment tracking",
    text: "Monitor COD collections, online payments, pending invoices, and reconcile cash flow with automated reports.",
    icon: "\uD83D\uDCB3",
  },
  {
    title: "Customer database",
    text: "Build a buyer directory with order history, contact info, delivery notes, and repeat-buyer tags for each customer.",
    icon: "\uD83D\uDC65",
  },
];

function FeatureCard({ feature, index }) {
  const [ref, visible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <article
      ref={ref}
      className={`feature-card anim-bounce ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="feature-card__icon" aria-hidden="true">
        {feature.icon}
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.text}</p>
    </article>
  );
}

function Features() {
  const [introRef, introVisible] = useScrollAnimation();

  return (
    <section className="section" id="features">
      <div
        ref={introRef}
        className={`section__intro anim-fade ${introVisible ? "is-visible" : ""}`}
      >
        <p className="eyebrow">What sellers get</p>
        <h2>A practical system for everyday online selling.</h2>
        <p>
          Everything you need to run your online store, from managing customer
          conversations to tracking deliveries and analyzing performance.
        </p>
      </div>

      <div className="feature-grid">
        {features.map((feature, index) => (
          <FeatureCard feature={feature} index={index} key={feature.title} />
        ))}
      </div>
    </section>
  );
}

export default Features;

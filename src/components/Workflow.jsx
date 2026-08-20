import { useScrollAnimation } from "../hooks/useScrollAnimation";

const workflowSteps = [
  {
    title: "Customer opens seller link",
    desc: "Buyers browse products through a shareable WhatsApp or social media link that opens your Vendly catalogue.",
  },
  {
    title: "Chatbot answers product questions",
    desc: "An automated chatbot guides buyers through sizing, availability, pricing, and delivery details instantly.",
  },
  {
    title: "Order is confirmed with contact details",
    desc: "The buyer confirms their order with name, address, and phone number. Payment method is selected (COD or online).",
  },
  {
    title: "Seller packs, ships, and tracks delivery",
    desc: "You receive a confirmed order card with all details. Pack, assign a courier, and share tracking with the buyer.",
  },
];

function TimelineItem({ step, index }) {
  const [ref, visible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <li
      ref={ref}
      className={`anim-slide-right ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <span>{String(index + 1).padStart(2, "0")}</span>
      <div>
        <strong>{step.title}</strong>
        <p style={{ margin: "4px 0 0", color: "var(--muted)", fontSize: "0.9rem", fontWeight: 500, lineHeight: "1.5" }}>
          {step.desc}
        </p>
      </div>
    </li>
  );
}

function Workflow() {
  const [introRef, introVisible] = useScrollAnimation();

  return (
    <section className="split-section" id="workflow">
      <div
        ref={introRef}
        className={`anim-slide-left ${introVisible ? "is-visible" : ""}`}
      >
        <p className="eyebrow">Seller workflow</p>
        <h2>From product question to packed order.</h2>
        <p>
          Vendly is designed around the way local sellers actually work:
          customers ask questions first, then order after they feel confident.
        </p>
        <p style={{ marginTop: "14px", color: "var(--muted)", fontSize: "1.03rem", lineHeight: "1.7" }}>
          Our chat-first approach mirrors how Sri Lankan buyers prefer to shop
          on WhatsApp, Facebook, and Instagram, giving them the personal
          experience they expect while automating your workflow.
        </p>
      </div>

      <ol className="timeline">
        {workflowSteps.map((step, index) => (
          <TimelineItem step={step} index={index} key={step.title} />
        ))}
      </ol>
    </section>
  );
}

export default Workflow;

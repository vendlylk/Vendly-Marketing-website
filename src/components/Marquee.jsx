import { useScrollAnimation } from "../hooks/useScrollAnimation";

const partners = [
  { name: "WhatsApp Business", icon: "WA" },
  { name: "Facebook Commerce", icon: "FB" },
  { name: "Instagram Shop", icon: "IG" },
  { name: "PickMe Flash", icon: "PM" },
  { name: "DHL Express", icon: "DH" },
  { name: "Pronto Courier", icon: "PR" },
  { name: "LankaPay", icon: "LP" },
  { name: "Dialog", icon: "DG" },
  { name: "SLT Post", icon: "SL" },
  { name: "PayHere", icon: "PH" },
];

function Marquee() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const doubled = [...partners, ...partners];

  return (
    <div ref={ref} className={`marquee-section anim-fade ${isVisible ? "is-visible" : ""}`}>
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <p className="eyebrow">Integrations</p>
      </div>
      <div className="marquee-track" aria-label="Partner integrations">
        {doubled.map((partner, index) => (
          <div className="marquee-item" key={`${partner.name}-${index}`}>
            <div className="marquee-icon">{partner.icon}</div>
            {partner.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;

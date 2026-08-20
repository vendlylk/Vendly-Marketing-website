import { useState, useEffect } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const stats = [
  { number: 2500, suffix: "+", label: "Active sellers" },
  { number: 18000, suffix: "+", label: "Orders processed" },
  { number: 92, suffix: "%", label: "Delivery success rate" },
  { number: 4.8, suffix: "/5", label: "Seller satisfaction", decimal: true },
];

function AnimatedNumber({ target, suffix, decimal, animate }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!animate) return;

    const duration = 1800;
    const startTime = performance.now();
    let raf;

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;

      setCurrent(decimal ? parseFloat(value.toFixed(1)) : Math.floor(value));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [animate, target, decimal]);

  return (
    <span className="stat-block__number">
      {decimal ? current.toFixed(1) : current.toLocaleString()}
      {suffix}
    </span>
  );
}

function StatBlock({ stat, index }) {
  const [ref, visible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`stat-block anim-bounce ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <AnimatedNumber
        target={stat.number}
        suffix={stat.suffix}
        decimal={stat.decimal}
        animate={visible}
      />
      <div className="stat-block__label">{stat.label}</div>
    </div>
  );
}

function Stats() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="section stats-section" ref={ref}>
      <div className={`anim-fade ${isVisible ? "is-visible" : ""}`}>
        <p className="eyebrow" style={{ color: "#88c8ff" }}>
          By the numbers
        </p>
        <h2 style={{ color: "#fff" }}>
          Growing with Sri Lankan sellers every day.
        </h2>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatBlock stat={stat} index={index} key={stat.label} />
        ))}
      </div>
    </section>
  );
}

export default Stats;

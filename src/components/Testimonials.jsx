import { useScrollAnimation } from "../hooks/useScrollAnimation";

const testimonials = [
  {
    stars: 5,
    quote: "Vendly completely changed how I handle my Instagram orders. I used to lose track of 30% of inquiries. Now everything is automated and organized.",
    name: "Nadeesha Perera",
    role: "Fashion Seller, Colombo",
    initials: "NP",
  },
  {
    stars: 5,
    quote: "The COD tracking feature alone is worth it. I finally know which deliveries are pending and which payments to chase. My team saves hours every day.",
    name: "Kasun Fernando",
    role: "Electronics Store, Kandy",
    initials: "KF",
  },
  {
    stars: 5,
    quote: "I was using spreadsheets before Vendly. Now my customers get instant replies through the chatbot and I can focus on packing and shipping orders.",
    name: "Amara Silva",
    role: "Home Goods Seller, Galle",
    initials: "AS",
  },
  {
    stars: 5,
    quote: "The fake order detection saved me thousands of rupees in failed deliveries. Vendly understands what Sri Lankan sellers actually deal with.",
    name: "Ravindra Jayawardena",
    role: "Cosmetics Seller, Negombo",
    initials: "RJ",
  },
  {
    stars: 4,
    quote: "Setting up took less than a day. I uploaded my products, connected WhatsApp, and started taking orders. The dashboard is so clean and easy to use.",
    name: "Dilini Cooray",
    role: "Bakery & Cakes, Matara",
    initials: "DC",
  },
  {
    stars: 5,
    quote: "Finally a platform built for Sri Lanka. The courier integration works with all local delivery companies and the daily reports keep me informed.",
    name: "Tharaka Mendis",
    role: "Stationery Shop, Kurunegala",
    initials: "TM",
  },
];

function TestimonialCard({ t, index }) {
  const [ref, visible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <article
      ref={ref}
      className={`testimonial-card anim-fade ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="testimonial-card__stars">
        {"\u2605".repeat(t.stars)}
        {"\u2606".repeat(5 - t.stars)}
      </div>
      <p className="testimonial-card__quote">"{t.quote}"</p>
      <div className="testimonial-card__author">
        <div className="testimonial-card__avatar">{t.initials}</div>
        <div>
          <div className="testimonial-card__name">{t.name}</div>
          <div className="testimonial-card__role">{t.role}</div>
        </div>
      </div>
    </article>
  );
}

function Testimonials() {
  const [introRef, introVisible] = useScrollAnimation();

  return (
    <section className="section" id="testimonials">
      <div
        ref={introRef}
        className={`section__intro anim-fade ${introVisible ? "is-visible" : ""}`}
      >
        <p className="eyebrow">What sellers say</p>
        <h2>Trusted by sellers across the island.</h2>
        <p>
          Hear from Sri Lankan entrepreneurs who have transformed their online
          selling business with Vendly.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <TestimonialCard t={t} index={index} key={t.name} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

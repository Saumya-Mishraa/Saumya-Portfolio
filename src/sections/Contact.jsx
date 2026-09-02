import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MagneticButton from "../components/MagneticButton";
import SplitWords from "../components/SplitWords";
import { social } from "../data/content";

gsap.registerPlugin(ScrollTrigger);


const ENDPOINT = "https://formspree.io/f/xzebdlvd";

export default function Contact() {
  const sectionRef = useRef(null);

  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-heading .split-word > span",
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1,
          stagger: 0.03,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".contact-form, .contact-social",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setStatus("success");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section contact" ref={sectionRef}>
      <div className="section-inner contact-inner">
        <div className="contact-copy">
          <span className="eyebrow">Contact</span>

          <h2 className="contact-heading">
            <SplitWords text="Let's build" />
            <br />
            <SplitWords text="something." />
          </h2>

          <div className="contact-social">
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="button"
            >
              GitHub ↗
            </a>

            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="button"
            >
              LinkedIn ↗
            </a>

            <a
              href={`mailto:${social.email}`}
              data-cursor="button"
            >
              {social.email}
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
            />
          </div>

          {status === "error" && (
            <p className="form-note form-note--warn">
              Something went wrong sending your message. Please try again or
              email me directly.
            </p>
          )}

          {status === "success" && (
            <p className="form-note form-note--success">
              Message sent — thank you! I'll get back to you soon.
            </p>
          )}

          <MagneticButton
            as="button"
            type="submit"
            className="btn btn-primary contact-submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending…" : "Send Message"}
            <span className="arrow">→</span>
          </MagneticButton>
        </form>
      </div>
    </section>
  );
}
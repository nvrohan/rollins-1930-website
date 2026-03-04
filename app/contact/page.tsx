"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import FadeUp from "@/components/ui/FadeUp";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const preselectedModel = searchParams.get("model") ?? "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    model: preselectedModel,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedModel) {
      setForm((prev) => ({ ...prev, model: preselectedModel }));
    }
  }, [preselectedModel]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="min-h-[30vh] bg-charcoal flex items-end pb-12 px-6 pt-28">
        <div className="max-w-screen-xl mx-auto w-full">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-4">
            Contact
          </p>
          <h1 className="font-serif text-5xl sm:text-7xl font-light text-white tracking-widest uppercase mb-4">
            Get in Touch
          </h1>
          <p className="font-sans text-sm text-muted">
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ── Form + Info ───────────────────────────────── */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-20">
          {/* Form */}
          <FadeUp>
            <div className="max-w-2xl">
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-10 h-px bg-gold mx-auto mb-8" />
                  <h2 className="font-serif text-3xl text-white mb-4">
                    Thank You
                  </h2>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    We&apos;ll be in touch within 2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted block mb-2"
                    >
                      Name <span className="text-gold">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-charcoal border border-border px-4 py-3 font-sans text-sm text-white placeholder:text-muted/50 focus:border-gold focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted block mb-2"
                    >
                      Email <span className="text-gold">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-charcoal border border-border px-4 py-3 font-sans text-sm text-white placeholder:text-muted/50 focus:border-gold focus:outline-none transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label
                      htmlFor="country"
                      className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted block mb-2"
                    >
                      Country
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      value={form.country}
                      onChange={handleChange}
                      className="w-full bg-charcoal border border-border px-4 py-3 font-sans text-sm text-white placeholder:text-muted/50 focus:border-gold focus:outline-none transition-colors"
                      placeholder="Your country"
                    />
                  </div>

                  {/* Model of Interest */}
                  <div>
                    <label
                      htmlFor="model"
                      className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted block mb-2"
                    >
                      Model of Interest
                    </label>
                    <select
                      id="model"
                      name="model"
                      value={form.model}
                      onChange={handleChange}
                      className="w-full bg-charcoal border border-border px-4 py-3 font-sans text-sm text-white focus:border-gold focus:outline-none transition-colors"
                    >
                      <option value="">Select a model (optional)</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} — {p.series}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted block mb-2"
                    >
                      Message <span className="text-gold">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-charcoal border border-border px-4 py-3 font-sans text-sm text-white placeholder:text-muted/50 focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="self-start font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 bg-gold text-black hover:bg-gold-light transition-colors duration-300 mt-2"
                  >
                    Send Inquiry →
                  </button>
                </form>
              )}
            </div>
          </FadeUp>

          {/* Contact Info Sidebar */}
          <FadeUp delay={0.15}>
            <div className="lg:w-64 flex flex-col gap-10">
              <div>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mb-3">
                  Location
                </p>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  Taiwan
                </p>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mb-3">
                  Email
                </p>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  contact@rollins1930.com
                </p>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mb-3">
                  Established
                </p>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  Est. 2008
                </p>
              </div>
              <div className="w-8 h-px bg-gold/30" />
              <p className="font-serif text-sm italic text-muted/60 leading-relaxed">
                &ldquo;The Sound of Precision Since 2008&rdquo;
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

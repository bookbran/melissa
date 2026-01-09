"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, ChevronRight, ChevronLeft, Sparkles, Zap, Star, ArrowRight, CheckCircle2 } from "lucide-react";

// Available images for About section
const aboutImages = [
  "/melissa-1.jpg",
  "/melissa-2.jpg",
  "/melissa-3.jpg",
  "/melissa-4.jpg",
];

// Placeholder testimonials
const testimonials = [
  {
    quote: "Melissa helped me see what was actually driving results versus what I was doing out of habit. Within 3 months, I had clarity I'd been chasing for years.",
    name: "Sarah Chen",
    title: "Founder, Bloom Digital",
  },
  {
    quote: "She doesn't just give advice and disappear. She stays in it with you. That accountability changed everything for me.",
    name: "Marcus Williams",
    title: "CEO, Evergreen Consulting",
  },
];

type Theme = "bold" | "classic";

// Image Browser Component
function ImageBrowser({ 
  currentIndex, 
  onPrev, 
  onNext, 
  theme,
  total,
}: { 
  currentIndex: number; 
  onPrev: () => void; 
  onNext: () => void;
  theme: Theme;
  total: number;
}) {
  const isBold = theme === "bold";
  
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
      <button
        onClick={onPrev}
        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
        style={{ 
          background: isBold ? "#C4F129" : "#E8A535",
          color: isBold ? "#3A0CA3" : "#6B21A8",
        }}
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <span 
        className="text-sm font-medium px-3 py-1 rounded-full"
        style={{ 
          background: "rgba(255,255,255,0.9)",
          color: isBold ? "#3A0CA3" : "#6B21A8",
        }}
      >
        {currentIndex + 1} / {total}
      </span>
      <button
        onClick={onNext}
        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
        style={{ 
          background: isBold ? "#C4F129" : "#E8A535",
          color: isBold ? "#3A0CA3" : "#6B21A8",
        }}
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<Theme>("bold");
  const [aboutImageIndex, setAboutImageIndex] = useState(0);

  const toggleTheme = () => {
    setTheme(theme === "bold" ? "classic" : "bold");
  };

  const nextAboutImage = () => setAboutImageIndex((prev) => (prev + 1) % aboutImages.length);
  const prevAboutImage = () => setAboutImageIndex((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);

  // Theme-specific styles
  const styles = {
    bold: {
      primary: "#FFBE0B",
      primaryDark: "#E5AB0A",
      secondary: "#F72585",
      accent: "#7209B7",
      lime: "#C4F129",
      heading: "#3A0CA3",
      cream: "#FFFBF5",
      softGold: "#FFF3C7",
      blush: "#FFE5F1",
      mint: "#EDFFD9",
      charcoal: "#2D2A32",
      heroGradient: "linear-gradient(135deg, #FFBE0B 0%, #F72585 50%, #7209B7 100%)",
      ctaGradient: "linear-gradient(90deg, #F72585 0%, #7209B7 100%)",
      freshGradient: "linear-gradient(135deg, #C4F129 0%, #FFBE0B 100%)",
    },
    classic: {
      primary: "#E8A535",
      primaryDark: "#D4942A",
      secondary: "#D64672",
      accent: "#6B21A8",
      lime: "#F5ECD7",
      heading: "#6B21A8",
      cream: "#FBF8F3",
      softGold: "#F5ECD7",
      blush: "#F7E4E8",
      mint: "#F5ECD7",
      charcoal: "#2D2A32",
      heroGradient: "none",
      ctaGradient: "none",
      freshGradient: "none",
    },
  };

  const t = styles[theme];
  const isBold = theme === "bold";

  return (
    <div className="min-h-screen" style={{ background: t.cream }}>
      {/* HEADER - Sticky */}
      <header 
        className="sticky top-0 z-50 border-b"
        style={{ 
          background: t.cream,
          borderColor: `${t.charcoal}15`
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            className="font-[family-name:var(--font-fraunces)] text-xl font-semibold hover:opacity-80 transition-opacity duration-200"
            style={{ color: t.heading }}
          >
            Melissa Cikara
          </a>
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300"
              style={{ 
                background: isBold ? t.lime : t.softGold,
                color: t.heading,
              }}
            >
              <Sparkles className="w-4 h-4" />
              {isBold ? "Bold Joy" : "Classic"}
            </button>
            
            <a
              href="#book"
              className="font-[family-name:var(--font-dm-sans)] font-medium px-5 py-2.5 rounded-lg transition-all duration-200"
              style={{ 
                background: isBold ? t.ctaGradient : t.primary,
                backgroundImage: isBold ? t.ctaGradient : "none",
                color: isBold ? "#fff" : t.heading,
              }}
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION - Full Bleed Illustration */}
        <section className="relative overflow-hidden">
          {/* Hero Illustration - Edge to Edge */}
          <div className="relative w-screen -ml-[calc((100vw-100%)/2)]">
            {/* The illustration - full bleed */}
            <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
              <Image
                src="/hero-illustration.png"
                alt="Ideas converging into clarity - colorful abstract shapes representing the journey from chaos to focused execution"
                fill
                className="object-cover object-center"
                priority
              />
              
              {/* Subtle gradient overlay for text readability */}
              <div 
                className="absolute inset-0"
                style={{
                  background: isBold 
                    ? "radial-gradient(ellipse at center, rgba(255,251,245,0.85) 0%, rgba(255,251,245,0.4) 50%, rgba(255,251,245,0) 80%)"
                    : "radial-gradient(ellipse at center, rgba(251,248,243,0.9) 0%, rgba(251,248,243,0.5) 50%, rgba(251,248,243,0) 80%)"
                }}
              />
            </div>
            
            {/* Text Overlay - Centered with enhanced visibility */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4 max-w-[900px]">
                <h1 className="font-[family-name:var(--font-fraunces)] text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
                  <span 
                    style={{ 
                      color: t.heading,
                      textShadow: isBold 
                        ? "0 2px 10px rgba(255,255,255,0.9), 0 0 40px rgba(255,251,245,0.8)"
                        : "0 2px 8px rgba(255,255,255,0.8)",
                    }}
                  >
                    Stop doing everything.
                  </span>
                  <br />
                  {isBold ? (
                    <span 
                      style={{ 
                        background: t.heroGradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        filter: "drop-shadow(0 2px 10px rgba(255,190,11,0.5)) drop-shadow(0 0 30px rgba(247,37,133,0.3))",
                      }}
                    >
                      Start doing what matters.
                    </span>
                  ) : (
                    <span 
                      style={{ 
                        color: t.primary,
                        textShadow: "0 2px 8px rgba(255,255,255,0.8)",
                      }}
                    >
                      Start doing what matters.
                    </span>
                  )}
                </h1>
                <p 
                  className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-10 max-w-[650px] mx-auto font-medium"
                  style={{ 
                    color: t.charcoal,
                    textShadow: "0 1px 8px rgba(255,255,255,0.9), 0 0 20px rgba(255,251,245,0.9)",
                  }}
                >
                  I help established entrepreneurs separate what&apos;s actually moving their business forward from everything else—and then I stay in it with you to make sure it gets done.
                </p>
                <a
                  href="#book"
                  className="inline-flex items-center gap-2 font-[family-name:var(--font-dm-sans)] font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-200 hover:scale-[1.03] shadow-xl hover:shadow-2xl"
                  style={{ 
                    background: t.primary,
                    color: t.heading,
                    boxShadow: isBold 
                      ? "0 4px 20px rgba(255,190,11,0.5), 0 8px 40px rgba(255,190,11,0.3)"
                      : "0 4px 20px rgba(232,165,53,0.4)",
                  }}
                >
                  Let&apos;s Talk
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* THE PROBLEM SECTION */}
        <section 
          className="py-16 md:py-20 lg:py-24"
          style={{ background: t.softGold }}
        >
          <div className="max-w-[720px] mx-auto px-4 md:px-6 text-center">
            <h2 
              className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-semibold leading-tight mb-6"
              style={{ color: t.heading }}
            >
              You&apos;re doing everything right.
              <br />
              So why does it feel so wrong?
            </h2>
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: t.charcoal }}>
              <p>
                You built a successful business. You have clients, revenue, a team (maybe). On paper, you&apos;ve made it.
              </p>
              <p>
                But you&apos;re exhausted. Your to-do list breeds faster than you can cross things off. Every day is a game of whack-a-mole—urgent thing after urgent thing—and somehow the <em>important</em> stuff never gets touched.
              </p>
              <p className="font-medium" style={{ color: t.secondary }}>
                You don&apos;t need another course. You don&apos;t need another coach who gives you homework.
                <br />
                You need someone in the trenches with you.
              </p>
            </div>
          </div>
        </section>

        {/* THE SOLUTION SECTION */}
        <section className="py-16 md:py-20 lg:py-24" style={{ background: t.cream }}>
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="max-w-[720px] mx-auto text-center mb-12 md:mb-16">
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-semibold leading-tight mb-6">
                <span style={{ color: t.heading }}>Not a VA. Not a coach.</span>
                <br />
                {isBold ? (
                  <span 
                    style={{ 
                      background: t.heroGradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    A strategic partner.
                  </span>
                ) : (
                  <span style={{ color: t.primary }}>A strategic partner.</span>
                )}
              </h2>
              <p className="text-lg" style={{ color: t.charcoal }}>
                I work differently. Here&apos;s how I compare to what you might have tried before:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {/* VA Card */}
              <div 
                className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  background: "#fff",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: t.blush }}
                >
                  <CheckCircle2 className="w-6 h-6" style={{ color: t.secondary }} />
                </div>
                <h3 
                  className="font-[family-name:var(--font-fraunces)] text-xl font-medium mb-3"
                  style={{ color: t.heading }}
                >
                  Virtual Assistant
                </h3>
                <p style={{ color: t.charcoal }}>
                  Executes tasks you assign. Great for checking boxes, but they need <em>you</em> to decide what goes on the list.
                </p>
              </div>

              {/* Coach Card */}
              <div 
                className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  background: "#fff",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: isBold ? t.mint : t.blush }}
                >
                  <Star className="w-6 h-6" style={{ color: isBold ? t.accent : t.secondary }} />
                </div>
                <h3 
                  className="font-[family-name:var(--font-fraunces)] text-xl font-medium mb-3"
                  style={{ color: t.heading }}
                >
                  Business Coach
                </h3>
                <p style={{ color: t.charcoal }}>
                  Gives you clarity and frameworks. Helps you think. But then you&apos;re on your own to implement.
                </p>
              </div>

              {/* Me Card - Featured */}
              <div 
                className="rounded-2xl p-8 border-2 transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  background: isBold ? t.softGold : t.softGold,
                  borderColor: isBold ? t.lime : t.primary,
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: isBold ? t.lime : t.primary }}
                >
                  <Zap className="w-6 h-6" style={{ color: t.heading }} />
                </div>
                <h3 
                  className="font-[family-name:var(--font-fraunces)] text-xl font-medium mb-3"
                  style={{ color: t.heading }}
                >
                  Strategic Partner (Me)
                </h3>
                <p style={{ color: t.charcoal }}>
                  I help you see what matters, build the plan, <strong>and stay in it with you</strong> to make sure it actually happens.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR SECTION */}
        <section 
          className="py-16 md:py-20 lg:py-24"
          style={{ background: t.blush }}
        >
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* This IS for you */}
              <div>
                <h2 
                  className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-semibold leading-tight mb-6"
                  style={{ color: t.heading }}
                >
                  This is for you if...
                </h2>
                <ul className="space-y-4">
                  {[
                    "You've built a real business (not a side hustle)",
                    "You're drowning in operational chaos",
                    "You know what you should be doing—you just can't seem to get to it",
                    "You want a partner, not a guru",
                    "You're ready to invest in meaningful change",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div 
                        className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                        style={{ background: isBold ? t.lime : t.primary }}
                      >
                        <CheckCircle2 className="w-4 h-4" style={{ color: t.heading }} />
                      </div>
                      <span className="text-lg" style={{ color: t.charcoal }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* This is NOT for you */}
              <div>
                <h2 
                  className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-semibold leading-tight mb-6"
                  style={{ color: t.secondary }}
                >
                  This is NOT for you if...
                </h2>
                <ul className="space-y-4">
                  {[
                    "You're looking for someone to just do tasks",
                    "You want a quick fix or magic bullet",
                    "You're not willing to make real changes",
                    "You need someone to tell you what to think",
                    "You're at the very beginning of your business journey",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div 
                        className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                        style={{ background: `${t.secondary}25` }}
                      >
                        <span className="text-sm font-bold" style={{ color: t.secondary }}>✕</span>
                      </div>
                      <span className="text-lg" style={{ color: t.charcoal }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT MELISSA SECTION */}
        <section className="py-16 md:py-20 lg:py-24" style={{ background: t.cream }}>
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* ABOUT IMAGE with colorful border for Bold Joy */}
              <div>
                <div className="relative">
                  {/* Colorful border effect for Bold Joy */}
                  {isBold && (
                    <div 
                      className="absolute -inset-2 rounded-[28px] opacity-60 blur-sm"
                      style={{ background: `linear-gradient(180deg, ${t.lime} 0%, ${t.secondary} 50%, ${t.accent} 100%)` }}
                    />
                  )}
                  
                  {/* Image container */}
                  <div 
                    className="relative aspect-[3/4] rounded-3xl overflow-hidden"
                    style={{ 
                      boxShadow: isBold 
                        ? "0 0 0 4px rgba(255,255,255,0.8), 0 20px 60px rgba(247, 37, 133, 0.25)"
                        : "0 20px 60px rgba(0,0,0,0.15)",
                    }}
          >
            <Image
                      src={aboutImages[aboutImageIndex]}
                      alt="Melissa Cikara"
                      fill
                      className="object-cover"
                    />
                    
                    {/* Image browser overlay */}
                    <ImageBrowser
                      currentIndex={aboutImageIndex}
                      onPrev={prevAboutImage}
                      onNext={nextAboutImage}
                      theme={theme}
                      total={aboutImages.length}
                    />
                  </div>
                  
                  {/* Decorative accent shapes for Bold Joy */}
                  {isBold && (
                    <>
                      <div 
                        className="absolute -top-3 -left-3 w-10 h-10 rounded-xl -rotate-12"
                        style={{ background: t.primary }}
                      />
                      <div 
                        className="absolute -bottom-4 -right-4 w-14 h-14 rounded-2xl rotate-12"
                        style={{ background: t.lime }}
                      />
                    </>
                  )}
                </div>
              </div>
              
              <div>
                <h2 
                  className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-semibold leading-tight mb-6"
                  style={{ color: t.heading }}
                >
                  Hi, I&apos;m Melissa.
                </h2>
                <div className="space-y-4 text-lg leading-relaxed" style={{ color: t.charcoal }}>
                  <p>
                    For 20 years, I&apos;ve been the person behind the scenes making things run. I&apos;ve been the operations brain, the strategic thinker, the &quot;how do we actually do this?&quot; person.
                  </p>
                  <p>
                    I&apos;ve worked with entrepreneurs, executives, and creative leaders who are brilliant at what they do—but stretched too thin to do it well.
                  </p>
                  <p>
                    My philosophy is simple:{" "}
                    <span className="font-semibold" style={{ color: t.secondary }}>Big Joy</span>. 
                    Life&apos;s too short to build a business that exhausts you. We&apos;re going to find what lights you up, clear out what doesn&apos;t, and build systems that let you actually enjoy the thing you created.
                  </p>
                  <p className="font-medium">
                    I don&apos;t just help you get clear—I stay in it with you and make sure it actually gets done.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section 
          className="py-16 md:py-20 lg:py-24"
          style={{ background: isBold ? t.mint : t.softGold }}
        >
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 
                className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-semibold leading-tight mb-4"
                style={{ color: t.heading }}
              >
                How It Works
              </h2>
              <p className="text-lg max-w-[560px] mx-auto" style={{ color: t.charcoal }}>
                Simple. No 47-step frameworks or confusing processes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {/* Step 1 */}
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  style={{ background: t.primary }}
                >
                  <span 
                    className="font-[family-name:var(--font-fraunces)] text-2xl font-bold"
                    style={{ color: t.heading }}
                  >
                    1
                  </span>
                </div>
                <h3 
                  className="font-[family-name:var(--font-fraunces)] text-xl font-medium mb-3"
                  style={{ color: t.heading }}
                >
                  Discovery Call
                </h3>
                <p style={{ color: t.charcoal }}>
                  We talk. I listen. We figure out if we&apos;re a fit and what you actually need (not what you think you need).
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  style={{ background: t.secondary }}
                >
                  <span className="font-[family-name:var(--font-fraunces)] text-white text-2xl font-bold">2</span>
                </div>
                <h3 
                  className="font-[family-name:var(--font-fraunces)] text-xl font-medium mb-3"
                  style={{ color: t.heading }}
                >
                  Custom Proposal
                </h3>
                <p style={{ color: t.charcoal }}>
                  I create a plan tailored to you—your business, your chaos, your goals. No cookie-cutter packages.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  style={{ background: t.accent }}
                >
                  <span className="font-[family-name:var(--font-fraunces)] text-white text-2xl font-bold">3</span>
                </div>
                <h3 
                  className="font-[family-name:var(--font-fraunces)] text-xl font-medium mb-3"
                  style={{ color: t.heading }}
                >
                  Partnership Begins
                </h3>
                <p style={{ color: t.charcoal }}>
                  We work together—ongoing. Not a one-and-done. I&apos;m in your corner, keeping things moving, keeping you sane.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="#book"
                className="inline-flex items-center gap-2 font-[family-name:var(--font-dm-sans)] font-medium text-lg px-6 py-3 rounded-lg border-2 transition-all duration-200 hover:scale-[1.02]"
                style={{ 
                  borderColor: t.secondary,
                  color: t.secondary,
                  background: "transparent",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = `${t.secondary}15`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Start with a Discovery Call
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        {testimonials.length > 0 && (
          <section className="py-16 md:py-20 lg:py-24" style={{ background: t.cream }}>
            <div className="max-w-[1200px] mx-auto px-4 md:px-6">
              <div className="text-center mb-12 md:mb-16">
                <h2 
                  className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-semibold leading-tight"
                  style={{ color: t.heading }}
                >
                  What Clients Say
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="rounded-2xl p-8"
                    style={{ 
                      background: t.softGold,
                      boxShadow: "var(--shadow-card)",
                    }}
                  >
                    {isBold && (
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                        style={{ background: t.lime }}
                      >
                        <span className="text-lg" style={{ color: t.heading }}>&ldquo;</span>
                      </div>
                    )}
                    <blockquote 
                      className="text-lg leading-relaxed mb-6 italic"
                      style={{ color: t.charcoal }}
                    >
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                    <div>
                      <p 
                        className="font-[family-name:var(--font-fraunces)] font-medium"
                        style={{ color: t.heading }}
                      >
                        {testimonial.name}
                      </p>
                      <p className="text-sm" style={{ color: `${t.charcoal}99` }}>{testimonial.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FINAL CTA SECTION WITH CALENDLY */}
        <section 
          id="book" 
          className="py-16 md:py-20 lg:py-24 relative overflow-hidden"
          style={{ 
            background: isBold ? t.ctaGradient : t.accent,
            backgroundImage: isBold ? t.ctaGradient : "none",
          }}
        >
          {/* Decorative elements for Bold theme */}
          {isBold && (
            <>
              <div 
                className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-20 blur-2xl"
                style={{ background: t.lime }}
              />
              <div 
                className="absolute bottom-10 right-10 w-40 h-40 rounded-full opacity-15 blur-3xl"
                style={{ background: t.primary }}
              />
            </>
          )}
          
          <div className="relative max-w-[720px] mx-auto px-4 md:px-6 text-center">
            <h2 className="font-[family-name:var(--font-fraunces)] text-white text-3xl md:text-4xl font-semibold leading-tight mb-6">
              Ready to stop spinning your wheels?
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-10">
              Let&apos;s have a conversation. No pitch, no pressure. Just two people talking about whether working together makes sense.
            </p>

            {/* Calendly Embed Placeholder */}
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="flex flex-col items-center">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: isBold ? t.lime : t.primary }}
                >
                  <Calendar className="w-8 h-8" style={{ color: t.heading }} />
                </div>
                <h3 
                  className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold mb-4"
                  style={{ color: t.heading }}
                >
                  Book a Discovery Call
                </h3>
                <p className="mb-6 max-w-[400px]" style={{ color: `${t.charcoal}99` }}>
                  This is where the Calendly embed will go. Replace this with your Calendly inline embed widget.
                </p>
                
                <a
                  href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-[family-name:var(--font-dm-sans)] font-medium text-lg px-7 py-3.5 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                  style={{ 
                    background: isBold ? t.ctaGradient : t.primary,
                    backgroundImage: isBold ? t.ctaGradient : "none",
                    color: isBold ? "#fff" : t.heading,
                  }}
                >
                  Schedule on Calendly
                  <ArrowRight className="w-5 h-5" />
                </a>
                
                <p className="text-sm mt-4" style={{ color: `${t.charcoal}70` }}>
                  Or email directly:{" "}
                  <a 
                    href="mailto:hello@melissacikara.com" 
                    className="underline"
                    style={{ color: t.heading }}
                  >
                    hello@melissacikara.com
                  </a>
                </p>
              </div>
            </div>
        </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-8" style={{ background: t.charcoal }}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Melissa Cikara. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

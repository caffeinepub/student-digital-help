import { Badge } from "@/components/ui/badge";

import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  FileText,
  GraduationCap,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Presentation,
  Sparkles,
  Star,
  UserCheck,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: FileText,
    title: "Project Reports & Dissertations",
    description:
      "Professional formatting, proper headings, margins, referencing styles (APA/MLA/Chicago), and MS Word structuring.",
    price: "₹500 – ₹1,500",
    color: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  },
  {
    icon: Presentation,
    title: "PowerPoint Presentations",
    description:
      "Eye-catching slides with clean layouts, visuals, and professional design for seminars, vivas, and college presentations.",
    price: "₹200 – ₹800",
    color: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-600",
    iconBg: "bg-violet-50",
  },
  {
    icon: BookOpen,
    title: "Assignment Typing",
    description:
      "Neat, accurately typed assignments from handwritten notes. Clean formatting for college submissions.",
    price: "₹20 – ₹40/page",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
  },
  {
    icon: UserCheck,
    title: "Resume & CV Creation",
    description:
      "Standout resumes crafted for freshers and experienced candidates — tailored for placements and internships.",
    price: "₹100 – ₹300",
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
  },
];

const PRICING = [
  {
    title: "Project Report Formatting",
    price: "₹500",
    priceSuffix: "– ₹1,500",
    note: "Based on length & complexity",
    features: [
      "MS Word professional formatting",
      "Proper headings & margins",
      "APA / MLA referencing",
      "Table of contents included",
      "Up to 3 revisions",
    ],
    highlight: true,
    badge: "Most Popular",
  },
  {
    title: "PowerPoint Presentation",
    price: "₹200",
    priceSuffix: "– ₹800",
    note: "Based on number of slides",
    features: [
      "Clean, modern slide design",
      "Custom color themes",
      "Icons & visuals included",
      "Speaker notes on request",
      "Editable PPTX format",
    ],
    highlight: false,
    badge: "",
  },
  {
    title: "Assignment Typing",
    price: "₹20",
    priceSuffix: "– ₹40/page",
    note: "Per page, based on content",
    features: [
      "Accurate typed content",
      "Proper paragraph formatting",
      "MS Word / PDF delivery",
      "Fast 24-hr turnaround",
      "Any subject accepted",
    ],
    highlight: false,
    badge: "Best Value",
  },
  {
    title: "Resume / CV",
    price: "₹100",
    priceSuffix: "– ₹300",
    note: "Freshers & experienced formats",
    features: [
      "ATS-friendly templates",
      "Custom skills section",
      "Education & project layout",
      "PDF & Word formats",
      "1 free revision",
    ],
    highlight: false,
    badge: "",
  },
];

const WHATSAPP_URL =
  "https://wa.me/917078181630?text=Hi%2C%20I%20need%20help%20with%20my%20academic%20work";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const _fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-body">
      {/* ── Sticky Navbar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/96 backdrop-blur-lg shadow-navy-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-sm">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-extrabold text-base sm:text-lg text-foreground leading-tight">
              Student <span className="gradient-text">Digital Help</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link, i) => (
              <button
                type="button"
                key={link.href}
                data-ocid={`nav.link.${i + 1}`}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground nav-link-hover transition-colors rounded-lg"
              >
                {link.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2 text-sm font-semibold rounded-xl whatsapp-btn transition-all flex items-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-border overflow-hidden shadow-navy-md"
            >
              <nav className="flex flex-col p-4 gap-1">
                {NAV_LINKS.map((link, i) => (
                  <button
                    type="button"
                    key={link.href}
                    data-ocid={`nav.link.${i + 1}`}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-4 py-3 text-sm font-semibold rounded-xl whatsapp-btn transition-all flex items-center gap-2 justify-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* ── Hero ── */}
        <section
          id="home"
          data-ocid="hero.section"
          className="hero-bg min-h-screen flex items-center pt-16 relative overflow-hidden"
        >
          {/* Decorative shapes */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Large blurred circle top-right */}
            <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[oklch(0.72_0.18_65/0.08)] blur-3xl" />
            {/* Bottom left glow */}
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[oklch(0.35_0.12_255/0.3)] blur-3xl" />
            {/* Subtle grid lines */}
            <svg
              aria-hidden="true"
              className="absolute inset-0 w-full h-full opacity-[0.04]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid"
                  width="48"
                  height="48"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 48 0 L 0 0 0 48"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: text */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 text-xs font-semibold tracking-wide mb-6 backdrop-blur-sm">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    Dehradun, Uttarakhand, India
                  </span>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6"
                >
                  Get Your Academic
                  <br />
                  Work Done <span className="gradient-text">Right.</span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-white/65 leading-relaxed mb-10 max-w-md"
                >
                  Project reports, dissertations, presentations, assignments —
                  delivered professionally and affordably for students in
                  Dehradun.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="hero.primary_button"
                    className="inline-flex items-center justify-center gap-2.5 px-7 h-13 py-3.5 text-base font-bold rounded-2xl whatsapp-btn transition-all shadow-lg shadow-green-900/30"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                  <button
                    type="button"
                    data-ocid="hero.secondary_button"
                    onClick={() => handleNavClick("#services")}
                    className="inline-flex items-center justify-center gap-2 px-7 h-13 py-3.5 text-base font-semibold rounded-2xl border border-white/20 bg-white/8 text-white hover:bg-white/14 hover:border-white/30 transition-all backdrop-blur-sm"
                  >
                    View Services
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="mt-10 flex flex-wrap gap-5"
                >
                  {[
                    { icon: Zap, label: "Fast Delivery" },
                    { icon: Star, label: "Student Trusted" },
                    { icon: Sparkles, label: "Affordable Prices" },
                  ].map(({ icon: Icon, label }) => (
                    <span
                      key={label}
                      className="flex items-center gap-2 text-sm text-white/55"
                    >
                      <Icon className="w-4 h-4 text-accent" />
                      {label}
                    </span>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right: floating card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="hidden lg:flex justify-center items-center"
              >
                <div className="relative">
                  {/* Main card */}
                  <div className="w-72 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 p-6 shadow-2xl">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm font-display">
                          Student Digital Help
                        </p>
                        <p className="text-white/50 text-xs">
                          Academic Services
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {SERVICES.map((s) => (
                        <div
                          key={s.title}
                          className="flex items-center justify-between py-2 border-b border-white/8 last:border-0"
                        >
                          <span className="text-white/70 text-xs">
                            {s.title}
                          </span>
                          <span className="text-accent text-xs font-bold">
                            {s.price}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 pt-4 border-t border-white/10">
                      <p className="text-white/40 text-xs text-center">
                        WhatsApp: 7078181630
                      </p>
                    </div>
                  </div>
                  {/* Floating badge */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-4 -right-6 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold shadow-lg"
                  >
                    ✓ Quick Delivery
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{
                      duration: 3.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute -bottom-4 -left-6 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-medium backdrop-blur-sm"
                  >
                    ₹20/page onwards
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* ── Services ── */}
        <section
          id="services"
          data-ocid="services.section"
          className="py-24 sm:py-32 bg-background relative"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="mb-14 text-center">
                <Badge className="mb-4 bg-primary/10 text-primary border-0 font-semibold text-xs px-3 py-1 uppercase tracking-widest">
                  What We Offer
                </Badge>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-foreground tracking-tight">
                  Services Built for Students
                </h2>
                <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
                  Everything a college student needs — formatted, designed, and
                  delivered fast.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {SERVICES.map((service, i) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.title}
                      variants={itemVariants}
                      data-ocid={`services.item.${i + 1}`}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    >
                      <div className="h-full rounded-3xl bg-white border border-border navy-shadow p-6 flex flex-col gap-4 hover:border-primary/20 hover:navy-shadow-lg transition-all duration-300 group">
                        <div
                          className={`w-12 h-12 rounded-2xl ${service.iconBg} flex items-center justify-center`}
                        >
                          <Icon className={`w-6 h-6 ${service.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display font-bold text-base text-foreground leading-snug mb-2">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-border">
                          <span className="font-display font-bold text-primary text-sm">
                            {service.price}
                          </span>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section
          id="pricing"
          data-ocid="pricing.section"
          className="py-24 sm:py-32 relative overflow-hidden"
          style={{ background: "oklch(0.96 0.008 255)" }}
        >
          {/* Background blob */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[oklch(0.72_0.18_65/0.06)] blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[oklch(0.25_0.08_255/0.05)] blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="mb-14 text-center">
                <Badge className="mb-4 bg-accent/10 text-amber-700 border-0 font-semibold text-xs px-3 py-1 uppercase tracking-widest">
                  Transparent Rates
                </Badge>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-foreground tracking-tight">
                  Simple &amp; Affordable Pricing
                </h2>
                <p className="mt-4 text-muted-foreground text-lg">
                  No hidden charges. Pay only for what you need.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRICING.map((item, i) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    data-ocid={`pricing.item.${i + 1}`}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="relative"
                  >
                    {item.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            item.highlight
                              ? "bg-accent text-accent-foreground"
                              : "bg-primary text-white"
                          }`}
                        >
                          {item.badge}
                        </span>
                      </div>
                    )}
                    <div
                      className={`h-full rounded-3xl p-6 flex flex-col transition-all duration-300 ${
                        item.highlight
                          ? "bg-primary text-white shadow-navy-lg"
                          : "bg-white border border-border navy-shadow hover:border-primary/20"
                      }`}
                    >
                      <h3
                        className={`font-display font-bold text-sm leading-snug mb-4 ${
                          item.highlight ? "text-white/90" : "text-foreground"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <div className="mb-1">
                        <span
                          className={`font-display font-extrabold text-3xl ${
                            item.highlight ? "text-accent" : "text-primary"
                          }`}
                        >
                          {item.price}
                        </span>
                        <span
                          className={`text-sm ml-1 ${
                            item.highlight
                              ? "text-white/60"
                              : "text-muted-foreground"
                          }`}
                        >
                          {item.priceSuffix}
                        </span>
                      </div>
                      <p
                        className={`text-xs mb-5 ${
                          item.highlight
                            ? "text-white/50"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item.note}
                      </p>
                      <ul className="space-y-2.5 flex-1">
                        {item.features.map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <CheckCircle2
                              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                item.highlight ? "text-accent" : "text-primary"
                              }`}
                            />
                            <span
                              className={`text-xs leading-snug ${
                                item.highlight
                                  ? "text-white/75"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {f}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold transition-all ${
                          item.highlight
                            ? "bg-accent text-accent-foreground hover:bg-accent/90"
                            : "bg-primary/5 text-primary border border-primary/20 hover:bg-primary hover:text-white"
                        }`}
                      >
                        Get Started
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── About ── */}
        <section
          id="about"
          data-ocid="about.section"
          className="py-24 sm:py-32 bg-background"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              {/* Left: text */}
              <motion.div variants={itemVariants}>
                <Badge className="mb-4 bg-primary/10 text-primary border-0 font-semibold text-xs px-3 py-1 uppercase tracking-widest">
                  Who We Are
                </Badge>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-foreground tracking-tight mb-6">
                  Helping Students
                  <br />
                  <span className="navy-gradient-text">Succeed Faster</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  We are a student-focused digital service based in{" "}
                  <span className="text-foreground font-semibold">
                    Dehradun, Uttarakhand
                  </span>
                  . Our goal: help college students create professional-quality
                  reports, presentations, and documents — quickly and at prices
                  that fit a student's budget.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Tight deadline? Need expert formatting help? We're here for
                  you. No stress, no hassle — just clean, professional work
                  delivered on time.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    "Affordable",
                    "Fast Delivery",
                    "Quality Work",
                    "Student Friendly",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-full bg-primary/8 text-primary text-sm font-medium border border-primary/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-2xl whatsapp-btn transition-all shadow-md shadow-green-900/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  Talk to Us
                </a>
              </motion.div>

              {/* Right: stat grid */}
              <motion.div variants={itemVariants}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      value: "100+",
                      label: "Students Helped",
                      icon: GraduationCap,
                    },
                    { value: "4.9★", label: "Satisfaction Rate", icon: Star },
                    { value: "48hr", label: "Avg Turnaround", icon: Zap },
                    { value: "₹20", label: "Starting / Page", icon: Sparkles },
                  ].map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className="p-6 rounded-3xl bg-white border border-border navy-shadow flex flex-col gap-3"
                      >
                        <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-display font-extrabold text-3xl text-foreground">
                            {stat.value}
                          </p>
                          <p className="text-sm text-muted-foreground mt-0.5">
                            {stat.label}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* Location badge */}
                <div className="mt-4 flex items-center gap-3 p-4 rounded-2xl bg-primary text-white">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Serving Students In</p>
                    <p className="text-white/70 text-xs">
                      Dehradun, Uttarakhand, India
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section
          id="contact"
          data-ocid="contact.section"
          className="contact-bg py-24 sm:py-32 relative overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute inset-0 pointer-events-none">
            <svg
              aria-hidden="true"
              className="absolute inset-0 w-full h-full opacity-[0.03]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid2"
                  width="48"
                  height="48"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 48 0 L 0 0 0 48"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid2)" />
            </svg>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs font-semibold tracking-widest mb-6">
                  Get In Touch
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-4"
              >
                Ready to Get
                <br />
                <span className="gradient-text">Started?</span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-white/55 text-lg max-w-md mx-auto mb-12"
              >
                Fast delivery. Affordable prices. Message us right now on
                WhatsApp.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.primary_button"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold rounded-2xl whatsapp-btn transition-all shadow-xl shadow-green-900/30"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:7078181630"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  <Phone className="w-4 h-4" />
                  7078181630
                </a>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-6"
              >
                {[
                  { icon: Zap, label: "Fast Delivery" },
                  { icon: Star, label: "Quality Guaranteed" },
                  { icon: MapPin, label: "Dehradun, India" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-white/40 text-sm"
                  >
                    <Icon className="w-4 h-4 text-accent" />
                    {label}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="footer-bg text-white/50 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-accent" />
              </div>
              <span className="font-display font-bold text-sm text-white/80">
                Student Digital Help
              </span>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} Student Digital Help — Dehradun,
              Uttarakhand
            </p>
            <p className="text-sm">
              Built with ♥ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors underline underline-offset-2"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

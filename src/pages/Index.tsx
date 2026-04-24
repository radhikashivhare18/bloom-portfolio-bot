import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react";
import safespaceImg from "@/assets/project-safespace.jpg";
import { TiltCard } from "@/components/TiltCard";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

const Nav = () => (
  <header className="fixed top-0 left-0 right-0 z-50 glass shadow-soft">
    <nav className="container flex items-center justify-between py-4">
      <a href="#home" className="font-display text-xl font-medium tracking-tight">
        Radhika<span className="text-peach">.</span>
      </a>
      <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        {["About", "Skills", "Projects", "Achievements", "Contact"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="underline-grow hover:text-foreground transition-colors">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="mailto:radhikaa031818@gmail.com"
        className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2 text-sm hover:bg-peach hover:-translate-y-0.5 hover:shadow-lift transition-all duration-300"
      >
        Say hello
      </a>
    </nav>
  </header>
);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const portraitRotate = useTransform(scrollYProgress, [0, 1], [0, -3]);
  const chipY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen pt-32 pb-20 bg-gradient-hero overflow-hidden grain">
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute -top-20 -right-20 h-[420px] w-[420px] rounded-full bg-sage-light/40 blur-3xl"
        aria-hidden
      />
      <motion.div
        style={{ y: chipY }}
        className="pointer-events-none absolute bottom-10 -left-24 h-[360px] w-[360px] rounded-full bg-peach/20 blur-3xl"
        aria-hidden
      />

      <div className="container relative grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="lg:col-span-7"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8 shadow-soft">
            <Sparkles className="h-3 w-3 text-peach" />
            Available for collaborations
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] font-light text-balance">
            Building <em className="text-peach not-italic font-normal">calm</em>
            <br />
            into the web,
            <br />
            one line at a time.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground font-medium">Radhika Shivhare</span> — a first-year CSE student at Amity University, learning to code in C/C++ and dreaming up a mental health startup that helps students breathe a little easier.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium shadow-3d hover:shadow-lift hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
            >
              See my work
              <ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-2 py-3.5 text-sm underline-grow"
            >
              More about me
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-16 flex items-center gap-6 text-muted-foreground">
            <a href="https://github.com/radhikashivhare18" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-foreground hover:-translate-y-0.5 transition-all">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/radhika-shivhare-92a7653a9" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-foreground hover:-translate-y-0.5 transition-all">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:radhikaa031818@gmail.com" aria-label="Email" className="hover:text-foreground hover:-translate-y-0.5 transition-all">
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: easeOut, delay: 0.2 }}
          style={{ y: portraitY, rotate: portraitRotate }}
          className="lg:col-span-5 relative"
        >
          <TiltCard max={8} lift={4} className="rounded-[2rem]">
            <div className="absolute -inset-6 rounded-[2rem] bg-sage-light/40 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 glass p-8 md:p-10 shadow-3d animate-float min-h-[420px] flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Portfolio</p>
                <h2 className="font-display text-5xl md:text-6xl font-light leading-[0.95]">
                  Radhika<br />Shivhare
                </h2>
              </div>
              <div className="space-y-5">
                <p className="inline-flex rounded-full bg-secondary/60 px-4 py-2 text-sm text-secondary-foreground">
                  First-year CSE student
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Learning C & C++, building toward web development, and shaping mental-health tech for students.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4 shadow-lift hidden sm:block animate-float" style={{ animationDelay: "1.5s" }}>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Currently</p>
              <p className="font-display text-lg">Learning C++ → Web</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-peach text-accent-foreground rounded-full px-4 py-2 text-xs font-medium shadow-glow rotate-6 hidden sm:block animate-float" style={{ animationDelay: "0.8s" }}>
              B.Tech '29
            </div>
          </TiltCard>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="mt-24 border-y border-border/60 glass overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-5 font-display text-2xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 pr-12 text-muted-foreground">
              <span>Mental Health Tech</span>
              <span className="text-peach">✦</span>
              <span>Student Builder</span>
              <span className="text-peach">✦</span>
              <span>SafeSpace Founder</span>
              <span className="text-peach">✦</span>
              <span>SIH Finalist</span>
              <span className="text-peach">✦</span>
              <span>Painter & Coder</span>
              <span className="text-peach">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-32 container">
    <div className="grid lg:grid-cols-12 gap-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-4"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">01 — About</p>
        <h2 className="font-display text-5xl md:text-6xl font-light leading-tight">
          A student with <em className="text-peach not-italic">soft hands</em> and a curious mind.
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed"
      >
        <p>
          I'm in my first year of <span className="text-foreground">B.Tech Computer Science Engineering</span> at Amity University Madhya Pradesh, Gwalior. My days are split between writing my first lines of C++ and sketching out ideas for products that matter.
        </p>
        <p>
          When I'm not coding, you'll find me painting, shaping clay, or thinking about how technology can hold space for people who are struggling. That's the heart of <span className="text-foreground">SafeSpace</span> — my campus mental health platform.
        </p>
        <p>
          I believe great software is built like good art: with patience, intention, and a little bit of soul.
        </p>
        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
          {[
            { num: "2029", label: "B.Tech expected" },
            { num: "Top 5", label: "Ideathon finalist" },
            { num: "01", label: "Startup in motion" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl text-foreground">{stat.num}</p>
              <p className="text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const Skills = () => {
  const groups = [
    { title: "Programming", items: ["C", "C++"] },
    { title: "Tools & Design", items: ["Canva", "Lovable", "AI-assisted no-code"] },
    { title: "Soft Skills", items: ["Teamwork", "Problem-solving", "Hardworking", "Empathy"] },
    { title: "Currently learning", items: ["C & C++", "DSA", "JavaScript", "Web development"] },
  ];
  return (
    <section id="skills" className="py-32 bg-foreground text-background relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-background/60 mb-4">02 — Skills</p>
            <h2 className="font-display text-5xl md:text-7xl font-light leading-[0.95]">
              Tools of the<br /><em className="text-peach not-italic">trade</em> & temperament.
            </h2>
          </div>
          <p className="text-background/70 max-w-sm">
            A beginner's toolkit, growing every week. Honest about where I am, hungry for where I'm going.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <TiltCard max={7} lift={6} className="rounded-2xl">
                <div className="glass-dark rounded-2xl p-8 h-full shadow-3d group">
                  <p className="text-peach text-xs uppercase tracking-widest mb-6">{g.title}</p>
                  <ul className="space-y-3">
                    {g.items.map((item) => (
                      <li key={item} className="font-display text-2xl group-hover:translate-x-1 transition-transform duration-500">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => (
  <section id="projects" className="py-32 container">
    <div className="mb-20">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">03 — Projects</p>
      <h2 className="font-display text-5xl md:text-7xl font-light leading-[0.95] max-w-3xl">
        Things I've made with <em className="text-peach not-italic">care</em>.
      </h2>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9 }}
    >
      <TiltCard as="article" max={4} lift={6} className="rounded-3xl">
        <div className="group grid lg:grid-cols-12 gap-10 items-center glass rounded-3xl p-8 md:p-12 shadow-3d hover:shadow-lift transition-shadow duration-500">
          <div className="lg:col-span-6 relative overflow-hidden rounded-2xl bg-sage-light shadow-soft">
            <img
              src={safespaceImg}
              alt="SafeSpace platform illustration"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground mb-4">
              <span className="h-2 w-2 rounded-full bg-peach animate-pulse" />
              Featured project
              <span>· Top 5 Ideathon</span>
            </div>
            <h3 className="font-display text-4xl md:text-5xl font-light mb-5">
              SafeSpace
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A campus mental health support platform built to give students a quiet place to land. Designed during an ideathon, built with AI-assisted no-code tools, and shaped by genuine care for student well-being.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Buddy Help",
                "Mood Tracker",
                "Private Diary",
                "Venting Wall",
                "Breathing Exercises",
                "Emergency Contacts",
                "Attendance Calculator",
              ].map((f) => (
                <span key={f} className="px-3 py-1.5 rounded-full bg-secondary/50 text-secondary-foreground text-xs hover:-translate-y-0.5 hover:bg-secondary transition-all duration-300">
                  {f}
                </span>
              ))}
            </div>
            <a href="https://github.com/radhikashivhare18" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm underline-grow">
              View on GitHub <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </TiltCard>
    </motion.div>

    <div className="mt-10 grid md:grid-cols-2 gap-6">
      {[
        {
          title: "Smart India Hackathon",
          subtitle: "College-level selection",
          body: "Selected to represent at the SIH college round — sharpening problem statements with my team.",
        },
        {
          title: "Amity Coding Club",
          subtitle: "Technical Team Member",
          body: "Helping organize and run coding events, workshops, and peer-learning sessions on campus.",
        },
      ].map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          <TiltCard max={5} lift={5} className="rounded-3xl h-full">
            <div className="glass rounded-3xl p-8 h-full shadow-3d">
              <p className="text-xs uppercase tracking-widest text-peach mb-3">{p.subtitle}</p>
              <h4 className="font-display text-2xl mb-3">{p.title}</h4>
              <p className="text-muted-foreground">{p.body}</p>
            </div>
          </TiltCard>
        </motion.div>
      ))}
    </div>
  </section>
);

const Achievements = () => {
  const items = [
    {
      year: "2024",
      title: "3rd Place — Smart Idea Submission",
      detail: "For my mental health app concept, an early seed of SafeSpace.",
    },
    {
      year: "2024",
      title: "Top 5 — Ideathon",
      detail: "With a team of 3, pitched and prototyped SafeSpace to a finalist round.",
    },
    {
      year: "2024",
      title: "Selected — Smart India Hackathon (College Level)",
      detail: "Chose a problem statement aligned with student well-being.",
    },
    {
      year: "Now",
      title: "Technical Team — Amity Coding Club",
      detail: "Building community while building skills.",
    },
  ];
  return (
    <section id="achievements" className="py-32 bg-cream-deep/40 grain relative">
      <div className="container">
        <div className="mb-20 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">04 — Achievements</p>
          <h2 className="font-display text-5xl md:text-7xl font-light leading-[0.95]">
            Small wins, <em className="text-peach not-italic">stacked</em>.
          </h2>
        </div>
        <ol className="relative border-l border-border ml-3 space-y-12">
          {items.map((it, i) => (
            <motion.li
              key={it.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="pl-10 relative"
            >
              <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-peach ring-4 ring-background" />
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{it.year}</p>
              <h3 className="font-display text-2xl md:text-3xl mb-2">{it.title}</h3>
              <p className="text-muted-foreground max-w-2xl">{it.detail}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-32 container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9 }}
      className="relative overflow-hidden rounded-[2.5rem] bg-gradient-sage text-primary-foreground p-10 md:p-20 text-center"
    >
      <div className="absolute inset-0 grain opacity-20" aria-hidden />
      <p className="text-xs uppercase tracking-[0.3em] text-background/60 mb-6 relative">05 — Contact</p>
      <h2 className="font-display text-5xl md:text-8xl font-light leading-[0.95] mb-8 relative text-balance">
        Let's build something
        <br />
        <em className="text-peach not-italic">kind</em> together.
      </h2>
      <p className="max-w-xl mx-auto text-background/70 text-lg mb-10 relative">
        Open to internships, collaborations on student & mental health projects, and conversations with fellow beginners.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 relative">
        <a
          href="mailto:radhikaa031818@gmail.com"
          className="inline-flex items-center gap-3 rounded-full bg-peach text-accent-foreground px-8 py-4 text-sm font-medium hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
        >
          <Mail className="h-4 w-4" />
          radhikaa031818@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/radhika-shivhare-92a7653a9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full border border-background/30 px-8 py-4 text-sm hover:bg-background/10 hover:-translate-y-0.5 hover:shadow-lift transition-all duration-300"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href="https://github.com/radhikashivhare18"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full border border-background/30 px-8 py-4 text-sm hover:bg-background/10 hover:-translate-y-0.5 hover:shadow-lift transition-all duration-300"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
      </div>
    </motion.div>
    <footer className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Radhika Shivhare. Made with care.</p>
      <p className="font-display italic">"Soft systems for soft humans."</p>
    </footer>
  </section>
);

const Index = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
};

export default Index;

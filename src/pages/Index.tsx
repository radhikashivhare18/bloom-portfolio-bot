import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react";
import safespaceImg from "@/assets/project-safespace.jpg";
import { TiltCard } from "@/components/TiltCard";

const easeOut = [0.22, 1, 0.36, 1] as const;
const heroProfileImage = null as string | null;
const heroProfileAlt = "Radhika Shivhare profile picture";

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
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Soft background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(260,40%,96%)] via-[hsl(42,38%,95%)] to-[hsl(220,35%,94%)]" />
      
      {/* Subtle floating orbs */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute top-20 right-[15%] h-[300px] w-[300px] rounded-full bg-[hsl(260,50%,88%)]/30 blur-[80px]"
        aria-hidden
      />
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute bottom-32 left-[10%] h-[250px] w-[250px] rounded-full bg-[hsl(210,50%,88%)]/25 blur-[70px]"
        aria-hidden
      />

      <div className="container relative grid lg:grid-cols-12 gap-16 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="lg:col-span-7"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-sm border border-border/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            <Sparkles className="h-3 w-3 text-peach" />
            Available for collaborations
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="font-display text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.92] font-light text-balance">
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
              className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:bg-peach hover:-translate-y-0.5 transition-all duration-300"
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
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-[2rem] bg-gradient-to-br from-[hsl(260,40%,96%)] via-white/80 to-[hsl(220,35%,96%)] p-10 shadow-[0_8px_40px_-12px_hsl(140,22%,24%,0.08)] border border-white/60">
            {/* Name */}
            <div className="text-center mb-8">
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight tracking-wide bg-gradient-to-r from-[hsl(262,50%,72%)] to-[hsl(213,55%,72%)] bg-clip-text text-transparent">
                Radhika<br />Shivhare
              </h2>
            </div>
            
            {/* Profile Image */}
            {heroProfileImage ? (
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[hsl(262,50%,85%)] to-[hsl(213,55%,85%)] opacity-40 blur-sm" />
                  <img
                    src={heroProfileImage}
                    alt={heroProfileAlt}
                    className="relative h-32 w-32 rounded-full object-cover border-2 border-white/80 shadow-[0_4px_20px_-4px_hsl(140,22%,24%,0.1)]"
                  />
                </div>
              </div>
            ) : (
              <div className="flex justify-center mb-8">
                <div className="h-32 w-32 rounded-full bg-gradient-to-br from-[hsl(262,40%,92%)] to-[hsl(213,40%,92%)] flex items-center justify-center border-2 border-white/80 shadow-[0_4px_20px_-4px_hsl(140,22%,24%,0.1)]">
                  <span className="font-display text-3xl text-[hsl(262,30%,65%)]">RS</span>
                </div>
              </div>
            )}
            
            {/* Subtitle & Tagline */}
            <div className="text-center space-y-3">
              <p className="text-sm font-medium tracking-[0.15em] uppercase text-foreground/70">
                Aspiring Web Developer | CSE Student
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Building technology for mental health support and impact
              </p>
            </div>
          </div>
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
const Index = () => (
  <main>
    <Nav />
    <Hero />
  </main>
);

export default Index;

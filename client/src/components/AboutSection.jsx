import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skillRows = [
  { label: "Frontend",  skills: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { label: "Backend",   skills: ["FastAPI", "Gin", "Node.js", "PostgreSQL", "Redis", "Celery", "Docker"] },
  { label: "Languages", skills: ["Python", "Go", "JavaScript", "TypeScript", "Java", "C++", "C"] },
  { label: "AI / ML",   skills: ["Data Pipelines", "RAG", "Pinecone", "Qdrant", "NLP"] },
  { label: "Tools",     skills: ["Git", "Postman", "VS Code", "Linux"] },
];

export default function AboutSection() {
  const sectionRef   = useRef(null);
  const journeyRef   = useRef(null);
  const backgroundRef = useRef(null);
  const skillsRef    = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const journeyScale   = useTransform(scrollYProgress, [0, 0.33, 0.4],    [1, 1, 0.94]);
  const journeyOpacity = useTransform(scrollYProgress, [0, 0.33, 0.4],    [1, 1, 0]);
  const journeyY       = useTransform(scrollYProgress, [0, 0.33, 0.4],    [0, 0, -32]);

  const bgScale        = useTransform(scrollYProgress, [0.3, 0.45, 0.66, 0.73], [0.94, 1, 1, 0.94]);
  const bgOpacity      = useTransform(scrollYProgress, [0.3, 0.45, 0.66, 0.73], [0, 1, 1, 0]);
  const bgY            = useTransform(scrollYProgress, [0.3, 0.45, 0.66, 0.73], [32, 0, 0, -32]);

  const skillsScale    = useTransform(scrollYProgress, [0.63, 0.78, 1],          [0.94, 1, 1]);
  const skillsOpacity  = useTransform(scrollYProgress, [0.63, 0.78, 1],          [0, 1, 1]);
  const skillsY        = useTransform(scrollYProgress, [0.63, 0.78, 1],          [32, 0, 0]);

  return (
    <section id="about" className="about-section-scroll" ref={sectionRef}>
      <div className="about-scroll-container">

        {/* 01 — Journey */}
        <motion.div
          className="about-scroll-item"
          ref={journeyRef}
          style={{ scale: journeyScale, opacity: journeyOpacity, y: journeyY }}
        >
          <div className="about-editorial-panel">
            <span className="about-ghost-number" aria-hidden="true">01</span>
            <div className="about-editorial-header">
              <span className="about-mono-label">Section 01 — Journey</span>
              <div className="about-header-rule" />
            </div>
            <h3 className="about-editorial-title">My Journey</h3>
            <p className="about-editorial-body">
              Hi! 👋 I'm a Computer Science student at the University of British Columbia,
              obsessed with building things that feel alive — tools that remember, learn,
              and make people go "wait, that was smart." I started as a curious kid hacking
              together websites, and now I'm deep into crafting full-stack, AI-powered
              experiences that scale. Every project is a chance to push further into creating
              real value for people.
            </p>
            <p className="about-editorial-emphasis">
              Experimenting. Shipping. Just getting started.
            </p>
          </div>
        </motion.div>

        {/* 02 — Background */}
        <motion.div
          className="about-scroll-item"
          ref={backgroundRef}
          style={{ scale: bgScale, opacity: bgOpacity, y: bgY }}
        >
          <div className="about-editorial-panel about-panel-split">
            <div className="about-split-left">
              <span className="about-ghost-number" aria-hidden="true">02</span>
              <blockquote className="about-pull-quote">
                "Stay curious, stay adaptable, keep creating."
              </blockquote>
            </div>
            <div className="about-split-right">
              <div className="about-editorial-header">
                <span className="about-mono-label">Section 02 — Background</span>
                <div className="about-header-rule" />
              </div>
              <h3 className="about-editorial-title">Background</h3>
              <p className="about-editorial-body">
                Born and raised in Indonesia, now calling Vancouver home. I've grown by
                stepping into many roles — from organizing student communities to building
                and shipping software used in real settings. Being in a fast-paced environment
                surrounded by diverse people and ideas shaped how I think: stay curious, stay
                adaptable, and keep creating. Passionate about crafting technology that feels
                reliable, intuitive, and genuinely helpful.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 03 — Skills */}
        <motion.div
          className="about-scroll-item"
          ref={skillsRef}
          style={{ scale: skillsScale, opacity: skillsOpacity, y: skillsY }}
        >
          <div className="about-editorial-panel">
            <span className="about-ghost-number" aria-hidden="true">03</span>
            <div className="about-editorial-header">
              <span className="about-mono-label">Section 03 — Technical</span>
              <div className="about-header-rule" />
            </div>
            <h3 className="about-editorial-title">Skills & Technologies</h3>
            <div className="about-skills-rows">
              {skillRows.map(({ label, skills }) => (
                <div key={label} className="about-skill-row">
                  <span className="about-skill-label">{label}</span>
                  <div className="about-skill-tags">
                    {skills.map(s => (
                      <span key={s} className="about-skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

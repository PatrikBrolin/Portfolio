import Hero from "/components/hero/Hero";
import Contact from "/components/contact/Contact";
import Header from "@/components/header/Header";
import Container from "@/components/layout/ui/container/container";
import Skills from "@/components/skills/Skills";

import Links from "@/components/layout/ui/links/Links";

import Projects from "@/components/projects/Projects";
import { useState, useEffect, useRef } from "react";
import Email from "@/components/layout/ui/email/Email";
export default function Home({}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(projectsRef.current);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      observer.unobserve(projectsRef.current);
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);

    // cleanup function to remove the event listener when the component unmounts
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <Header
        scrolled={isScrolled}
        projectsRef={projectsRef}
        contactRef={contactRef}
        heroRef={heroRef}
        skillsRef={skillsRef}
      />
      <Hero contactRef={contactRef} heroRef={heroRef} />

      <div ref={projectsRef}>
        <Projects ref={projectsRef} isVisible={isVisible} />
      </div>
      <Skills skillsRef={skillsRef} />
      {/* <About /> */}
      <Contact contactRef={contactRef} />
      <Links />
      <Email />
    </Container>
  );
}

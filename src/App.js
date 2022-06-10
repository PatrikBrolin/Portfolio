import React, { useRef } from "react";
import Header from "./Components/HeaderPage/Header";
import Hero from "./Components/HeroPage/Hero";
import About from "./Components/AboutPage/About";
import ContactForm from "./Components/ContactPage/ContactForm";
import Projects from './Components/ProjectPage/Projects'
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
	const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
	const contactForm = useRef();
	const about = useRef();
	const home = useRef();
	const projects = useRef();

	// const handleListScrollOnClick= () => {
	//   props.
	// }

	return (
		<ParallaxProvider>
			<Header
				contactFormClick={() => scrollToDiv(contactForm)}
				aboutClick={() => scrollToDiv(about)}
				homeClick={() => scrollToDiv(home)}
				projectsClick={() => scrollToDiv(projects)}
			/>
			<Hero reference={home} click={() => scrollToDiv(contactForm)} />
			<About reference={about} />
      <Projects reference={projects} />
			<ContactForm reference={contactForm} />
		</ParallaxProvider>
	);
}

export default App;

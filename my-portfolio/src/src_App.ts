import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface Skill {
  name: string;
  icon: string;
}

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [particlesLoaded, setParticlesLoaded] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
      setParticlesLoaded(true);
    });
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newMode);
  };

  const projects: Project[] = [
    {
      title: 'Project One',
      description: 'A web app built with React and TypeScript, showcasing modern UI/UX design.',
      image: 'https://via.placeholder.com/300',
      link: 'https://github.com',
    },
    {
      title: 'Project Two',
      description: 'A full-stack application with Node.js and MongoDB.',
      image: 'https://via.placeholder.com/300',
      link: 'https://github.com',
    },
  ];

  const skills: Skill[] = [
    { name: 'React', icon: 'https://via.placeholder.com/50?text=React' },
    { name: 'TypeScript', icon: 'https://via.placeholder.com/50?text=TS' },
    { name: 'Tailwind CSS', icon: 'https://via.placeholder.com/50?text=TW' },
    { name: 'Node.js', icon: 'https://via.placeholder.com/50?text=Node' },
  ];

  const testimonials = [
    { name: 'Colleague', text: 'Amazing developer with great attention to detail.' },
    { name: 'Client', text: 'Delivered a fantastic project on time.' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {particlesLoaded && (
        <Particles
          id="tsparticles"
          options={{
            particles: {
              number: { value: 50 },
              size: { value: 3 },
              move: { enable: true, speed: 1 },
              links: { enable: true, distance: 150 },
            },
            interactivity: {
              events: { onHover: { enable: true, mode: 'repulse' }, onClick: { enable: true, mode: 'push' } },
            },
          }}
          className="absolute inset-0 z-0"
        />
      )}
      <header className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-10">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <div className="flex space-x-4">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#skills" className="hover:text-blue-500">Skills</a>
            <a href="#tech" className="hover:text-blue-500">Tech Stack</a>
            <a href="#resume" className="hover:text-blue-500">Resume</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto pt-20 px-4">
        <section id="about" className="py-16">
          <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">
            <img src="https://via.placeholder.com/200" alt="Profile" className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-8" />
            <p className="text-lg">
              I'm a passionate software engineer with expertise in building scalable web applications using modern technologies like React, TypeScript, and Tailwind CSS. I thrive on solving complex problems and delivering user-friendly interfaces.
            </p>
          </div>
        </section>

        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded mb-4" />
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="py-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="tech" className="py-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg">{skill.name}</div>
            ))}
          </div>
        </section>

        <section id="resume" className="py-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Resume</h2>
          <p className="text-lg mb-4">Download my resume to explore my experience and qualifications.</p>
          <a href="https://via.placeholder.com/resume.pdf" download className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
            Download Resume
          </a>
        </section>

        <section id="testimonials" className="py-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <p className="mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Contact</h2>
          <div className="max-w-md mx-auto">
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input type="text" className="w-full p-2 rounded bg-gray-200 dark:bg-gray-700" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input type="email" className="w-full p-2 rounded bg-gray-200 dark:bg-gray-700" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Message</label>
              <textarea className="w-full p-2 rounded bg-gray-200 dark:bg-gray-700" placeholder="Your Message"></textarea>
            </div>
            <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">Send Message</button>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub className="text-2xl" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-2xl" /></a>
              <a href="mailto:example@email.com"><FaEnvelope className="text-2xl" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-200 dark:bg-gray-800 py-4 text-center">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
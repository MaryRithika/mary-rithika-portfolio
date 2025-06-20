'use client';
import React from 'react';
import { motion } from 'framer-motion';

function Typewriter({ words = [], delay = 2000 }) {
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);
  const [blink, setBlink] = React.useState(true);

  React.useEffect(() => {
    if (index === words.length) return;
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), delay);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex(prev => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex(prev => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, delay]);

  React.useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(prev => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span>
      {`${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`}
    </span>
  );
}

export default function Portfolio() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [showTop, setShowTop] = React.useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);

  React.useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className={`font-sans ${darkMode ? 'bg-gradient-to-b from-black via-gray-900 to-black text-white' : 'bg-white text-black'} snap-y snap-mandatory h-screen overflow-y-scroll`}>

      {/* Hero Section */}
      <button onClick={toggleTheme} title="Toggle Theme" className="fixed top-4 right-4 z-50 p-2 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg">
  {darkMode ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white transition-transform duration-300 transform hover:rotate-180">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white transition-transform duration-300 transform hover:rotate-180">
      <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
    </svg>
  )}
</button>
<section id="hero" className="snap-start h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          src="/IMG_3607.jpeg"
          alt="Mary Rithika Reddy Gade"
          className="w-60 h-60 rounded-full mb-6 object-cover border-4 border-purple-500"
        />
        <motion.h1
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-4xl md:text-6xl font-extrabold ${darkMode ? '' : 'text-black'} mb-2">
          Mary Rithika Reddy Gade
        </motion.h1>
        <span className="text-4xl md:text-6xl font-extrabold text-purple-400 mb-2">
  <Typewriter words={["Full Stack Developer", "Cloud Engineer", "AI Enthusiast"]} />
</span>
        <div className="flex justify-center gap-6 mb-6 text-3xl">
  <a href="https://github.com/MaryRithika" target="_blank" rel="noopener noreferrer" title="GitHub">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 text-gray-400 hover:text-purple-500 transition-colors transform hover:scale-110 duration-300">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.85 10.94.57.1.78-.25.78-.55v-2c-3.19.69-3.86-1.39-3.86-1.39-.52-1.3-1.27-1.65-1.27-1.65-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.18-3.11-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.19 1.19a11.1 11.1 0 0 1 5.82 0c2.21-1.5 3.18-1.19 3.18-1.19.63 1.57.23 2.73.11 3.02.73.81 1.17 1.85 1.17 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.77 1.1.77 2.22v3.29c0 .3.2.66.79.55A10.998 10.998 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
    </svg>
  </a>
  <a href="https://linkedin.com/in/mary-rithika-reddy-gade-a74761191" target="_blank" rel="noopener noreferrer" title="LinkedIn">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 text-gray-400 hover:text-purple-500 transition-colors transform hover:scale-110 duration-300">
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-2.5v-9h2.5v9zm-1.25-10.3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13 10.3h-2.5v-4.7c0-1.12-.02-2.56-1.56-2.56-1.56 0-1.8 1.22-1.8 2.48v4.78h-2.5v-9h2.4v1.23h.03c.33-.63 1.15-1.3 2.37-1.3 2.54 0 3.01 1.67 3.01 3.84v5.23z"/>
    </svg>
  </a>
  <a href="mailto:gaderithikareddy@gmail.com" title="Email">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 text-gray-400 hover:text-purple-500 transition-colors transform hover:scale-110 duration-300">
      <path d="M12 12.713l11.985-8.713h-23.97l11.985 8.713zm0 2.575l-12-8.713v13.425h24v-13.425l-12 8.713z"/>
    </svg>
  </a>
</div>

<div className="mt-6">
  <a href="#about" className="px-6 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-all scale-100 hover:scale-105 active:scale-95 transform duration-200 animate-bounce">Know More</a>
</div>
      </section>

      {/* About Section */}
      <section id="about" className="snap-start py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4 text-purple-400" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto "
        >
          I'm a Full-Stack Software Engineer passionate about crafting scalable, high-impact applications that boost efficiency and engagement. With a strong foundation in software architecture and hands-on experience in building full-stack systems, I bring a blend of technical expertise and product thinking to every project. My background spans frontend and backend engineering, AI/ML model integration, and cloud-native deployments using Docker and Kubernetes. I’ve led development on impactful projects that improved automation, increased reliability, and enhanced user experience. I’m now seeking full-time opportunities in software development, cloud engineering, or AI-driven innovation. I am currently seeking full-time opportunities in software development, cloud computing, or AI-related roles.
        </motion.p>
      </section>

      {/* Skills & Expertise Section */}
      <section id="skills" className="snap-start py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10 text-purple-400" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {[{ name: 'AWS (S3, Lambda)', level: 80 }, { name: 'Google BigQuery', level: 75 }, { name: 'Kubernetes', level: 80 }, { name: 'Docker', level: 75 }, { name: 'CI/CD Pipelines', level: 80 }, { name: 'Typescript', level: 100 }, { name: 'React', level: 90 }, { name: 'React Native', level: 85 }, { name: 'NextJS', level: 85 }, { name: 'Angular', level: 90 }, { name: 'NodeJS', level: 85 }, { name: '.NET', level: 80 }, { name: 'MongoDB', level: 80 }, { name: 'PostgreSQL', level: 80 }, { name: 'Java', level: 75 }, { name: 'Python', level: 90 }, { name: 'System Architecture', level: 85 }, { name: 'LLMs', level: 85 }].map((skill, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-left">
              <div className="flex justify-between mb-1">
                <span className=" font-medium">{skill.name}</span>
                <span className="text-sm ">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ duration: 1.2 }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="snap-start py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10 text-purple-400" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid gap-10 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3">
          {[{
            title: 'SmartSurvey',
            stack: 'Angular, Spring Boot, JDBC',
            desc: `SmartSurvey is a full-stack feedback platform processing 500+ surveys with a 30% efficiency gain.
- Designed intuitive Angular frontend and secure Spring Boot backend.
- Integrated JDBC with robust data validation and role-based access.
- Achieved scalable deployment for institutional use.`
          }, {
            title: 'Campus Connect',
            stack: 'Spring Boot, MySQL, Kubernetes',
            desc: `Campus Connect is a microservices-based campus portal with 97% uptime and CI/CD automation.
- Built with Spring Boot and MySQL, deployed on Kubernetes.
- Implemented authentication, search, and messaging modules.
- Maintained production stability and error logging.`
          }, {
            title: 'GradPrep',
            stack: 'LLMs, Python, React',
            desc: `GradPrep is an AI-powered study platform using LLMs for real-time scoring and question generation.
- Developed Python backend with prompt engineering for educational use-cases.
- Integrated React UI with real-time updates and scoring analytics.
- Designed APIs to support continuous learning and feedback.`
          }, {
            title: 'Web Traffic Forecasting Application',
            stack: 'SARIMA, MLP, RNN, SAE, Python, Data Visualization',
            desc: `Developed a web traffic forecasting model using SARIMA and MLP, achieving 89% prediction accuracy.
- Processed 4,896 records to analyze and forecast time-series traffic patterns.
- Applied SARIMA for seasonal trends and managed web traffic disruptions.
- Compared performance of RNN and SAE models using RMSE and visual analytics.`
          }].map((proj, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={`rounded-lg p-6 shadow-md text-left hover:shadow-xl transition-shadow transform hover:scale-105 duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
              <h3 className="text-xl font-semibold text-purple-300 mb-2">{proj.title}</h3>
              <p className="text-sm  italic mb-1">{proj.stack}</p>
              <p className="text-sm">{proj.desc}</p>
<a href="https://github.com/MaryRithika" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm text-purple-400 underline hover:text-purple-500 transition-colors">View on GitHub</a>
            </motion.div>
          ))}
        </div>
      </section>

      

      {/* Experience Section */}
      <section id="experience" className="snap-start py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10 text-purple-400" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          {[{
            role: 'Graduate Teaching Assistant – George Mason University',
            date: 'Jan 2025 – May 2025',
            items: [
              'Led hands-on labs for 160+ graduate students on Business Analytics and Cloud Data Systems using Google BigQuery and AWS S3.',
              'Designed and delivered 15+ technical sessions with live architecture demos, boosting project readiness by 40%.',
              'Mentored over 160 students across two semesters, contributing to a 25% rise in project excellence and final presentation scores.'
            ]
          }, {
            role: 'Classroom Support Assistant – George Mason University',
            date: 'Nov 2023 – Dec 2024',
            items: [
              'Managed AV and IT infrastructure across 60+ classrooms, ensuring seamless delivery of instructional content with 99.5% uptime.',
              'Proactively resolved technical issues in real time, reducing average resolution time from 15 to 10 minutes.',
              'Collaborated with faculty and IT teams to improve support efficiency, contributing to a 30% drop in recurring incidents.'
            ]
          }, {
            role: 'Software Engineer Intern – PurpleTalk',
            date: 'Apr 2023 – Jul 2023',
            items: [
              'Developed and deployed full-stack web apps using React and Node.js, resulting in a 35% boost in development efficiency.',
              'Optimized backend APIs, reducing response time by 40% and increasing throughput.',
              'Implemented CI/CD pipelines and containerized services with Docker and Kubernetes for seamless production deployment.'
            ]
          }].map((job, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className={`rounded-lg p-6 shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
              <h3 className="text-lg font-semibold text-purple-300 mb-1">{job.role}</h3>
              <p className="text-sm  mb-2">{job.date}</p>
              <ul className="list-disc list-inside text-sm  space-y-1">
                {job.items.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </motion.div>
))}
        </div>
      </section>

      

      {/* Contact Section */}/
      

      {/* Footer */}
      <footer className="text-center text-xs py-4 text-purple-300 bg-black">
        © {new Date().getFullYear()} Mary Rithika Reddy Gade. All Rights Reserved. 
      </footer>

    {showTop && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 p-3 rounded-full bg-purple-600 text-white text-xl shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-110">
          ↑
        </button>
      )}
    </div>
  );
}

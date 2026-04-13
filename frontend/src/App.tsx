import React, { useState } from 'react'
import Chat from './components/Chat'

export default function App() {
  const [chatOpen, setChatOpen] = useState(false)

  const skills = [
    { title: 'Programming', items: ['JavaScript', 'Typescript', 'Python'] },
    { title: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap'] },
    { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'Django'] },
    { title: 'Databases', items: ['PostgreSQL', 'Redis', 'MongoDB'] },
    { title: 'DevOps & Tools', items: ['Azur', 'Docker', 'Git', 'GitHub', 'Render', 'Vercel'] },
  ]

  const projects = [
    {
      name: 'Live Chat App',
      stack: 'MERN stack (MongoDB, Express.js, React, Node.js), Tailwind-CSS',
      link: 'https://github.com/YUG3011/Live-Chat-App',
      liveLink: 'https://live-chat-26w4czjbu-yug3011s-projects.vercel.app',
      points: [
        'Built a real-time chat application using Socket.io, enabling instant bidirectional messaging with low-latency communication.',
        'Implemented JWT-based authentication and authorization, ensuring secure user sessions and protected routes with encrypted password storage using bcrypt.',
        'Designed and optimized real-time event handling, reducing message delivery delay by ~50% and improving user responsiveness.',
        'Developed scalable backend APIs with Node.js and Express.js, supporting concurrent users and efficient message handling.',
        'Managed global state using Zustand, improving frontend state performance and reducing unnecessary re-renders by ~30%.',
        'Engineered responsive and clean UI with Tailwind CSS, enhancing chat readability and user experience (sender/receiver alignment, notifications).',
        'Integrated sound-based notification system, improving user engagement and real-time awareness of incoming messages.',
        'Deployed full-stack application on Render, configuring production environment variables and ensuring smooth CI/CD workflow.'
      ]
    },
    {
      name: 'AI Journal System',
      stack: 'React.js, Node.js, Express.js, PostgreSQL, Prisma ORM, Redis, Google Gemini AI',
      link: 'https://github.com/YUG3011/Ai-Journal-System',
      points: [
        'Built an AI-powered journaling platform leveraging Google Gemini AI to perform sentiment analysis, keyword extraction, and automated summarization, improving user insight generation.',
        'Designed and implemented scalable RESTful APIs using Node.js and Express.js, handling structured journal data efficiently.',
        'Integrated PostgreSQL with Prisma ORM, reducing database query development time by ~40% and improving maintainability through type-safe queries.',
        'Implemented Redis caching layer, reducing AI response latency by ~60% and minimizing redundant API calls.',
        'Optimized backend performance and data retrieval, improving overall system response time by ~35%.',
        'Developed responsive UI components using React.js, enhancing user experience and increasing usability for journal analytics.',
        'Followed modular architecture and clean code practices, improving scalability and ease of future feature integration.'
      ]
    },
    {
      name: 'Text Utils',
      stack: 'React, Bootstrap',
      link: 'https://github.com/YUG3011/TEXT-UTILS',
      points: [
        'Implemented features to count words and letters in user-input text.',
        'Enabled one-click text transforms: lowercase, uppercase, reverse, and clear.'
      ]
    },
  ]

  const achievements = [
    'Google AI Essential — Coursera',
    'MERN Stack — Simplilearn',
    'Linux Essentials — Cisco',
    'Python for Data-Science — IBM',
    'Java Programming Fundamentals — Infosys',
    'MATLAB — Advance Your Career with MATLAB Programming',
    'J2EE Comprehensive Training Course',
    'Beginning Java Data Structures and Algorithms',
    'CSS3',
    'Database and SQL',
    'Networking Essentials',
    'Android Material Design — The Fundamentals',
    'Basic C# Programming',
    'Building Recommender Systems with Machine Learning and AI',
    'Software Testing Fundamentals'
  ]

  const experience = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Sofzenix IT Solutions',
      time: 'Jul 2025 – Present • Rajkot, Gujarat',
      bullets: [
        'Built full-stack features across MERN, shipping hotel and accounting modules.',
        'Styled responsive UIs with Tailwind CSS and Next.js patterns.',
      ],
    },
  ]

  return (
    <div className="app">
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />
      <header className="hero">
        <div className="hero-main">
          <img className="hero-photo" src="/YugPatel.png" alt="Yug Vachhani" />
          <div className="hero-text">
            <p className="eyebrow">Hello, I am</p>
            <h1>
              Yug Vachhani
              <span className="accent-dot">•</span>
              Full Stack Developer
            </h1>
            <p className="lede">I build scalable web applications using React, Node.js, and MongoDB, with a strong focus on clean UI and reliable backend architecture.</p>
            <div className="hero-links">
              <a className="hero-link" href="https://github.com/YUG3011" target="_blank" rel="noreferrer">GitHub /YUG3011</a>
              <a className="hero-link" href="https://www.linkedin.com/in/yug-vachhani-bb4133251/" target="_blank" rel="noreferrer">LinkedIn /yug-vachhani</a>
            </div>
            <div className="hero-actions">
              <a className="button primary" href="#skills">Explore portfolio</a>
              <button className="button ghost" onClick={() => setChatOpen(true)}>Open chat</button>
            </div>
          </div>
        </div>
        <div className="hero-grid single-row">
          <div className="stat">
            <p className="label">Email</p>
            <p className="value">yug30112005@gmail.com</p>
          </div>
          <div className="stat">
            <p className="label">Phone</p>
            <p className="value">+91 93133 98556</p>
          </div>
          <div className="stat">
            <p className="label">Location</p>
            <p className="value">Rajkot, Gujarat</p>
          </div>
        </div>
      </header>

      <main className="layout">
        <section className="panel" id="skills">
          <div className="panel-head">
            <p className="eyebrow">Skills</p>
            <h2>Technical stack</h2>
          </div>
          <div className="skill-list">
            {skills.map((s) => (
              <div key={s.title} className="line-item">
                <p className="line-title">{s.title}</p>
                <div className="chips">
                  {s.items.map((item) => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel" id="projects">
          <div className="panel-head">
            <p className="eyebrow">Projects</p>
            <h2>Selected work</h2>
          </div>
          <div className="cards">
            {projects.map((p) => (
              <div key={p.name} className="card">
                <div className="card-top">
                  <div>
                    <h3>{p.name}</h3>
                    <p className="eyebrow">{p.stack}</p>
                  </div>
                  <div className="project-links">
                    <a className="hero-link" href={p.link} target="_blank" rel="noreferrer">GitHub</a>
                    {p.liveLink ? (
                      <a className="hero-link" href={p.liveLink} target="_blank" rel="noreferrer">Live Demo</a>
                    ) : null}
                  </div>
                </div>
                <ul>
                  {p.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="panel" id="experience">
          <div className="panel-head">
            <p className="eyebrow">Experience</p>
            <h2>Professional journey</h2>
          </div>
          <div className="cards timeline">
            {experience.map((job) => (
              <div key={job.company} className="card">
                <p className="eyebrow">{job.time}</p>
                <h3>{job.role} — {job.company}</h3>
                <ul>
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="panel" id="achievements">
          <div className="panel-head">
            <p className="eyebrow">Certificates & highlights</p>
            <h2>Achievements</h2>
          </div>
          <div className="chips wrap">
            {achievements.map((a) => (
              <span key={a} className="chip bold">{a}</span>
            ))}
          </div>
        </section>
      </main>

      {!chatOpen ? (
        <button className="chat-toggle" onClick={() => setChatOpen(true)}>
          Chat about my resume
        </button>
      ) : null}

      <div className={`chat-drawer ${chatOpen ? 'open' : ''}`}>
        <div className="chat-drawer-head">
          <div>
            <p className="eyebrow">AI Assistant</p>
            <h3>Ask anything about my resume</h3>
          </div>
          <button className="icon-btn" onClick={() => setChatOpen(false)} aria-label="Close chat">×</button>
        </div>
        <Chat />
      </div>
    </div>
  )
}

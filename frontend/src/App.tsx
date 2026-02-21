import React, { useState } from 'react'
import Chat from './components/Chat'

export default function App() {
  const [chatOpen, setChatOpen] = useState(false)

  const skills = [
    { title: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap'] },
    { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs','Fast API' , 'Django'] },
    { title: 'Databases', items: ['MongoDB', 'PostgreSQL'] },
    { title: 'Programming', items: ['JavaScript', 'TypeScript','Python'] },
    { title: 'DevOps & Tools', items: ['Docker', 'Git', 'GitHub', 'Render', 'Vercel'] },
  ]

  const projects = [
    {
      name: 'Live Chat App',
      stack: 'MERN (MongoDB, Express.js, React, Node.js), Tailwind CSS',
      link: 'https://github.com/YUG3011/Live-Chat-App',
      liveLink: 'https://live-chat-26w4czjbu-yug3011s-projects.vercel.app',
      points: [
        'Deployed the complete full-stack application on Render, managing production environment variables and backend configuration.',
        'Built a real-time chat app with sound notifications using Socket.io, bcrypt, Zustand, and Tailwind CSS.',
        'Implemented JWT authentication for secure login/register with bcrypt.',
        'Users can send/receive messages instantly, hear new-message notifications, view clean sender/receiver alignment, and stay logged in securely.',
        'Built with attention to both frontend and backend performance.'
      ]
    },
    {
      name: 'Online News',
      stack: 'MERN, Bootstrap, NewsAPI',
      link: 'https://github.com/YUG3011/news-online',
      points: [
        'Developed a responsive single-page news web application using React.js.',
        'Implemented infinite scrolling to dynamically load additional articles, improving UX and reducing initial load time.',
        'Integrated NewsAPI to fetch and display real-time articles across multiple categories.',
        'Added filtering by category and keyword for faster article discovery.'
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

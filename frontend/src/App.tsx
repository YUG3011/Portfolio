import React, { useState } from 'react'
import Chat from './components/Chat'

export default function App() {
  const [chatOpen, setChatOpen] = useState(false)

  const renderWithBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, index) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={index}>{part.slice(2, -2)}</strong>
      ) : (
        <React.Fragment key={index}>{part}</React.Fragment>
      )
    )
  }

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
        'Built a **real-time chat application** using **Socket.io**, enabling instant bidirectional messaging with low-latency communication.',
        'Implemented **JWT-based authentication and authorization**, ensuring secure user sessions and protected routes with encrypted password storage using bcrypt.',
        'Designed and optimized **real-time event handling**, reducing message delivery delay by **~50%** and improving user responsiveness.',
        'Developed scalable backend APIs with Node.js and Express.js, supporting concurrent users and efficient message handling.',
        'Managed global state using **Zustand**, improving frontend state performance and reducing unnecessary re-renders by **~30%**.',
        'Engineered responsive and clean UI with Tailwind CSS, enhancing chat readability and user experience (sender/receiver alignment, notifications).',
        'Integrated **sound-based notification system**, improving user engagement and real-time awareness of incoming messages.',
        'Deployed full-stack application on **Render**, configuring production environment variables and ensuring smooth CI/CD workflow.'
      ]
    },
    {
      name: 'AI Journal System',
      stack: 'React.js, Node.js, Express.js, PostgreSQL, Prisma ORM, Redis, Google Gemini AI',
      link: 'https://github.com/YUG3011/Ai-Journal-System',
      points: [
        'Built an AI-powered journaling platform leveraging **Google Gemini AI** to perform **sentiment analysis, keyword extraction, and automated summarization**, improving user insight generation.',
        'Designed and implemented **scalable RESTful APIs** using Node.js and Express.js, handling structured journal data efficiently.',
        'Integrated **PostgreSQL with Prisma ORM**, reducing database query development time by **~40%** and improving maintainability through type-safe queries.',
        'Implemented **Redis caching layer**, reducing AI response latency by **~60%** and minimizing redundant API calls.',
        'Optimized backend performance and data retrieval, improving overall system response time by **~35%**.',
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
              <a className="hero-link" href="https://github.com/YUG3011" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.41-4.04-1.41a3.18 3.18 0 0 0-1.34-1.76c-1.1-.75.08-.73.08-.73a2.53 2.53 0 0 1 1.85 1.25 2.6 2.6 0 0 0 3.56 1 2.6 2.6 0 0 1 .77-1.63c-2.67-.3-5.47-1.33-5.47-5.9a4.63 4.63 0 0 1 1.23-3.22 4.3 4.3 0 0 1 .12-3.18s1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23a4.3 4.3 0 0 1 .12 3.18 4.62 4.62 0 0 1 1.23 3.22c0 4.58-2.8 5.6-5.48 5.9a2.9 2.9 0 0 1 .82 2.25v3.33c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"
                  />
                </svg>
                GitHub /YUG3011
              </a>
              <a className="hero-link" href="https://www.linkedin.com/in/yug-vachhani-bb4133251/" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.35 4.24 5.41v6.33ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.54V9H7.1v11.45ZM22.23 0H1.77A1.76 1.76 0 0 0 0 1.74v20.52C0 23.22.79 24 1.77 24h20.46A1.77 1.77 0 0 0 24 22.26V1.74A1.77 1.77 0 0 0 22.23 0Z"
                  />
                </svg>
                LinkedIn /yug-vachhani
              </a>
              <a className="hero-link" href="https://leetcode.com/u/B2tMpLTENh/" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M14.1 3.3a1 1 0 0 1 1.4 0l4.9 4.9a1 1 0 0 1 0 1.4l-4.9 4.9a1 1 0 1 1-1.4-1.4l3.2-3.2H7.5a1 1 0 1 1 0-2h9.8l-3.2-3.2a1 1 0 0 1 0-1.4ZM6.2 12a1 1 0 0 1 1 1v4.3a1.7 1.7 0 0 0 1.7 1.7h8.3a1 1 0 1 1 0 2H8.9a3.7 3.7 0 0 1-3.7-3.7V13a1 1 0 0 1 1-1Z"
                  />
                </svg>
                LeetCode /B2tMpLTENh
              </a>
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
                    <li key={point}>{renderWithBold(point)}</li>
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

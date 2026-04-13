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
                <span className="social-icon github" aria-hidden="true">
                  <svg viewBox="0 0 128 128">
                    <path
                      fill="#181616"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                    />
                  </svg>
                </span>
                GitHub /YUG3011
              </a>
              <a className="hero-link" href="https://www.linkedin.com/in/yug-vachhani-bb4133251/" target="_blank" rel="noreferrer">
                <span className="social-icon linkedin" aria-hidden="true">
                  <svg viewBox="0 0 128 128">
                    <path fill="#0076b2" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"/>
                    <path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"/>
                  </svg>
                </span>
                LinkedIn /yug-vachhani
              </a>
              <a className="hero-link" href="https://leetcode.com/u/B2tMpLTENh/" target="_blank" rel="noreferrer">
                <span className="social-icon leetcode" aria-hidden="true">
                  <svg viewBox="0 0 128 128">
                    <path fill="#b3b1b0" d="M117.555 76.558c0-3.957-3.008-7.178-6.72-7.178H57.159c-3.712 0-6.72 3.221-6.72 7.178 0 3.958 3.002 7.18 6.72 7.18h53.676c3.712.005 6.72-3.217 6.72-7.18"/>
                    <path fill="#e7a41f" d="m18.79 96.996 23.003 23.26c5.19 5.221 12.363 7.744 20.283 7.744s15.094-2.73 20.294-7.968l13.803-14.065c2.72-2.741 2.624-7.28-.208-10.133-2.832-2.854-7.333-2.95-10.048-.208L71.645 109.53c-2.465 2.49-5.878 3.53-9.649 3.53s-7.179-1.04-9.653-3.53L29.419 86.26c-2.47-2.49-3.712-6.133-3.712-9.936s1.243-7.238 3.712-9.728l22.854-23.361c2.47-2.49 5.952-3.44 9.718-3.44s7.179 1.04 9.648 3.53l14.273 13.9c2.72 2.746 7.221 2.65 10.053-.203 2.832-2.859 2.928-7.398.208-10.14L82.37 32.825a26.64 26.64 0 0 0-12.758-7.094l-.18-.037 13.05-13.35c2.73-2.741 2.635-7.285-.197-10.139S74.945-.74 72.22 2.002L18.79 55.87c-5.19 5.237-7.905 12.464-7.905 20.454S13.6 91.77 18.79 96.996"/>
                    <path fill="#070706" d="M43.5 121.674a11.3 11.3 0 0 1-2.528-1.925c-7.078-7.11-14.187-14.187-21.249-21.318C9.115 87.721 7.445 72.1 15.531 59.39a32 32 0 0 1 4.475-5.355L71.33 2.605c3.333-3.34 7.99-3.478 11.088-.358 2.987 3.003 2.81 7.76-.416 11.019-4.101 4.139-8.208 8.267-12.315 12.4-.219.651-.747 1.067-1.2 1.531-4.603 4.672-9.334 9.222-13.872 13.963-.592.619-1.398.992-1.984 1.627-7.59 7.59-15.27 15.094-22.753 22.784-6.054 6.225-5.85 15.67.363 22.012 6.976 7.125 14.075 14.134 21.126 21.195.357.357.725.704 1.088 1.056 2.496 1.616 2.528 6.667.976 8.912-1.712 2.48-3.947 4-7.11 3.883-1.061-.032-1.936-.458-2.821-.955"/>
                  </svg>
                </span>
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
            <span className="chat-note">Responses may be slow</span>
          </div>
          <button className="icon-btn" onClick={() => setChatOpen(false)} aria-label="Close chat">×</button>
        </div>
        <Chat />
      </div>
    </div>
  )
}

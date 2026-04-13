import React, { useState, useRef, useEffect } from 'react'

type Msg = { from: 'user' | 'bot'; text: string }

export default function Chat() {
  const [text, setText] = useState('')
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [loading, setLoading] = useState(false)
  const configuredApiBase = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')
  const defaultProdApiBase = 'https://portfolio-txnn.onrender.com'
  const isVercelHost = typeof window !== 'undefined' && window.location.hostname.endsWith('vercel.app')
  const apiBase = configuredApiBase || (isVercelHost ? defaultProdApiBase : '')

  const renderInlineBold = (text: string) => {
    const chunks = text.split(/(\*\*.*?\*\*)/g)
    return chunks.map((chunk, index) => {
      if (chunk.startsWith('**') && chunk.endsWith('**')) {
        return <strong key={index}>{chunk.slice(2, -2)}</strong>
      }
      return <React.Fragment key={index}>{chunk}</React.Fragment>
    })
  }

  const renderBotMessage = (rawText: string) => {
    const text = rawText.replace(/\s\|\s/g, '\n\n').replace(/\r/g, '')
    const lines = text.split('\n')

    return (
      <div className="bot-rich">
        {lines.map((line, index) => {
          const trimmed = line.trim()
          if (!trimmed) return <div key={index} className="msg-gap" />

          const numbered = trimmed.match(/^(\d+[.)])\s+(.*)$/)
          if (numbered) {
            return (
              <p key={index} className="msg-line num">
                <span className="marker">{numbered[1]}</span>
                <span>{renderInlineBold(numbered[2])}</span>
              </p>
            )
          }

          const bullet = trimmed.match(/^[-*]\s+(.*)$/)
          if (bullet) {
            return (
              <p key={index} className="msg-line bullet">
                <span className="marker">•</span>
                <span>{renderInlineBold(bullet[1])}</span>
              </p>
            )
          }

          if (trimmed.endsWith(':')) {
            return <p key={index} className="msg-title">{renderInlineBold(trimmed)}</p>
          }

          if (/^\*\*[^*]+\*\*$/.test(trimmed)) {
            return <p key={index} className="msg-project-title">{renderInlineBold(trimmed)}</p>
          }

          return <p key={index} className="msg-line">{renderInlineBold(trimmed)}</p>
        })}
      </div>
    )
  }

  async function send() {
    if (!text.trim()) return
    const q = text.trim()
    setMsgs((m) => [...m, { from: 'user', text: q }])
    setText('')

    // detect short/polite messages locally and reply without calling backend
    const cleaned = q.toLowerCase().replace(/[^a-z0-9\s']/g, '').trim()
    const pureGreetings = ['hi', 'hello', 'hey', 'hiya']
    const pureThanks = ['thanks', 'thank you', 'thx', 'ty']
    const howAreYouPhrases = ["how are you", "how are u", "how r you", "how r u", "how's it going", "how is it going"]

    const isPure = (arr: string[]) => arr.includes(cleaned)

    if (isPure(pureGreetings)) {
      setMsgs((m) => [...m, { from: 'bot', text: "Hi — I'm Yug's AI assistant. Ask me about his skills, projects, or experience." }])
      return
    }

    if (isPure(howAreYouPhrases)) {
      setMsgs((m) => [...m, { from: 'bot', text: "I'm a resume assistant for Yug — I'm ready to help with questions about his skills, projects, experience, or education." }])
      return
    }

    if (isPure(pureThanks)) {
      setMsgs((m) => [...m, { from: 'bot', text: "You're welcome! Anything else you'd like to ask about the resume?" }])
      return
    }

    setLoading(true)
    // add an interim typing indicator message
    setMsgs((m) => [...m, { from: 'bot', text: 'Thinking...' }])
    try {
      const r = await fetch(`${apiBase}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q })
      })
      const j = await r.json()
      if (!r.ok) {
        const detail = j?.detail || `Request failed (${r.status})`
        // replace the interim typing message with the error
        setMsgs((m) => {
          const withoutTyping = m.slice(0, -1)
          return [...withoutTyping, { from: 'bot', text: String(detail) }]
        })
        return
      }
      // replace the interim typing message with the real answer
      setMsgs((m) => {
        const withoutTyping = m.slice(0, -1)
        return [...withoutTyping, { from: 'bot', text: j.answer || 'No answer returned by model' }]
      })
    } catch (e) {
      setMsgs((m) => {
        const withoutTyping = m.slice(0, -1)
        return [...withoutTyping, { from: 'bot', text: 'Error contacting backend' }]
      })
    } finally {
      setLoading(false)
    }
  }

  const messagesRef = useRef<HTMLDivElement | null>(null)
  // auto-scroll when messages change
  useEffect(() => {
    const el = messagesRef.current
    if (el) {
      el.scrollTop = el.scrollHeight
    }
  }, [msgs, loading])

  return (
    <div className="chat-box">
      <div className="messages" ref={messagesRef}>
        {msgs.map((m, i) => (
          <div key={i} className={"msg " + m.from}>
            {m.text === 'Thinking...' ? (
              <span className="typing">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </span>
            ) : m.from === 'bot' ? (
              renderBotMessage(m.text)
            ) : (
              m.text
            )}
          </div>
        ))}
      </div>
      <div className="composer">
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Ask about the resume..." />
        <button onClick={send} disabled={loading}>{loading ? 'Thinking...' : 'Send'}</button>
      </div>
    </div>
  )
}

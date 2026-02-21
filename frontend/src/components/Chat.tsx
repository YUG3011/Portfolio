import React, { useState } from 'react'

type Msg = { from: 'user' | 'bot'; text: string }

export default function Chat() {
  const [text, setText] = useState('')
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [loading, setLoading] = useState(false)
  const configuredApiBase = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')
  const defaultProdApiBase = 'https://portfolio-txnn.onrender.com'
  const isVercelHost = typeof window !== 'undefined' && window.location.hostname.endsWith('vercel.app')
  const apiBase = configuredApiBase || (isVercelHost ? defaultProdApiBase : '')

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
    try {
      const r = await fetch(`${apiBase}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q })
      })
      const j = await r.json()
      if (!r.ok) {
        const detail = j?.detail || `Request failed (${r.status})`
        setMsgs((m) => [...m, { from: 'bot', text: String(detail) }])
        return
      }
      setMsgs((m) => [...m, { from: 'bot', text: j.answer || 'No answer returned by model' }])
    } catch (e) {
      setMsgs((m) => [...m, { from: 'bot', text: 'Error contacting backend' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="chat-box">
      <div className="messages">
        {msgs.map((m, i) => (
          <div key={i} className={"msg " + m.from}>{m.text}</div>
        ))}
      </div>
      <div className="composer">
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Ask about the resume..." />
        <button onClick={send} disabled={loading}>{loading ? 'Thinking...' : 'Send'}</button>
      </div>
    </div>
  )
}

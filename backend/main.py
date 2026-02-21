import os
import time
import logging
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from resume_loader import load_resume_text
from openrouter_client import query_openrouter
from pymongo import MongoClient
from pymongo.errors import ConfigurationError

load_dotenv()

RESUME_PATH = os.getenv("RESUME_PATH", "../Yug Resume_tp.pdf")
MONGODB_URI = os.getenv("MONGODB_URI")

FALLBACK_RESUME = """YUG VACHHANI
Phone: +91 93133 98556
Email: yug30112005@gmail.com
Location: Rajkot, Gujarat
GitHub: https://github.com/YUG3011
LinkedIn: https://www.linkedin.com/in/yug-vachhani-bb4133251/
Education:
- Marwadi University, B.Tech Information Technology (Jun 2024 – 2027), CGPA: 7.59
- Darshan University, Diploma Computer Engineering (Jun 2021 – 2024), CGPA: 7.03
Experience:
- Sofzenix IT Solutions | Full Stack Developer Intern (Jul 2025 – Present), Rajkot, Gujarat
    Tech: MongoDB, Express.js, React, Node.js, Tailwind CSS, Next.js. Built Hotel Management and Accounting Management projects; delivered responsive UIs.
Projects:
- Live Chat App (MERN, Tailwind CSS). Deployed on Render; real-time chat with Socket.io, JWT auth, bcrypt, Zustand; notification sounds.
- Online News (MERN, Bootstrap). SPA with infinite scrolling; NewsAPI integration; category/keyword filters.
- Text Utils (React, Bootstrap). Text transformations and counts.
Technical Skills:
- Programming: JavaScript, TypeScript
- Frontend: React, Next.js, Tailwind CSS, Bootstrap
- Backend: Node.js, Express.js, REST APIs
- Databases: MongoDB, PostgreSQL
- DevOps/Tools: Docker, Git, GitHub, Render, Vercel
Certificates: Google AI Essential (Coursera); MERN Stack (Simplilearn); Linux Essentials (Cisco); Python for Data-Science (IBM); Java Programming Fundamentals (Infosys); MATLAB — Advance Your Career with MATLAB Programming; J2EE Comprehensive Training Course; Beginning Java Data Structures and Algorithms; CSS3; Database and SQL; Networking Essentials; Android Material Design — The Fundamentals; Basic C# Programming; Building Recommender Systems with Machine Learning and AI; Software Testing Fundamentals
"""

app = FastAPI()

ALLOWED_ORIGINS = [
    "https://portfolio-virid-six-qe701qheol.vercel.app",
]
extra_origins = os.getenv("FRONTEND_ORIGINS", "").strip()
if extra_origins:
    ALLOWED_ORIGINS.extend([origin.strip() for origin in extra_origins.split(",") if origin.strip()])

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# basic logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@app.get('/api/health')
async def health():
    return {"status": "ok"}


@app.get('/api/chat-info')
async def chat_info():
    return {
        "path": "/api/chat",
        "method": "POST",
        "content_type": "application/json",
        "body_example": {"question": "What are his technical skills?"},
        "curl_example": "curl -X POST http://localhost:8000/api/chat -H 'Content-Type: application/json' -d '{\"question\": \"What are his technical skills?\"}'"
    }
    
@app.post('/debug/echo')
async def debug_echo(request: Request):
    """Dev helper: echoes back parsed JSON body so you can confirm the server
    receives the payload exactly as sent. This endpoint does not call OpenRouter.
    Use POST /debug/echo with JSON body to test."""
    try:
        data = await request.json()
    except Exception:
        return {"error": "invalid json"}
    return {"received": data}

db = None
if MONGODB_URI:
    client = MongoClient(MONGODB_URI)
    # allow explicit DB name via MONGODB_DB, otherwise try to use the default
    MONGODB_DB = os.getenv("MONGODB_DB")
    if MONGODB_DB:
        db = client[MONGODB_DB]
    else:
        try:
            db = client.get_database()
        except ConfigurationError:
            # URI did not include a default database; don't crash the app.
            logger.warning(
                "MONGODB_URI does not specify a default database and MONGODB_DB is not set. Database features will be disabled."
            )
            db = None

resume_text = load_resume_text(RESUME_PATH) or ""
if not resume_text.strip():
    resume_text = FALLBACK_RESUME

class Question(BaseModel):
    question: str


@app.get("/api/resume")
async def get_resume():
    return {"text": resume_text}


@app.post("/api/chat")
async def chat(q: Question):
    if not os.getenv("OPENROUTER_API_KEY"):
        raise HTTPException(status_code=500, detail="OPENROUTER_API_KEY not configured")

    # quick exact-match shortcuts for common contact/profile requests
    q_lower = q.question.lower().strip()
    github_url = "https://github.com/YUG3011"
    linkedin_url = "https://www.linkedin.com/in/yug-vachhani-bb4133251/"
    wants_github = 'github' in q_lower
    wants_linkedin = 'linkedin' in q_lower or 'linked in' in q_lower
    if wants_github or wants_linkedin:
        parts = []
        if wants_github:
            parts.append(f"GitHub: {github_url}")
        if wants_linkedin:
            parts.append(f"LinkedIn: {linkedin_url}")
        return {"answer": " | ".join(parts)}

    # FAQ shortcuts: achievements/certificates, email, phone, location
    # accept common spellings and fragments for 'achievements' and 'certificates'
    wants_ach = any(k in q_lower for k in ("achiev", "achiv", "achievement", "achievements", "certificate", "certificates"))
    wants_email = 'email' in q_lower or 'e-mail' in q_lower
    wants_phone = 'phone' in q_lower or 'contact' in q_lower or 'mobile' in q_lower
    wants_location = 'location' in q_lower or 'where' in q_lower or 'based' in q_lower
    if wants_ach or wants_email or wants_phone or wants_location:
        parts = []
        if wants_ach:
            parts.append("Certificates & Achievements: Google AI Essential (Coursera); MERN Stack (Simplilearn); Linux Essentials (Cisco); Python for Data-Science (IBM); Java Programming Fundamentals (Infosys); MATLAB — Advance Your Career with MATLAB Programming; J2EE Comprehensive Training Course; Beginning Java Data Structures and Algorithms; CSS3; Database and SQL; Networking Essentials; Android Material Design — The Fundamentals; Basic C# Programming; Building Recommender Systems with Machine Learning and AI; Software Testing Fundamentals")
        if wants_email:
            parts.append("Email: yug30112005@gmail.com")
        if wants_phone:
            parts.append("Phone: +91 93133 98556")
        if wants_location:
            parts.append("Location: Rajkot, Gujarat")
        return {"answer": " | ".join(parts)}

    system = {
        "role": "system",
        "content": (
            "You are an assistant that answers questions strictly based on the provided resume. "
            "For factual questions about the candidate (skills, projects, experience, education, certificates), only use information contained in the resume. "
            "If the answer is not contained in the resume, respond briefly with: 'I don't know based on the resume.' "
            "If the user's message is a short polite greeting or remark (for example: 'hi', 'hello', 'how are you', 'thank you'), respond briefly and politely (1-2 sentences). Keep such small-talk responses friendly but short."
        ),
    }
    user_msg = {"role": "user", "content": f"Resume:\n{resume_text}\n\nQuestion: {q.question}"}
    messages = [system, user_msg]

    try:
        result = await query_openrouter(messages)
        # OpenRouter returns choices with message/content similar to Chat Completions
        choice = result.get("choices", [{}])[0]
        message = choice.get("message", {}).get("content") or choice.get("text") or ""
    except Exception as e:
        logger.exception("OpenRouter request failed")
        # return a generic message to frontend but log details server-side
        raise HTTPException(status_code=500, detail="OpenRouter request failed. Check server logs for details.")

    # store in mongodb if available
    if db is not None:
        try:
            db.chats.insert_one({"question": q.question, "answer": message, "ts": int(time.time())})
        except Exception:
            pass

    return {"answer": message}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("PORT", 8000)))

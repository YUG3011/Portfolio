# Backend (FastAPI)

Setup

1. Create a virtualenv and install dependencies:

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```

2. Copy `.env.example` to `.env` and set `OPENROUTER_API_KEY`, `RESUME_PATH`, and optionally `MONGODB_URI`.

3. Run:

```bash
uvicorn main:app --reload --port 8000
```

Endpoints
- `GET /api/resume` - returns parsed resume text
- `POST /api/chat` - body `{ "question": "..." }` returns AI answer

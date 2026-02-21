# Portfolio with AI Chat

This workspace contains a simple portfolio frontend (React + TypeScript) and a Python backend (FastAPI) that exposes an AI chat endpoint powered by OpenRouter. It reads a resume PDF, provides the text to the model, and returns answers to questions about the resume.

Quick start

1. Backend

```powershell
cd "C:\Users\HP\Desktop\PROJECT\Emergence Software\backend"
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
uvicorn main:app --reload --port 8000
```

2. Frontend

```powershell
cd "C:\Users\HP\Desktop\PROJECT\Emergence Software\frontend"
npm install
npm run dev
```



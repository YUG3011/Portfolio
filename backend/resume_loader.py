from PyPDF2 import PdfReader
from typing import Optional

def load_resume_text(path: str) -> Optional[str]:
    try:
        reader = PdfReader(path)
        text = []
        for page in reader.pages:
            txt = page.extract_text()
            if txt:
                text.append(txt)
        return "\n\n".join(text)
    except Exception:
        return None

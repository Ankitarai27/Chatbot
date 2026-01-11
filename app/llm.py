import os
import google.generativeai as genai
from dotenv import load_dotenv
from app.persona import SYSTEM_PERSONA


load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")

def generate_reply(user_input, memory_snippets, mood):
    prompt = f"""
{SYSTEM_PERSONA}

User mood: {mood}

Relevant memory:
{memory_snippets}

User says:
"{user_input}"

Respond naturally and emotionally:
"""

    response = model.generate_content(prompt)
    return response.text

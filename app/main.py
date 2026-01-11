from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.schemas import ChatRequest
from app.memory import save_memory, recall_memory
from app.llm import generate_reply

# ✅ CREATE APP FIRST
app = FastAPI(title="STAN Chatbot")

# ✅ THEN ADD CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow frontend
    allow_credentials=True,
    allow_methods=["*"],  # allow POST, OPTIONS
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "STAN chatbot backend running"}

@app.post("/chat")
def chat(req: ChatRequest):
    memories = recall_memory(req.user_id)
    reply = generate_reply(req.message, memories, req.mood)
    save_memory(req.user_id, req.message)
    return {"reply": reply}

from pydantic import BaseModel

class ChatRequest(BaseModel):
    user_id: str
    message: str
    mood: str | None = "neutral"

class ChatResponse(BaseModel):
    reply: str
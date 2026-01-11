# app/memory.py

from collections import defaultdict

# in-memory store (safe for reload debugging)
_MEMORY = defaultdict(list)

def save_memory(user_id: str, text: str):
    _MEMORY[user_id].append(text)

def recall_memory(user_id: str):
    return _MEMORY[user_id][-3:]

# Chatbot
# 🤖 STAN – Conversational AI Chatbot

STAN is a full-stack conversational AI chatbot built using **FastAPI**, **React**, and **Google Gemini**.  
It supports **context-aware conversations** by storing and recalling recent chat history, enabling more natural and intelligent responses.

---

## ✨ Features

- 💬 Real-time AI chat interface
- 🧠 Context-aware responses using memory
- ⚡ FastAPI backend
- 🎨 Modern React frontend
- 🌐 Fully deployed (Frontend + Backend)
- 🔐 Secure API key handling with environment variables

---

## 🏗️ Tech Stack

### Frontend
- React (Vite)
- JavaScript
- CSS
- Deployed on **Vercel**

### Backend
- FastAPI
- Python
- Google Gemini API
- MongoDB Atlas (for chat memory)
- Deployed on **Render**

---

## 📂 Project Structure

```
Chatbot/
├── app/
│ ├── main.py # FastAPI app entry point
│ ├── llm.py # Gemini API integration
│ ├── memory.py # Chat memory storage & recall
│ ├── database.py # MongoDB connection
│ └── schemas.py # Request/response models
│
├── frontend-react/ # React frontend
│ ├── src/
│ ├── index.html
│ └── package.json
│
├── requirements.txt
├── start.sh
├── .gitignore
└── README.md
```

---

## ⚙️ Backend Setup (Local)

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/your-repo.git
cd Chatbot
```
### 2️⃣ Create Virtual Environment
```
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
```
###3️⃣ Install Dependencies
```
pip install -r requirements.txt
```
###4️⃣ Environment Variables
```
Create a .env file in the root directory:

GEMINI_API_KEY=your_gemini_api_key
```
###5️⃣ Run Backend Server
```
uvicorn app.main:app
```

Backend will run at:
```
http://localhost:8000

```

Swagger API Docs:

```
http://localhost:8000/docs
MONGO_URL=your_mongodb_atlas_connection_string
```
##🌐 Frontend Setup (Local)
###1️⃣ Navigate to Frontend Folder
```
cd frontend-react
```
###2️⃣ Install Frontend Dependencies
```
npm install
```
####3️⃣ Start Frontend Server
```
npm run dev

```
Frontend will run at:
```
http://localhost:5173

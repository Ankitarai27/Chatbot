# 🤖 STAN – Conversational AI Chatbot

A modern, full-stack **Conversational AI Chatbot** built with **FastAPI**, **React (Vite)**, and **Google Gemini**. STAN delivers **context-aware conversations** by intelligently storing and recalling recent chat history, enabling more natural, human-like interactions.

---

## 📖 Overview

**STAN** is designed as a production-ready AI chatbot with a clean frontend and a powerful backend. It demonstrates how to integrate a modern LLM (Google Gemini) with a scalable API architecture and a responsive UI.

The chatbot remembers recent conversations, allowing it to respond with context instead of treating every message in isolation.

---

## ✨ Key Features

* 💬 **Real-time conversational AI interface**
* 🧠 **Context-aware memory** for intelligent responses
* ⚡ **FastAPI-powered backend** for high performance
* 🎨 **Modern React (Vite) frontend**
* 🌐 **Fully deployed** (Frontend + Backend)
* 🔐 **Secure API key handling** using environment variables
* 📦 Clean, modular project structure

---

## 🏗️ Tech Stack

### 🎨 Frontend

* ⚛️ React (Vite)
* 🟨 JavaScript
* 🎨 CSS
* 🚀 Deployed on **Vercel**

### ⚙️ Backend

* 🐍 Python
* ⚡ FastAPI
* 🤖 Google Gemini API
* 🗄️ MongoDB Atlas (chat memory storage)
* ☁️ Deployed on **Render**

---

## 📂 Project Structure

```text
Chatbot/
├── app/
│   ├── main.py        # FastAPI application entry point
│   ├── llm.py         # Google Gemini API integration
│   ├── memory.py      # Chat memory storage & recall logic
│   ├── database.py    # MongoDB connection
│   └── schemas.py     # Request / Response models
│
├── frontend-react/    # React frontend
│   ├── src/
│   ├── index.html
│   └── package.json
│
├── requirements.txt   # Backend dependencies
├── start.sh           # Server start script
├── .gitignore         # Ignored files
└── README.md          # Project documentation
```

---

## ⚙️ Backend Setup (Local)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Ankitarai27/Chatbot.git
cd Chatbot
```

### 2️⃣ Create & Activate Virtual Environment

```bash
python -m venv venv

# macOS / Linux
source venv/bin/activate

# Windows
venv\Scripts\activate
```

### 3️⃣ Install Backend Dependencies

```bash
pip install -r requirements.txt
```

### 4️⃣ Configure Environment Variables

Create a **`.env`** file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key
MONGO_URL=your_mongodb_atlas_connection_string
```

> ⚠️ Never commit your `.env` file to GitHub.

### 5️⃣ Run the Backend Server

```bash
uvicorn app.main:app --reload
```

#### 🔗 Backend URLs

* API Base URL: `http://localhost:8000`
* Swagger Docs: `http://localhost:8000/docs`

---

## 🌐 Frontend Setup (Local)

### 1️⃣ Navigate to Frontend Folder

```bash
cd frontend-react
```

### 2️⃣ Install Frontend Dependencies

```bash
npm install
```

### 3️⃣ Start Frontend Development Server

```bash
npm run dev
```

#### 🔗 Frontend URL

```text
http://localhost:5173
```

---

## 🚀 Deployment

* **Frontend** deployed on **Vercel**
* **Backend** deployed on **Render**
* **MongoDB Atlas** used for cloud database

Ensure environment variables are correctly set in the deployment platforms.

---

## 🧪 Future Improvements

* 🔐 User authentication
* 📊 Chat analytics dashboard
* 🗂️ Long-term memory support
* 🌍 Multi-language support
* 🎙️ Voice-based interaction

---

## 📌 Reference

### 📺 For implementation reference and walkthrough, check the video  below:
```
https://drive.google.com/file/d/12AK1RDIRMHHgcaDgCqLmpj-34Rol-vxC/view?usp=sharing
```

---

## ⭐ Acknowledgements

* Google Gemini API
* FastAPI community
* React & Vite ecosystem

---

⭐ If you like this project, consider giving it a **star** on GitHub!

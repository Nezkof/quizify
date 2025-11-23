# Quizify

A simple and web app for taking quizzes. Uses a remote JSON bin.

**Stack:** React + Vite + TypeScript + Tailwind CSS.

---

## How to Run

### 1. Install Dependencies
Open your terminal in the project folder and run:

```bash
npm install
```

### 2. Environment Setup (.env)
Create a file named `.env` in the root directory of the project (next to `package.json`).
Add the variable with the link to your JSON data:

```env
VITE_JSON_BIN_URL=[https://api.jsonbin.io/v3/b/YOUR_BIN_ID/latest](https://api.jsonbin.io/v3/b/YOUR_BIN_ID/latest)
# Optional: If your JSONBin is private, add your API key:
# VITE_JSON_API_KEY=$2b$10$YOUR_API_KEY
```

### 3. Start the App
Run the local development server:

```bash
npm run dev
```
Open the link shown in the terminal (usually `http://localhost:5173`) to view the app.

---

## 📂 JSON Data Structure
The application expects the JSON data to follow this format:

```json
[
  {
    "question": "What is the capital of France?",
    "options": [
      { "text": "A) Berlin", "is_correct": false },
      { "text": "B) Madrid", "is_correct": false },
      { "text": "C) Paris", "is_correct": true },
      { "text": "D) Rome", "is_correct": false }
    ]
  }
]
```

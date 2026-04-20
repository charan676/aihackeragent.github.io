# 🤖 AI Hacker Agent

<div align="center">

A web-based AI-powered vulnerability scanner that autonomously detects security issues in web applications.

🔗 **Live Demo:** [https://aihackeragent.onrender.com](https://aihackeragent.onrender.com)

</div>

---

## 🚀 Features

- **Automated Vulnerability Scanning** — Detects XSS, SQL Injection, and more
- **Zero-API Costs** — Designed to work with local models via Ollama (e.g. Llama 3.2)
- **MCP Integration** — Uses Model Context Protocol to execute terminal commands efficiently
- **Continuous Automation** — Fully scriptable workflows using n8n
- **Real-time Results** — Clean UI with live scan feedback

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, Tailwind CSS |
| Backend | Node.js, Express |
| AI | Google Generative AI (`@google/genai`) |
| Animations | Motion (Framer Motion) |
| Routing | React Router DOM |
| Deployment | Render |

---

## 📦 Installation
```bash
# Clone the repository
git clone https://github.com/charan676/aihackeragent.github.io.git
cd aihackeragent.github.io

# Install dependencies
npm install

# Run in development
npm run dev
```

---

## 🔧 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Run frontend + backend concurrently |
| `npm run build` | Build frontend for production |
| `npm start` | Start production server |
| `npm run lint` | TypeScript type check |

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/scan` | Scan a URL for vulnerabilities |
| `GET` | `/api/docs` | View documentation |

---

## ⚠️ Safety Warning

> This tool is intended for **educational and authorized testing purposes only.**
> Never use this tool on systems you do not own or have explicit permission to test.

---

## 👤 Author

**RamCharan Narkedimilli** — [@charan676](https://github.com/charan676)

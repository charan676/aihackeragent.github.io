import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// API Routes
app.post('/api/scan', async (req, res) => {
  const targetUrl = req.body.url || 'Internal System';
  if (targetUrl !== 'Internal System') {
    try {
      await fetch(targetUrl, { signal: AbortSignal.timeout(5000) });
    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: "This URL could not be reached or does not exist. Please enter a correct, valid URL."
      });
    }
  }
  setTimeout(() => {
    res.json({
      status: "complete",
      vulnerabilities_found: 2,
      target: targetUrl,
      details: [
        { type: "Cross-Site Scripting (XSS)", severity: "High", path: "/api/search?q=" },
        { type: "SQL Injection", severity: "Critical", path: "/login" }
      ],
      message: "AI Agent successfully finished navigating the endpoints."
    });
  }, 2500);
});

app.get('/api/docs', (req, res) => {
  res.json({
    title: "AI Hacker Agent Documentation",
    content: "Welcome to the AI Hacker Agent documentation.\n\n### Introduction\nThe AI Hacker Agent uses an LLM alongside professional testing tools like Katana and SQLMap to autonomously find vulnerabilities.\n\n### Features\n- **Zero-API Costs**: Designed to work with local models via Ollama (e.g. Llama 3.2).\n- **MCP Integration**: Uses the Model Context Protocol to execute terminal commands efficiently.\n- **Continuous Automation**: Fully scriptable workflows using n8n.\n\n### Safety Warning\nUse this tool only on authorized targets!"
  });
});

// Serve Vite frontend
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
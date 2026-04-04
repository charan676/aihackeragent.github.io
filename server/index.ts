import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Mock endpoint for "Start Scan"
app.post('/api/scan', async (req, res) => {
  const targetUrl = req.body.url || 'Internal System';

  // Basic validation that the URL actually resolves on the internet
  if (targetUrl !== 'Internal System') {
    try {
      // Attempt to ping the URL to ensure it's a real live site
      await fetch(targetUrl, { signal: AbortSignal.timeout(5000) });
    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: "This URL could not be reached or does not exist. Please enter a correct, valid URL."
      });
    }
  }

  // Simulate some processing time
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
  }, 2500); // 2.5 second delay to show loading state nicely
});

// Mock endpoint for "View Documentation"
app.get('/api/docs', (req, res) => {
  res.json({
    title: "AI Hacker Agent Documentation",
    content: "Welcome to the AI Hacker Agent documentation.\n\n### Introduction\nThe AI Hacker Agent uses an LLM alongside professional testing tools like Katana and SQLMap to autonomously find vulnerabilities.\n\n### Features\n- **Zero-API Costs**: Designed to work with local models via Ollama (e.g. Llama 3.2).\n- **MCP Integration**: Uses the Model Context Protocol to execute terminal commands efficiently.\n- **Continuous Automation**: Fully scriptable workflows using n8n.\n\n### Safety Warning\nUse this tool only on authorized targets!"
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

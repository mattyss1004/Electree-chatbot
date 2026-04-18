const express = require("express");
const cors = require("cors");
const path = require("path");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors());
app.use(express.json({ limit: "2mb" }));

// Serve built React frontend
app.use(express.static(path.join(__dirname, "../client/dist")));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// ── /api/chat — main chat endpoint ──────────────────────────────────────────
app.post("/api/chat", async (req, res) => {
  const { system, messages, maxTokens } = req.body;

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: "GEMINI_API_KEY not configured" });
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: system || "",
      generationConfig: {
        maxOutputTokens: maxTokens || 1000,
        temperature: 0.3,
      },
    });

    // Convert messages array to Gemini history format
    const history = [];
    const lastMessage = messages[messages.length - 1];

    for (let i = 0; i < messages.length - 1; i++) {
      const m = messages[i];
      history.push({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      });
    }

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(lastMessage.content);
    const text = result.response.text();

    res.json({ content: text });
  } catch (err) {
    console.error("Gemini error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ── /api/route — lightweight router call (low token limit) ──────────────────
app.post("/api/route", async (req, res) => {
  const { system, message } = req.body;

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: "GEMINI_API_KEY not configured" });
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: system || "",
      generationConfig: {
        maxOutputTokens: 200,
        temperature: 0.1,
        responseMimeType: "application/json",
      },
    });

    const result = await model.generateContent(message);
    const text = result.response.text();
    res.json({ content: text });
  } catch (err) {
    console.error("Router error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// Fallback to React app for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Electree chatbot server running on port ${PORT}`);
});

/**
 * chat-widget.js — RAG Chatbot widget for arynelson.github.io/Site/
 *
 * API_BASE_URL → your VPS API URL (from DuckDNS)
 */

(function () {
  "use strict";

  // ── Config ─────────────────────────────────────────────────────────────────
  const API_BASE_URL = "https://ary-portfolio-api.duckdns.org";
  const MAX_LENGTH = 500;

  // ── State ──────────────────────────────────────────────────────────────────
  let isOpen = false;
  let isLoading = false;

  // ── Build DOM ──────────────────────────────────────────────────────────────
  function createWidget() {
    // Floating toggle button
    const toggle = document.createElement("button");
    toggle.id = "chat-toggle";
    toggle.setAttribute("aria-label", "Open chat assistant");
    toggle.textContent = "💬";
    toggle.addEventListener("click", toggleChat);

    // Chat window
    const win = document.createElement("div");
    win.id = "chat-window";
    win.classList.add("hidden");
    win.setAttribute("role", "dialog");
    win.setAttribute("aria-label", "Chat with Ary's assistant");

    // Header
    const header = document.createElement("div");
    header.id = "chat-header";
    header.innerHTML = "Ary's Assistant <span>Powered by Claude AI</span>";

    // Messages container
    const messages = document.createElement("div");
    messages.id = "chat-messages";
    messages.setAttribute("aria-live", "polite");

    // Input row
    const inputRow = document.createElement("div");
    inputRow.id = "chat-input-row";

    const input = document.createElement("textarea");
    input.id = "chat-input";
    input.placeholder = "Ask about Ary's experience...";
    input.rows = 1;
    input.maxLength = MAX_LENGTH;
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    const sendBtn = document.createElement("button");
    sendBtn.id = "chat-send";
    sendBtn.setAttribute("aria-label", "Send message");
    sendBtn.textContent = "→";
    sendBtn.addEventListener("click", sendMessage);

    inputRow.appendChild(input);
    inputRow.appendChild(sendBtn);
    win.appendChild(header);
    win.appendChild(messages);
    win.appendChild(inputRow);
    document.body.appendChild(toggle);
    document.body.appendChild(win);

    appendMessage("bot", "Hi! 👋 Ask me anything about Ary's experience, projects, or skills.");
  }

  // ── UI helpers ─────────────────────────────────────────────────────────────
  function toggleChat() {
    isOpen = !isOpen;
    const win = document.getElementById("chat-window");
    const toggle = document.getElementById("chat-toggle");
    if (isOpen) {
      win.classList.remove("hidden");
      toggle.textContent = "✕";
      document.getElementById("chat-input").focus();
    } else {
      win.classList.add("hidden");
      toggle.textContent = "💬";
    }
  }

  function appendMessage(role, text, extraClass) {
    const messages = document.getElementById("chat-messages");
    const div = document.createElement("div");
    div.classList.add("msg", role);
    if (extraClass) div.classList.add(extraClass);
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
    return div;
  }

  function setLoading(loading) {
    isLoading = loading;
    document.getElementById("chat-send").disabled = loading;
    document.getElementById("chat-input").disabled = loading;
  }

  // ── API call ───────────────────────────────────────────────────────────────
  async function sendMessage() {
    if (isLoading) return;
    const input = document.getElementById("chat-input");
    const text = input.value.trim();
    if (!text) return;

    input.value = "";
    appendMessage("user", text);

    setLoading(true);
    const typingEl = appendMessage("bot", "Thinking...", "typing");

    try {
      const response = await fetch(API_BASE_URL + "/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) {
        throw new Error("API error: " + response.status);
      }

      const data = await response.json();
      typingEl.remove();
      appendMessage("bot", data.answer);
    } catch (err) {
      typingEl.remove();
      appendMessage("bot", "Sorry, I couldn't connect right now. Try again in a moment.");
      console.error("[chat-widget]", err);
    } finally {
      setLoading(false);
    }
  }

  // ── Init ───────────────────────────────────────────────────────────────────
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createWidget);
  } else {
    createWidget();
  }
})();

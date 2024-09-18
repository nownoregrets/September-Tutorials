import { GoogleGenerativeAI } from "@google/generative-ai";

// Fetch your API_KEY
const API_KEY = "YOUR API KEY";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Chat Window
let chatWindow = document.getElementById("chat-content");
let userInput = document.getElementById("user-input");

document.getElementById("generate").addEventListener("click", async () => {
  // Create Prompt
  const prompt = userInput.value;
  const userMsg = document.createElement("p");
  userMsg.innerHTML = `<b>You: </b>${prompt}`;
  chatWindow.appendChild(userMsg);
  userInput.value = "";

  const result = await model.generateContent(prompt);

  // Create Element
  const response = document.createElement("p");
  response.innerHTML = `<b>AI: </b> ${result.response.text()};`;
  chatWindow.appendChild(response);
});


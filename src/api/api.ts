import axios from 'axios'; 

// Create an Axios instance configured with the chatbot API base URL,
// a request timeout of 1000ms, and a custom header.
const api = axios.create({
  baseURL: 'https://monarch-domain/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

// Sends a message with optional text and file to the chatbot API.
// Accepts an object with `text` (string) and `file` (File) properties.
// Returns the API response promise.
// TODO: After receiving response, update the chat history in global state.
async function sendMessageWithFile({ text, file }: { text?: string; file?: File }) {
  const response = await api.post('/bot', { text, file });
  return response;
}; 

// Fetches the chat history from the chatbot API.
// Returns the API response promise containing chat history data.
// TODO: After receiving response, update the chat history in global state.
async function fetchChatHistory() {
  const chatHistoty = await api.get('/bot');
  return chatHistoty;
}; 

// Export the functions for use in other parts of the application.
export { fetchChatHistory, sendMessageWithFile };

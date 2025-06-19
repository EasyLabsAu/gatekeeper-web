import React from "react";
import Page from "@/layout/modal";        // Page layout component providing full-screen backdrop and centering
import ChatBox from "@/layout/chatbox";   // ChatBox layout containing profile, messages, and input
import Chats from "@/components/chatbox/chats"; // Component rendering chat messages
import Profile from "@/components/chatbox/profile"; // (Imported but unused here)

/**
 * Main application component
 * Wraps the chat UI inside a modal-style page layout
 */
function App() {
  return (
    <>
      {/* Page provides the backdrop and centers the content */}
      <Page>
        <ChatBox/>
      </Page>
    </>
  );
}

export default App;

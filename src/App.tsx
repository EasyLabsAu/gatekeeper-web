// import React from "react";
import Page from "@/layout/modal";
import ChatBox from "@/layout/chatbox";
import Chats from "@/components/chatbox/chats";
// import Profile from "@/components/chatbox/profile";
function App() {
  return (
    <>
      <Page>
        <ChatBox>
          <Chats />
        </ChatBox>
      </Page>
    </>
  );
}

export default App;

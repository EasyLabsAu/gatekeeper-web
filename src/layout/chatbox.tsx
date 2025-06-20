import Profile from "@/components/chatbox/profile";
import Input from "@/components/chatbox/input";
import{useState} from 'react'
import Chats from "@/components/chatbox/chats";

// ChatBox is a layout wrapper for the chat UI
// It contains a header (Profile), scrollable chat content, and a fixed input area
function ChatBox() {
const [chatHistory, setChatHistory] = useState<any>([]);
// const [profile, setProfile]= useState(); 
// include the logic to request information from backend to update the history
//
  return (
    // Container with fixed width and height, vertical layout, rounded border
    <div className="w-[400px] h-[600px] flex flex-col border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-white">
      
      {/* Header section (e.g., user info or chat title) */}
      <div>
        <Profile info={null} />
      </div>

      {/* Main chat content area that scrolls as messages fill the space */}
      <div className="flex-1 overflow-y-auto">
       <Chats chats={chatHistory}/>
      </div>

      {/* Fixed input area at the bottom of the chat box */}
      <div>
        <Input chatHistory={chatHistory} setHistory={setChatHistory} />
      </div>
    </div>
  );
}

export default ChatBox;



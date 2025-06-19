import Profile from "@/components/chatbox/profile";
import Input from "@/components/chatbox/input";
// import react from "react";

function ChatBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-max-1/2 w-max-2/3 flex flex-col border border-gray-300 rounded-lg overflow-hidden shadow-sm">
      <div>
        <Profile info={null} />
      </div>
      <div className="h-full w-full">{children}</div>
      <div>
        <Input />
      </div>
    </div>
  );
}

export default ChatBox;

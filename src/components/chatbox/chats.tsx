import React from "react";

// Chats component displays the chat messages area
// TODO: Replace static messages with dynamic chat history from global state
function Chats() {

  // TODO: Fetch and render an array of chat messages (both outgoing and incoming)
  // This will likely come from a global state management solution (e.g., Context, Redux)

  

  return (
    // Container fills available space, enables vertical scrolling,
    // arranges messages vertically with spacing between them
    <div className="h-full w-full overflow-y-auto flex gap-10 p-4 flex-col">
      
      {/* Example of an outgoing message bubble aligned to the right */}
      <div className="self-end bg-gray-200 text-black p-2 rounded-lg max-w-[70%] break-words">
        outgoing texts blah blah blah blah....
      </div>
      
      {/* Example of an incoming message bubble aligned to the left */}
      <div className="self-start bg-violet-500 text-white p-2 rounded-lg max-w-[70%] break-words">
        incoming texts blah blah blah blah.....
      </div>
    </div>
  );
}

export default Chats;

import React from "react";

// Define the shape of a chat message object using an interface
interface IChat {
  id: number;           // Unique identifier for each chat message (used as React key)
  sender: string;       // Either "user" or "bot" to determine message style and alignment
  message: string;      // The content/text of the chat message
  timestamp: Date;      // Date object representing when the message was sent
}

function Chats({ chats }: { chats?: IChat[] }) {
  // chats: array of chat messages passed as a prop
  // Each message will be rendered with styling based on sender type
  
  return (
    // Main container div that fills available space and allows vertical scrolling
    // Displays chat messages stacked vertically with spacing between them
    <div className="h-full w-full overflow-y-auto flex gap-4 p-4 flex-col">
      {/* Loop through each chat message and render it */}
      {chats?.map((chat) => (
        chat.sender === "user" ? (
          // User's outgoing message bubble, aligned to the right
          <div
            key={chat.id} // Key to help React efficiently update the list
            className="self-end bg-gray-200 text-black p-2 rounded-lg max-w-[70%] break-words"
          >
            {/* Display chat message text */}
            <div>{chat.message}</div>

            {/* Show formatted timestamp below the message */}
            <div className="text-xs text-gray-500 text-right mt-1">
              {chat.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </div>
          </div>
        ) : (
          // Bot's incoming message bubble, aligned to the left
          <div
            key={chat.id}
            className="self-start bg-violet-500 text-white p-2 rounded-lg max-w-[70%] break-words"
          >
            {/* Display chat message text */}
            <div>{chat.message}</div>

            {/* Show formatted timestamp below the message */}
            <div className="text-xs text-gray-300 text-left mt-1">
              {chat.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </div>
          </div>
        )
      ))}
    </div>
  );
}

export default Chats;

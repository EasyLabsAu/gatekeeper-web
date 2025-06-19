import React, { useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Upload, X } from "lucide-react";

// Chat input component: allows user to type messages, attach files, and send them
function Input({
  chatHistory,
  setHistory,
}: {
  chatHistory: any[]; // The current chat messages array (loose typing)
  setHistory: (newHistory: any[]) => void; // Function to update chat messages
}) {
  // Reference to the hidden file input element for triggering file picker
  const chatFileInputRef = useRef<HTMLInputElement | null>(null);

  // State to store the current text message being typed
  const [message, setMessage] = useState("");

  // State to hold files selected by the user before sending
  const [files, setFiles] = useState<File[]>([]);

  // When the user clicks the upload button, trigger the hidden file input click
  function uploadFile() {
    chatFileInputRef.current?.click();
  }

  // Handle file input change: add newly selected files to existing files array
  function upload(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      setFiles([...files, ...Array.from(event.target.files)]);
    }
  }

  // Update the message state as the user types in the textarea
  function saveText(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.target.value);
  }

  // Remove a file from the selected files list by index
  function removeFile(index: number) {
    setFiles(files.filter((_, i) => i !== index));
  }

  // Called when user sends the message (via button or Enter key)
  function postRequest() {
    // Prevent sending if message is empty and no files attached
    if (!message.trim() && files.length === 0) return;

    // Add the new user message to the chat history, including files and timestamp
    setHistory([
      ...chatHistory,
      { sender: "user", message, file: files, timestamp: new Date() },
    ]);

    // send the information  to the backend and then take the response ans add it to the history

    // Clear the input message and attached files after sending
    setMessage("");
    setFiles([]);
  }

  return (
    <div className="w-full p-2 border-t bg-white space-y-2">
      {/* Display attached files preview with remove option */}
      {files.length > 0 && (
        <div className="flex gap-2 flex-wrap px-1">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-sm"
            >
              {/* Show file name truncated if too long */}
              <span className="truncate max-w-[140px]">{file.name}</span>
              {/* Button to remove file from selection */}
              <button onClick={() => removeFile(index)}>
                <X className="w-4 h-4 text-gray-500 hover:text-red-500" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Main input area: textarea for typing, upload and send buttons */}
      <div className="w-full flex items-center bg-gray-100 border border-gray-300 rounded-full p-4 gap-1">
        {/* Textarea for user to type message */}
        <Textarea
          id="chat-text"
          className="w-full resize-none border-none bg-transparent focus:outline-none focus:ring-0 focus:border-none overflow-y-auto max-h-24"
          placeholder="Type a message..."
          rows={1}
          value={message}
          onChange={saveText}
          onKeyDown={(e) => {
            // Send message on Enter key (Shift+Enter for newline)
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              postRequest();
            }
          }}
        />
        {/* Button to send the message */}
        <Button
          onClick={postRequest}
          className="rounded-full bg-purple-500 hover:bg-violet-500"
          size="icon"
          title="Send"
        >
          <Send className="w-5 h-5 text-white"/>
        </Button>
        {/* Hidden file input for selecting files */}
        <input
          id="chat-file-upload"
          type="file"
          className="hidden"
          ref={chatFileInputRef}
          onChange={upload}
          multiple
        />

        {/* Button to trigger file picker */}
        <Button
          onClick={uploadFile}
          className="rounded-full bg-purple-500 hover:bg-violet-500"
          size="icon"
          title="Attach file"
        >
          <Upload className="w-5 h-5 text-white" />
        </Button>

      </div>
    </div>
  );
}

export default Input;

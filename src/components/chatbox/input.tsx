import React, { useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Upload, X } from "lucide-react";

// Chat input component allowing text input and file uploads
function Input() {
  // Ref for triggering the hidden file input
  const chatFileInputRef = useRef<HTMLInputElement | null>(null);

  // State to track typed message
  const [message, setMessage] = useState("");

  // State to store selected files
  const [files, setFiles] = useState<File[]>([]);

  // Trigger the file picker when the upload button is clicked
  function uploadFile() {
    chatFileInputRef.current?.click();
  }

  // Handle file selection and add files to state
  function upload(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      setFiles([...files, ...Array.from(event.target.files)]);
    }
  }

  // Update message state as the user types
  function saveText(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.target.value);
  }

  // Remove a file from the file preview list
  function removeFile(index: number) {
    setFiles(files.filter((_, i) => i !== index));
  }

  // Send message and files, then clear input
  function postRequest() {
    if (!message.trim() && files.length === 0) return;

    // Replace this with actual backend integration
    console.log("Sending:", { message, files });

    // Reset message and files after sending
    setMessage("");
    setFiles([]);
  }

  return (
    <div className="w-full p-2 border-t bg-white space-y-2">
      {/* Preview of attached files (shows filename with remove button) */}
      {files.length > 0 && (
        <div className="flex gap-2 flex-wrap px-1">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-sm"
            >
              <span className="truncate max-w-[140px]">{file.name}</span>
              <button onClick={() => removeFile(index)}>
                <X className="w-4 h-4 text-gray-500 hover:text-red-500" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Main input area with message box and buttons */}
      <div className="w-full flex items-center bg-gray-100 border border-gray-300 rounded-full p-4 gap-1">
        {/* Message text input */}
        <Textarea
          id="chat-text"
          className="w-full resize-none border-none bg-transparent focus:outline-none focus:ring-0 focus:border-none overflow-y-auto max-h-24"
          placeholder="Type a message..."
          rows={1}
          value={message}
          onChange={saveText}
          onKeyDown={(e) => {
            // Press Enter to send, Shift+Enter for newline
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              postRequest();
            }
          }}
        />

        {/* Hidden input for file selection */}
        <input
          id="chat-file-upload"
          type="file"
          className="hidden"
          ref={chatFileInputRef}
          onChange={upload}
          multiple
        />

        {/* Upload (attach file) button */}
        <Button
          onClick={uploadFile}
          className="rounded-full bg-purple-500 hover:bg-violet-500"
          size="icon"
          title="Attach file"
        >
          <Upload className="w-5 h-5 text-white" />
        </Button>

        {/* Send message button */}
        <Button
          onClick={postRequest}
          className="rounded-full bg-purple-500 hover:bg-violet-500"
          size="icon"
          title="Send"
        >
          <Send className="w-5 h-5 text-white" />
        </Button>
      </div>
    </div>
  );
}

export default Input;


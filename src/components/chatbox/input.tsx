import React, { useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Upload } from "lucide-react";

function Input() {
  // todo: define local state for file storage and text storage
  // todo: define post api request to backend
  const chatFileInputRef = useRef<HTMLInputElement | null>(null);

  function uploadFile() {
    chatFileInputRef.current?.click(); // triggers the file picker
  }
  function upload() {
    // todo: save the file upload into the local state
  }

  function saveText() {
    // todo: save the text typed into the local state
  }

  function postRequest() {
    // todo: send a post request of saved information from local state to the backend
  }

  return (
    <div className="w-full flex items-center border gap-4 p-2">
      <Textarea
        id="chat-text"
        className="w-full"
        placeholder="Type a message..."
      />

      <div className="flex gap-1">
        {/* Send Button */}
        <Button
          className="rounded-full bg-purple-500 hover:bg-violet-500"
          size="icon"
          onClick={postRequest}
        >
          <Send className="w-5 h-5 text-white" />
        </Button>

        {/* Upload Button with Hidden Input */}
        <input
          id="chat-file-upload"
          type="file"
          className="hidden"
          ref={chatFileInputRef}
        />
        <Button
          onClick={uploadFile}
          className="rounded-full bg-purple-500 hover:bg-violet-500"
          size="icon"
        >
          <Upload className="text-white w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}

export default Input;

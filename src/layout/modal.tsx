import React from "react";

// Page component acts as a full-screen container
// It centers its children both vertically and horizontally
// Applies a semi-transparent white background with blur effect for nice backdrop styling
function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        className="h-screen w-screen bg-white/30 backdrop-blur-lg flex flex-col justify-center items-center"
      >
        {/* Render any nested content passed as children */}
        {children}
      </div>
    </>
  );
}

export default Page;

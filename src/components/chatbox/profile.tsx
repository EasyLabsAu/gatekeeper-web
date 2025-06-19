import React from "react";
import { Image } from "@radix-ui/react-avatar";

function Profile({ info }: { info: any }) {
  // todo: check if the backend is responding or connected, update the color of backend-status element
  // todo : grab the information from the backend eg.name and status then display it in the banner. make it dynamic

  return (
    <>
      <div className="w-full  flex flex-col bg-gradient-to-l from-purple-500 to-violet-600 text-white p-3 break-words items-center">
        <div className="w-full flex gap-1 ">
          <img
            src="/avatar.jpg"
            alt="Avatar"
            className="w-12 h-12 rounded-full border-2 border-white shadow-lg object-cover"
          />
          <div
            id="status"
            className="h-100% flex flex-col justify-end items-center"
          >
            <div
              id="backend-status"
              className=" rounded-full h-1 w-1 bg-green-200 p-1"
            />
          </div>
          <div className=" flex text-center justify-center items-center">
            <p className="text-md font-semibold">Virtual Gatekeeper</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

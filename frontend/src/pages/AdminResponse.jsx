import React from "react";
import UserResponse from "../component/UserResponse";

function AdminResponse() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-10">
        <div className="text-center">
          <span className="text-xl">Response Details</span>
        </div>
        <div className="ml-0 md:ml-[500px]">
          <div >
            <UserResponse />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminResponse;

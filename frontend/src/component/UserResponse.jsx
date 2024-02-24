import React from 'react';

function UserResponse(props) {
  return (
    <div className="flex flex-row">
      <div className="bg-gray-200 p-4 rounded-lg mb-4">
        <div className="text-gray-700">
          <p className="font-bold">From: {props.name}</p>
          <p>Email: {props.email}</p>
          <p>Subject: {props.subject}</p>
          <p>Message: <strong>{props.message}</strong></p>
        </div>
      </div>
    </div>
  );
}

export default UserResponse;



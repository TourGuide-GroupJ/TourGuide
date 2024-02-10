import React from 'react'

function UserResponse() {
  return (
    <div className="flex flex-row">
    <table className="p-5">
      <thead></thead>
      <tbody>
        <tr>
          <td>
            <span>user_name - </span>
          </td>
        </tr>
        <tr>
          <td>
            <span>user_email - </span>
          </td>
        </tr>
        <tr>
          <td>
            <span>subject - </span>
          </td>
        </tr>
        <tr>
          <td>
            <span>message - </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default UserResponse
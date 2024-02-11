import React, { useState, useEffect } from "react";
import UserResponse from "../component/UserResponse";
import axios from "axios";

const ResponseComponent = ({ response }) => {
  return (
    <div>
      <UserResponse 
      name={response.user_name}
      email={response.user_email}
      subject={response.subject}
      message={response.message}
      />
    </div>
  );
};

function AdminResponse() {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResponses = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:4000/adminResponse");
        console.log("Response data:", response.data); // Log the response data
        setResponses(response.data.Responses);
        console.log(responses);
      } catch (error) {
        console.error("Error fetching response data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResponses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log("Responses:", responses); // Log the responses before rendering

  return (
    <div className="w-full">
      <div className="flex flex-col gap-10">
        <div className="text-center">
          <span className="text-xl">Response Details</span>
        </div>
        <div className="ml-0 md:ml-[500px]">
          <div className="flex flex-col gap-5">
            {responses.map((response, index) => (
              <ResponseComponent key={index} response={response} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminResponse;

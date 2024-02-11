import React, { useState } from "react";

const HotelRating = () => {
  const [rating, setRating] = useState(0);
  const [isRatingVisible, setIsRatingVisible] = useState(false);

  const handleStarClick = (index) => {
    // Update the rating when a star is clicked only if the rating form is visible
    if (isRatingVisible) {
      setRating(index + 1);
    }
  };

  const openRatingForm = () => {
    // Show the rating form when "Rate this hotel" button is clicked
    setIsRatingVisible(true);
  };

  const closeRatingForm = () => {
    // Close the rating form when canceled or submitted
    setIsRatingVisible(false);
  };

  const submitRating = () => {
    // Implement logic to submit the rating
    // For now, let's just close the rating form
    closeRatingForm();
  };

  return (
    <div>
      {/* Display current rating */}
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${
              index < rating ? "text-yellow-300" : "text-gray-300"
            } ms-1 cursor-pointer`}
            onClick={() => handleStarClick(index)}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
        <span className="ml-1 text-gray-500">{rating} / 5</span>
      </div>
      {/* Button to open rating form */}
      <button
        className="px-4 py-2 mt-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={openRatingForm}
      >
        Rate this hotel
      </button>

      {/* Rating form */}
      {isRatingVisible && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
          <div className="p-4 bg-white rounded shadow-lg">
            <h2 className="mb-2 text-lg font-bold">Rate this hotel</h2>
            {/* Display stars for rating */}
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-4 h-4 ${
                    index < rating ? "text-yellow-300" : "text-gray-300"
                  } cursor-pointer`}
                  onClick={() => handleStarClick(index)}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              <span className="ml-1 text-gray-500">{rating} / 5</span>
            </div>
            <div className="flex justify-end mt-4">
              {/* Button to submit the rating */}
              <button
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                onClick={submitRating}
              >
                Submit
              </button>
              {/* Button to cancel */}
              <button
                className="px-4 py-2 ml-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700"
                onClick={closeRatingForm}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelRating;

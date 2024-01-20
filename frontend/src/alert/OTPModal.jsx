import React, { useState, useEffect } from 'react';


export default function OTPModal({ show, handleClose, handleVerifyOtp, handleResendOtp }) {
  const [otp, setOtp] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    if (alertMessage) {
      // Automatically close the alert after 3 seconds
      const timer = setTimeout(() => {
        setAlertMessage('');
        handleClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [alertMessage, handleClose]);

  const handleVerify = async () => {
    const success = await handleVerifyOtp(otp);
    if (success) {
      setAlertMessage('OTP verified successfully!');
    } else {
      setAlertMessage('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${show ? 'block' : 'hidden'}`}>
      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div
          className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-headline">
                  Enter OTP
                </h3>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className="w-full p-2 border rounded-md"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">{alertMessage}</p>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={handleVerify}
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Verify OTP
            </button>
            <button
              onClick={handleResendOtp}
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Resend OTP
            </button>
            <button
              onClick={handleClose}
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import image from "../assets/fisherman.jpg";
import axios from "axios";

const ContactUs = () => {
  const [responses, setResponses] = useState({});

  const giveResponse = (event) => {
    setResponses({ ...responses, [event.target.name]: event.target.value });
  };

  async function sendResponse(event) {
    event.preventDefault();

    try {
      await axios
        .post("http://localhost:4000/contactUs", responses)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          alert(error);
        });
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  // Logging responses within the component
  console.log(responses);

  return (
    <div>
      <Navbar />

      <div className="flex mt-[100px]">
        <div className="hidden sm:block">
          <img
            className="object-cover "
            src={image}
            width="690"
            h-full
            alt="Contact Us Image"
          />
        </div>
        <div className="p-10 bg-white w-[1000px] H-[500px]">
          <div>
            <span className="mt-0 text-4xl font-bold">CONTACT US</span>
            <form>
              <div>
                <div className="mt-5">
                  <p>Your Name:</p>
                  <input
                    className="border-black border-solid border-[2px] w-[400px] H-[5px] rounded-lg"
                    type="text"
                    placeholder="Name"
                    name="user_name"
                    onChange={giveResponse}
                    required
                  />
                </div>

                <div className="mt-5">
                  <p>Your Email:</p>
                  <input
                    className="border-black border-solid border-[2px] w-[400px] H-[5px] rounded-lg"
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    onChange={giveResponse}
                    required
                  />
                </div>

                <div className="mt-5">
                  <p>Subject:</p>
                  <input
                    className="border-black border-solid border-[2px] w-[400px] H-[5px] rounded-lg"
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    onChange={giveResponse}
                    required
                  />
                </div>

                <div className="mt-5">
                  <p>Your Message:</p>
                  <textarea
                    className="border-black border-solid border-[2px] w-[400px] H-[100px] rounded-lg"
                    name="message"
                    placeholder="Enter message"
                    cols="25"
                    rows="9"
                    onChange={giveResponse}
                  ></textarea>
                </div>
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  onClick={sendResponse}
                  className="bg-cyan-500 --btn--btn--primary border-black border-solid border-[2px] w-[125px] H-[3px] rounded-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="mt-10">
            <span className="text-3xl font-bold">CONTACT INFO</span>
            <div className="mt-5">
              <span className="text-2xl ">Mobile:</span>
            </div>
            <p>+94 75 617 0089</p>
            <p>+94 77 169 0582</p>
            <p>+94 76 289 9016</p>
            <p>+94 77 008 9761</p>
            <div className="mt-5">
              <span className="text-2xl ">Email:</span>
            </div>
            <p>travelguidesl2023@gmail.com</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;

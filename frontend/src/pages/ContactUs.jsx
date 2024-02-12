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

  return (
    <div>
      <Navbar />

      <div className="flex flex-col lg:flex-row mt-20">
        <div className="lg:w-1/2 mt-5">
          <img
            className="object-cover w-full h-auto"
            src={image}
            alt="Contact Us Image"
          />
        </div>
        <div className="p-4 lg:p-10 bg-white lg:w-1/2">
          <div>
            <h1 className="text-4xl font-bold">CONTACT US</h1>
            <form>
              <div className="mt-5">
                <p>Your Name:</p>
                <input
                  className="border border-black w-full h-10 rounded-lg"
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
                  className="border border-black w-full h-10 rounded-lg"
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
                  className="border border-black w-full h-10 rounded-lg"
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
                  className="border border-black w-full h-24 rounded-lg"
                  name="message"
                  placeholder="Enter message"
                  cols="25"
                  rows="9"
                  onChange={giveResponse}
                ></textarea>
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  onClick={sendResponse}
                  className="bg-cyan-500 border border-black w-full h-10 rounded-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="mt-10">
            <h2 className="text-3xl font-bold">CONTACT INFO</h2>
            <div className="mt-5">
              <span className="text-2xl ">Mobile:</span>
              <p>+94 75 617 0089</p>
              <p>+94 77 169 0582</p>
              <p>+94 76 289 9016</p>
              <p>+94 77 008 9761</p>
            </div>
            <div className="mt-5">
              <span className="text-2xl ">Email:</span>
              <p>travelguidesl2023@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;

import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import image from "../assets/Fisherman.jpg";

const ContactUs = () => {

  return (
    <div>
      <Navbar />

      <div className="flex mt-[120px]">
      <div className="hidden sm:block">
        <img className = "object-cover " src={image} width="690" height="500" />
      </div>
      <div className="p-10 bg-white w-[1000px] H-[500px]">
        <div>
          <span className="mt-0 text-4xl font-bold text-green-600">CONTACT US</span>
          <form >
            <div>
                <div className="mt-5">
                <p>Your Name:</p>
                <input
                  className="border-black border-solid border-[2px] w-[400px] H-[5px] rounded-lg"
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  required/>
              </div>
              
              <div className="mt-5">
              <p>Your Email:</p>
              <input
                className="border-black border-solid border-[2px] w-[400px] H-[5px] rounded-lg"
                type="email"
                placeholder="Email"
                name="user_email"
                required />
              </div>

              <div className="mt-5">
              <p>Subject:</p>
              <input
                className="border-black border-solid border-[2px] w-[400px] H-[5px] rounded-lg"
                type="text"
                placeholder="Subject"
                name="subject"
                required/>
                </div>

              <div className="mt-5">
              <p>Your Message:</p>
              <textarea
                className="border-black border-solid border-[2px] w-[400px] H-[100px] rounded-lg"
                name="message"
                placeholder="Enter message"
                cols="25"
                rows="9"
              ></textarea>
              </div>
              
            </div>
            <div className="mt-5">
              <button
                type="submit"
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
          <p>travelguide2223@gmail.com</p>
        </div>
      </div>
    </div>


      <Footer/>
    </div>
  );
};

export default ContactUs;

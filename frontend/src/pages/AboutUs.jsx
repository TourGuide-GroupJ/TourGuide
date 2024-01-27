import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import image from "../assets/img_3 new.jpg";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="flex mt-[110px]">
        <div className="hidden sm:block">
        <img className = "object-cover " src={image} width="600" height="500" />
        </div>
        <div className="p-20 bg-white w-[1000px] H-[500px]">
        <span className="text-4xl font-bold">ABOUT US</span>
        <div className="mt-5">
          <p>In 2023, we decided to create travel guide web application.The purpose of this web application is to provide
a comprehensive and user-friendly web application for tourists visiting Sri Lanka as well as local tourists,
offering detailed information, resources, and tools to enhance their travel experience.</p>
          <div className="mt-5"></div>
          <p>By showcasing attractions, events, excursion, adventures, festivals, accommodations, equipment rentals etc.
The integration of nearby hotels and accommodations will simplify the booking process, ensuring convenient
and comfortable stays. Moreover, the inclusion of professional guides will enable tourists to engage  with
knowledgeable experts who can provide valuable insights and assistance during their exploration.The option
to rent camping equipment,bikes and three-wheelers will provide convenience and flexibility for adventurous
travelers.</p>
          <div className="mt-5"></div>
          <span className="text-2xl ">BEST FEATURES</span>
          <div className="mt-5"></div>
          <p>The interactive map feature will aid in locating and navigating to various destinations, while the review /
comment /rating system will allow users to share their experiences and guidefuture travelers. Furthermore,
the personalized time scheduling / itinerary planning feature and budget calculator will empower users to 
optimize their time and expenses, enabling them to create tailored schedules and effectively manage their 
budgets.</p>
          <div className="mt-5"></div>
          <span className="text-2xl ">OUR AIM</span>
          <div className="mt-5"></div>
          <p>While there may be other websites or applications providing information about tourist attractions in Sri 
Lanka, our application sets itself apart by offering a comprehensive range of services and resources that
cater to the diverse needs of travelers.Overall, Our aims to create a comprehensive and user-centric tour
guide web application that enhances the travel experience in Sri Lanka.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;

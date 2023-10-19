import React from "react";
import Navbar from "../component/Navbar";
import Event from "../component/Event";

//images
import Sigiriya from "../assets/sigirya.jpg";
import DhaladaMaligawa from "../assets/DhaladaMaligawa.jpg";
import KandyEsalaPerahera from "../assets/KandyEsalaPerahera.jpg";
import Kithulgala from "../assets/Kithulgala.jpg";
import Yala from "../assets/Yala.jpg";
import Book from "../assets/Book.jpg";

const Home = () => {
  return (
    <div className=" relative">
      <img src={Sigiriya} />
      <h1 className=" absolute text-5xl text-center uppercase left-0 right-0 top-[150px]">
        Welcome to Sri Lanka
      </h1>

      <Navbar />

      <div>
        <p className="mt-[15px] text-lg text-justify p-[15px]">
          Welcome to the ultimate Sri Lankan adventure companion! Our Tour Guide
          Web Application is your gateway to the enchanting wonders of this
          beautiful island. Explore a treasure trove of attractions, events, and
          festivals, complete with captivating photos and videos that will whisk
          you away into the heart of Sri Lanka's culture and natural beauty.
          Whether you're an adrenaline junkie seeking outdoor thrills like water
          rafting, camping, hiking, and safari tours, or a traveler in search of
          cozy accommodations, our platform has you covered. Engage with
          seasoned professional guides who will unveil the secrets of each
          location, turning your journey into an unforgettable odyssey. Plan
          your days with ease using our customized scheduling tool, ensuring you
          make the most of your time. Worried about costs? Our budget calculator
          is here to help, providing insight into hotel stays, dining, and other
          expenses, so you can travel with peace of mind. Let's embark on this
          adventure together; the magic of Sri Lanka awaits you!
        </p>
      </div>
      <div className="flex justify-between p-[60px]">
        <Event
          eventName="Attraction"
          eventImg={Sigiriya}
          eventDescription="Ascend the ancient Sigiriya Rock Fortress, a UNESCO World Heritage site, and discover the ruins of a 5th-century palace atop a towering rock. Explore the mesmerizing frescoes, lush gardens, and breathtaking views at this historical marvel. Don't forget to capture the moment as you stand atop the Lion Rock!"
        />
        <Event
          eventName="Heritage"
          eventImg={DhaladaMaligawa}
          eventDescription="Immerse yourself in the spirituality and rich heritage of Sri Lanka at the Temple of the Tooth Relic. This sacred Buddhist temple in Kandy houses a relic of the Buddha's tooth, making it a significant pilgrimage site. The intricate architecture and serene ambiance create a truly awe-inspiring experience."
        />
        <Event
          eventName="Festival"
          eventImg={KandyEsalaPerahera}
          eventDescription="Join the grand spectacle of Esala Perahera, one of Sri Lanka's most vibrant and enchanting festivals. This annual procession in Kandy features a magnificent display of traditional dance, music, beautifully adorned elephants, and fire-breathers. It's a sensory feast that will leave you spellbound."
        />
      </div>
      <div className="flex justify-between p-[60px]">
        <Event
          eventName="Adventure"
          eventImg={Kithulgala}
          eventDescription="Seek an adrenaline rush amidst nature's beauty with white-water rafting in Kitulgala. Navigate the thrilling rapids of the Kelani River as you enjoy an exhilarating adventure. It's a perfect escapade for adventure enthusiasts and nature lovers alike."
        />
        <Event
          eventName="Wild"
          eventImg={Yala}
          eventDescription="Get ready for a wild adventure at Yala National Park, home to diverse wildlife, including leopards, elephants, and a plethora of bird species. The thrill of spotting these majestic creatures in their natural habitat is an experience you'll treasure forever."
        />
        <Event
          eventName="Event"
          eventImg={Book}
          eventDescription="Immerse yourself in the world of words at the Galle Literary Festival. This annual event in the historic city of Galle brings together acclaimed authors, poets, and literary enthusiasts from around the world. Engage in discussions, book readings, and cultural exchanges in a charming colonial setting."
        />
      </div>
    </div>
  );
};

export default Home;

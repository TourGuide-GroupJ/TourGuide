import React from 'react'
import Navbar from '../component/Navbar'
import './Home.css'
import Event from '../component/Event'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <p className='description'>Welcome to the ultimate Sri Lankan adventure companion! Our Tour Guide Web Application is your gateway to the enchanting wonders of this beautiful island. Explore a treasure trove of attractions, events, and festivals, complete with captivating photos and videos that will whisk you away into the heart of Sri Lanka's culture and natural beauty. Whether you're an adrenaline junkie seeking outdoor thrills like water rafting, camping, hiking, and safari tours, or a traveler in search of cozy accommodations, our platform has you covered. Engage with seasoned professional guides who will unveil the secrets of each location, turning your journey into an unforgettable odyssey. Plan your days with ease using our customized scheduling tool, ensuring you make the most of your time. Worried about costs? Our budget calculator is here to help, providing insight into hotel stays, dining, and other expenses, so you can travel with peace of mind. Let's embark on this adventure together; the magic of Sri Lanka awaits you!</p>
        </div>
        <div className='eventRow1'>
            <Event eventName='Attraction'/>
            <Event eventName='Heritage'/>
            <Event eventName='Festival'/>
        </div>
        <div className='eventRow2'>
            <Event eventName='Adventure'/>
            <Event eventName='Wild'/>
            <Event eventName='Event'/>
        </div>
    </div>
  )
}

export default Home

import React from 'react'
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Division from "../component/AttractCom";

import Anuradhapura from "../assets/Anuradhapura.jpg"
import centralHighland from "../assets/centralHighland.jpg"
import galleFort from "../assets/galleFort.jpg"
import kandy from "../assets/kandy.jpg"
import Polonnaruwa from "../assets/Polonnaruwa.jpg"
import rangiriDambullatemple from "../assets/rangiriDambullatemple.jpg"
import Sigiriya from "../assets/Sigiriya.jpg"
import Sinharajaya from "../assets/Sinharajaya.jpg"

const Heritage = () => {
  return (
    <div>
    <Navbar />
    <div>
      <h1 className=" uppercase text-4xl mt-[100px] font-semibold text-center ">
        Heritages
      </h1>
    </div>
    <div>
      

      <div className="flex justify-center">
        <div className=" mt-5 max-w-[1200px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-20 gap-y-20">
          <div>
            <Division
              name="Anuradhapura"
              img={Anuradhapura}
              description="Anuradhapura, a political and religious capital of Ceylon, thrived for 1,300 years until an invasion in 993 led to its abandonment. After being hidden in dense jungle, the site is now accessible."
            />
          </div>
          <div>
            <Division
              name="Central Highland"
              img={centralHighland}
              description="Sri Lanka's highlands, located in the island's south-central region, encompass the Peak Wilderness, Horton Plains, and Knuckles Conservation areas, renowned for their rich biodiversity, including endangered species."
            />
          </div>
          <div>
            <Division
              name="Galle Fort"
              img={galleFort}
              description="Established by the Portuguese in the 16th century, Galle peaked in the 18th century, exemplifying European fortifications in South and South-East Asia, blending European architecture with South Asian traditions."
            />
          </div>
          <div>
            <Division
              name="Temple of Tooth Relic"
              img={kandy}
              description=" Known as Senkadagalapura, this Buddhist site was the last capital of Sinhala kings, nurturing Dinahala culture for 2,500 years until the British occupation in 1815. It hosts the Temple of the Tooth Relic."
            />
          </div>
          <div>
            <Division
              name="Polonnaruwa"
              img={Polonnaruwa}
              description="Polonnaruwa, Sri Lanka's second capital post-Anuradhapura's fall in 993, features Chola-built Brahmanic monuments and the grand ruins of Parakramabahu I's 12th-century garden-city, showcasing its historical and architectural significance."
            />
          </div>
          <div>
            <Division
              name="Rangiri Dambulla Temple"
              img={rangiriDambullatemple}
              description="This cave monastery, with five sanctuaries, is Sri Lanka's largest and best-preserved cave-temple complex, a sacred pilgrimage site for 22 centuries. Its 2,100 m² Buddhist mural paintings and 157 statues are noteworthy."
            />
          </div>
          <div>
            <Division
              name="Sigiriya"
              img={Sigiriya}
              description="The remains of King Kassapa I's capital, atop a 180m granite peak called 'Lion's Rock,' boast galleries and staircases emerging from a colossal lion's mouth, granting entry to the site's wonders."
            />
          </div>
          <div>
            <Division
              name="Sinharajayaya"
              img={Sinharajaya}
              description="Sinharaja, situated in southwest Sri Lanka, is the nation's final primary rainforest, boasting over 60% endemic trees and abundant wildlife, including rare birds, mammals, butterflies, insects, reptiles, and amphibians."
            />
          </div>
        </div>
      </div>
    </div>
    <div className="mt-10">
      <Footer />
    </div>
  </div>

  )
}

export default Heritage
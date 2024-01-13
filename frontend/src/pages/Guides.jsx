import React, { useState, useEffect } from "react";
import Guidcom from "../component/Guidcom";
import GuideSearch from "../component/GuideSearch1";
import Guide from "../assets/GuideProfile2.jpg";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import axios from "axios";

/*<div className="grid gap-12 mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">*/

const GuideComponent = ({ guideData }) => {
  return (
    <div>
      <Guidcom
        image={Guide}
        guideName={guideData.FirstName + " " + guideData.LastName}
        id={guideData.GuideId_Number}
        expDate={guideData.GuideId_ExpiredDate}
        email={guideData.Email}
        contact={guideData.ContactNumber}
        type={guideData.GuideType}
        language={guideData.Language}
      />
    </div>
  );
};

export default function Guides() {
  const [guideList, setGuideList] = useState([]);

  const loadData = async () => {
    console.log("ok");
    try {
      await axios
        .get("http://localhost:4000/guide")
        .then((res) => {
          console.log(res.data);
          setGuideList(res.data);
        })
        .catch((error) => {
          alert(error);
        });
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  /* const loadData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/guide');
      setGuideList(response.data);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };*/

  useEffect(() => {
    loadData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [guidesPerPage] = useState(5);

  const indexOfLastGuide = currentPage * guidesPerPage;
  const indexOfFirstGuide = indexOfLastGuide - guidesPerPage;
  const currentGuides = guideList.slice(indexOfFirstGuide, indexOfLastGuide);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="mt-20">
        <div className="p-5 mx-auto">
          <div className="text-center">
            <span className="text-5xl font-semibold text-center">
              Tour Guides
            </span>
          </div>
          <div className="p-5 mt-5">
            <div className="flex gap-12 mx-auto lg:flex-row md:flex-col sm:flex-col ">
              <div className="basis-2/3 flex flex-col gap-[40px] lg:order-first md:order-last sm:order-last">
                {currentGuides.map((guideData, index) => (
                  <GuideComponent key={index} guideData={guideData} />
                ))}
                <div className="flex justify-center">
                  {guideList.length > guidesPerPage && (
                    <ul className="flex flex-row gap-3">
                      {Array.from({
                        length: Math.ceil(guideList.length / guidesPerPage),
                      }).map((_, index) => (
                        <li key={index}>
                          <button onClick={() => paginate(index + 1)}>
                            {index + 1}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="flex justify-center basis-1/3 lg:order-last md:order-first sm:order-first">
                <GuideSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

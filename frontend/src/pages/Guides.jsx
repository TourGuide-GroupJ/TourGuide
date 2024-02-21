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
        guideName={guideData && guideData.FirstName + " " + guideData.LastName}
        id={guideData && guideData.GuideId_Number}
        expDate={guideData && guideData.GuideId_ExpiredDate}
        email={guideData && guideData.Email}
        contact={guideData && guideData.ContactNumber}
        type={guideData && guideData.GuideType}
        language={guideData && guideData.Language}
      />
    </div>
  );
};

export default function Guides() {
  const [guideList, setGuideList] = useState([]);

  const [guides, setGuides] = useState([]);

  //Filter type
  const filterType = (guideType) => {
    setGuides(
      guideList.filter((guideData) => {
        return guideData.GuideType === guideType;
      })
    );
  };

  const selectType = (Event) => {
    const selectedType = Event.target.value;
    console.log(selectedType);
    if (selectedType === "All Types") {
      setGuides(guideList);
    } else {
      filterType(selectedType);
    }
  };


  const selectLanguage = (Event) => {
    const selectedLanguage = Event.target.value;
    console.log(selectedLanguage);
  };

  const loadData = async () => {
    console.log("ok");
    try {
      await axios
        .get("http://localhost:4000/user/guides")
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

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setGuides(guideList); 
  }, [guideList]);

  const [currentPage, setCurrentPage] = useState(1);
  const [guidesPerPage] = useState(5);

  const indexOfLastGuide = currentPage * guidesPerPage;
  const indexOfFirstGuide = indexOfLastGuide - guidesPerPage;
  const currentGuides = guides.slice(indexOfFirstGuide, indexOfLastGuide);

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
                  {guides.length > guidesPerPage && (
                    <ul className="flex flex-row gap-3">
                      {Array.from({
                        length: Math.ceil(guides.length / guidesPerPage),
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
                <GuideSearch
                  selectType={selectType}
                  selectLanguage={selectLanguage}
                />
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

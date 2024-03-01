import React, { useState, useEffect } from "react";
import Guidcom from "../component/Guidcom";
import GuideSearch from "../component/GuideSearch1";
import Guide from "../assets/GuideProfile2.jpg";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import axios from "axios";

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
        language={guideData.Language.join(", ")}
      />
    </div>
  );
};
export { GuideComponent };

export default function Guides() {
  const [guideList, setGuideList] = useState([]);

  const [guides, setGuides] = useState([]);
  const [guides1, setGuides1] = useState([]);
  const [guides2, setGuides2] = useState([]);

  const filterType = (guideType) => {
    setGuides1(
      guideList.filter((guideData) => {
        return guideData.GuideType === guideType;
      })
    );
  };

  const filterLanguage = (guideLanguage) => {
    setGuides2(
      guideList.filter((guideData) => {
        return guideData.Language.includes(guideLanguage);
      })
    );
  };

  const selectType = (Event) => {
    const selectedType = Event.target.value;
    console.log(selectedType);
    if (selectedType === "All Types") {
      setGuides1(guideList);
    } else {
      filterType(selectedType);
    }
    console.log(guides1);
  };

  const selectLanguage = (Event) => {
    const selectedLanguage = Event.target.value;
    console.log(selectedLanguage);
    if (selectedLanguage === "All Languages") {
      setGuides2(guideList);
    } else {
      filterLanguage(selectedLanguage);
    }
    console.log(guides2);
  };

  const loadData = async () => {
    console.log("ok");
    // const headers = { 'authorization': 'Bearer my-token' };

    try {
      await axios
        .get("http://localhost:4000/user/guides")
        .then((res) => {
          console.log(res.data);
          setGuideList(res.data);
          setGuides1(res.data);
          setGuides2(res.data);
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

  useEffect(() => {
    // Calculate the intersection when guides1 or guides2 change
    const intersection = guides1.filter((guide1) =>
      guides2.some((guide2) => guide2._id === guide1._id)
    );
    // Update the guides state with the intersection result
    setGuides(intersection);
    console.log(intersection);
  }, [guides1, guides2]);

  const [currentPage, setCurrentPage] = useState(1);
  const [guidesPerPage] = useState(5);

  const indexOfLastGuide = currentPage * guidesPerPage;
  const indexOfFirstGuide = indexOfLastGuide - guidesPerPage;
  const currentGuides = guides.slice(indexOfFirstGuide, indexOfLastGuide);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const token = sessionStorage.getItem('jwtToken');
  console.log(token);

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

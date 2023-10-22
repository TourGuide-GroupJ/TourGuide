import React from "react";
import Guidcom from "./Componant/Guidcom";
import GuideSearch from "./Componant/GuideSearch1";
import Guide from "./Assest/GuideProfile2.jpg";
import Footer from "./Componant/Footer";
import Navbar from "./Componant/Navbar";

export default function Guides() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center mt-20">
        <div className="mx-auto left-2 right-2">
          <div className="text-center">
            <span className="text-5xl text-center">Tour Guides</span>
          </div>
          <div className="flex justify-center p-3 mt-5 left-2 right-2">
            <div className="grid gap-12 mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
              <div className="col-span-2 grid grid-rows-5 gap-[40px]">
                <div>
                  <Guidcom
                    image={Guide}
                    guideName="Mr.G.D.T.Rathnayaka"
                    id="G10834"
                    address="No:56,Kandy Road, Yakkala."
                    email="ranathunga@gmail.com"
                    contact="+94742362224"
                    type="Historical"
                    language="English,Russian"
                  />
                </div>
                <div>
                  <Guidcom
                    image={Guide}
                    guideName="Mr.K.A.M.Praveen"
                    id="G10831"
                    address=""
                    email="praveen@gmail.com"
                    cotact=""
                    type=""
                    language=""
                  />
                </div>
                <div>
                  <Guidcom
                    image={Guide}
                    guideName="Mr.D.A.Rathnapala"
                    id="G10839"
                    address=""
                    email="rathnapala@gmail.com"
                    cotact=""
                    type=""
                    language=""
                  />
                </div>
                <div>
                  <Guidcom
                    image={Guide}
                    guideName="Mr.S.D.Weerathunga"
                    id="G10814"
                    address=""
                    email="weerathunga@gmail.com"
                    cotact=""
                    type=""
                    language=""
                  />
                </div>
                <div>
                  <Guidcom
                    image={Guide}
                    guideName="S.P.Sahan"
                    id="G10832"
                    address=""
                    email="sahan@gmail.com"
                    cotact=""
                    type=""
                    language=""
                  />
                </div>
              </div>
              <div className="col-span-1">
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

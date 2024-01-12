import React from "react";
import Guidcom from "./Componant/Guidcom";
import GuideSearch from "./Componant/GuideSearch1";
import Guide from "./Assest/Guide.jfif";
import Footer from "./Componant/Footer";
import Navbar from "./Componant/Navbar";

export default function Guides() {
  return (
    <div className="flex justify-center">
      <div className="grid gap-20 mx-auto ">
        <div>
          <Navbar />
        </div>
        <div className="text-center">
          <span className="text-5xl text-center">Tour Guides</span>
        </div>
        <div className="flex justify-center left-2 right-2">
          <div className="grid gap-2 mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
            <div className="col-span-2 grid grid-rows-5 gap-[5px]">
               <div> 
              <Guidcom
                image={Guide}
                guideName="thnuka"
                guideDescription="To get to your clipboard history, press Windows logo key + V. From the clipboard history, you can paste and pin frequently used items by choosing an individual item from your clipboard menu.  Pinning an item keeps it from being removed from the clipboard history to make room for new items."
              />
              </div>
              <div>
              <Guidcom
                image={Guide}
                guideName="fdfdfdfs"
                guideDescription="To get to your clipboard history, press Windows logo key + V. From the clipboard history, you can paste and pin frequently used items by choosing an individual item from your clipboard menu.  Pinning an item keeps it from being removed from the clipboard history to make room for new items."
              />
              </div>
              <div>
              <Guidcom
                image={Guide}
                guideName="fdfdfdf"
                guideDescription="To get to your clipboard history, press Windows logo key + V. From the clipboard history, you can paste and pin frequently used items by choosing an individual item from your clipboard menu.  Pinning an item keeps it from being removed from the clipboard history to make room for new items."
              />
              </div>
              <div>
              <Guidcom
                image={Guide}
                guideName="fdfdfd"
                guideDescription="To get to your clipboard history, press Windows logo key + V. From the clipboard history, you can paste and pin frequently used items by choosing an individual item from your clipboard menu.  Pinning an item keeps it from being removed from the clipboard history to make room for new items."
              />
              </div>
              <div>
              <Guidcom
                image={Guide}
                guideName="fdfdfdfd"
                guideDescription="To get to your clipboard history, press Windows logo key + V. From the clipboard history, you can paste and pin frequently used items by choosing an individual item from your clipboard menu.  Pinning an item keeps it from being removed from the clipboard history to make room for new items."
              />
              </div>
            </div>
            <div className="col-span-1">
              <GuideSearch />
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

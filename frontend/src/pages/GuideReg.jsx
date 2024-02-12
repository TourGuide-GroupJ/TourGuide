import React, { useState } from "react";
import Text1, { Mail, Password } from "../component/Text1";
import CheckBox, { Radio } from "../component/CheckBox";
import { Button3 } from "../component/Button1";
import axios from "axios";

export default function GuideReg() {
  //name,NIC,Gid,Email,Contact,password
  //{name1:"",name2:"",nic:"",Gid:"",mail:"",contact:"",pswd:"",conPswd:""}
  const [guideData, setGuideData] = useState();
  const func = (Event) => {
    setGuideData({ ...guideData, [Event.target.name]: Event.target.value });
    console.log(guideData);
  };

  //Guide types
  let [types, setTypes] = useState();
  const Guide_type = (Event) => {
    setTypes(Event.target.id);
    //console.log(types);
  };

  //Languages
  const language = {
    English: false,
    Spanish: false,
    Hindi: false,
    Chinees: false,
    German: false,
    French: false,
    Arabic: false,
  };
  const [lang, setLang] = useState(language);
  const Guide_Lang = (Event) => {
    const { name, checked } = Event.target;
    setLang((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
    //console.log(lang);
  };
  const langArray = Object.entries(lang)
    .filter(([name, checked]) => checked === true)
    .map(([name]) => name);
  //console.log(langArray);

  //Gender
  let [gender, setGender] = useState();
  const Gender = (Event) => {
    setGender(Event.target.id);
    //console.log(gender);
  };

  //License expired date
  const [expDate, setExpDate] = useState();
  const currentDate = new Date().toISOString().split("T")[0];
  const ExpDate = (Event) => {
    setExpDate(Event.target.value);
    //console.log(expDate);
  };

  let [gidUpload, setGidUpdate] = useState();
  const GidUpload = (Event) => {
    setGidUpdate((gidUpload = { [Event.target.name]: Event.target.value }));
    console.log(gidUpload);
  };

  //show password check box
  const [visible, setVisible] = useState(false);
  const showPswd = () => {
    setVisible(!visible);
  };

  //Avoiding to missing required data

  const isRequireDataFilled = () => {
    if (
      guideData === undefined ||
      guideData === null ||
      guideData.name1 === "" ||
      guideData.name2 === "" ||
      guideData.Gid === "" ||
      guideData.mail === "" ||
      guideData.contact === "" ||
      guideData.pswd === "" ||
      guideData.conPswd === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  //Submit
  async function submit(Event) {
    Event.preventDefault();
    if (isRequireDataFilled()) {
      return alert("Missed required data");
    } else {
      if (guideData.pswd !== guideData.conPswd) {
        return alert("Password & reconfirmation didn't match");
      }
      try {
        await axios
          .get("http://localhost:4000/guide/guideReg")
          .then((res) => {
            try {
              const previousMail = res.data.map((item) => {
                return { ...item };
              });
              console.log(previousMail);
              const isPreviousused = () => {
                for (let index = 0; index < previousMail.length; index++) {
                  console.log(index);
                  if (
                    previousMail[index].GuideId_Number === guideData.Gid ||
                    previousMail[index].Email === guideData.mail
                  ) {
                    return true;
                  }
                }
                return false;
              };
              console.log(isPreviousused());
              if (isPreviousused()) {
                return alert("This email or guide id number was before used");
              } else {
                signup();
              }
            } catch (error) {
              alert(error);
            }
          })
          .catch((error) => {
            alert(error);
          });
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    }
  }

  //Sign up handling
  let [newGuide, setNewGuide] = useState();

  const signup = async () => {
    try {
      var FirstName = guideData.name1.charAt(0).toUpperCase() + guideData.name1.slice(1);
      var LastName = guideData.name2.charAt(0).toUpperCase() + guideData.name2.slice(1);
      var NIC_Number = guideData.nic;
      var GuideId_Number = guideData.Gid;
      var GuideId_Expdate = expDate;
      var GuideType = types;
      let Language = langArray;
      var Email = guideData.mail;
      var ContactNumber = guideData.contact;
      var Gender = gender;
      var Password = guideData.pswd;
      console.log("ok");
      await axios
        .post("http://localhost:4000/guide/save", {
          FirstName,
          LastName,
          NIC_Number,
          GuideId_Number,
          GuideId_Expdate,
          GuideType,
          Language,
          Email,
          ContactNumber,
          Gender,
          Password,
        })
        .then((res) => {
          setNewGuide((newGuide = res.data.Guide));
          console.log(newGuide);
          alert("Saved successfull");
          setGuideData({
            name1: "",
            name2: "",
            Gid: "",
            mail: "",
            contact: "",
            pswd: "",
            conPswd: "",
          });
          window.location.href = '/login';
        })
        .catch((error) => {
          alert(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center bg-[#e5e7eb] h-full">
      <div className="flex flex-col w-full gap-2 p-5">
        <div>
          <p className="text-3xl font-semibold text-center">
            Guide Registration
          </p>
        </div>
        <form action="" method="post">
          <div className="flex justify-center">
            <div className="flex justify-center lg:w-[700px] lg:h-[780px] bg-white rounded-xl">
              <div className="flex flex-col justify-center gap-3 p-2 ">
                <div className="flex gap-3 lg:flex-row sm:flex-col">
                  <div className="flex flex-col gap-2">
                    <div className="font-semibold">First name*</div>
                    <div>
                      <Text1
                        plcHolder="Input your first name "
                        txt="30"
                        name="name1"
                        func1={func}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="font-semibold">Last name*</div>
                    <div>
                      <Text1
                        txt="30"
                        plcHolder="Input your last name"
                        name="name2"
                        func1={func}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex lg:gap-4 sm:gap-6 lg:flex-row sm:flex-col">
                  <div className="flex flex-col gap-2">
                    <div className="font-semibold">NIC number*</div>
                    <div>
                      <Text1 txt="20" max="12" name="nic" func1={func} />
                    </div>
                  </div>
                  <div className="flex gap-2 lg:flex-row sm:flex-col">
                    <div className="flex flex-col gap-2">
                      <div className="font-semibold">Guide license id*</div>
                      <div>
                        <Text1 txt="12" max="8" name="Gid" func1={func} />
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                          <div className="font-semibold">
                            Guide license image*
                          </div>
                          <div>
                            <input
                              type="file"
                              onChange={GidUpload}
                              name="GidImage"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="font-semibold">Date of expiry*</div>
                          <div>
                            <input
                              type="date"
                              onChange={ExpDate}
                              name="expDate"
                              min={currentDate}
                              className=" rounded-xl border-[#94a3b8] border-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-20 ml-12">
                  <div className="flex flex-col gap-2">
                    <div className="font-semibold">Guide type*</div>
                    <div>
                      <Radio
                        rBtn="Area"
                        name="type"
                        id="Area"
                        isTrue={Guide_type}
                      />
                      <Radio
                        rBtn="Chauffeur"
                        name="type"
                        id="Chauffeur"
                        isTrue={Guide_type}
                      />
                      <Radio
                        rBtn="National"
                        name="type"
                        id="National"
                        isTrue={Guide_type}
                      />
                      <Radio
                        rBtn="Site"
                        name="type"
                        id="Site"
                        isTrue={Guide_type}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="font-semibold">Languages*</div>
                    <div>
                      <CheckBox
                        checkName="English"
                        name="English"
                        val="value"
                        checked={lang.English}
                        isTrue={Guide_Lang}
                      />
                      <CheckBox
                        checkName="Spanish"
                        name="Spanish"
                        val="value"
                        checked={lang.Spanish}
                        isTrue={Guide_Lang}
                      />
                      <CheckBox
                        checkName="Hindi"
                        name="Hindi"
                        val="value"
                        checked={lang.Hindi}
                        isTrue={Guide_Lang}
                      />
                      <CheckBox
                        checkName="Chinees"
                        name="Chinees"
                        val="value"
                        checked={lang.Chinees}
                        isTrue={Guide_Lang}
                      />
                      <CheckBox
                        checkName="German"
                        name="German"
                        val="value"
                        checked={lang.German}
                        isTrue={Guide_Lang}
                      />
                      <CheckBox
                        checkName="French"
                        name="French"
                        val="value"
                        checked={lang.French}
                        isTrue={Guide_Lang}
                      />
                      <CheckBox
                        checkName="Arabic"
                        name="Arabic"
                        val="value"
                        checked={lang.Arabic}
                        isTrue={Guide_Lang}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 lg:flex-row sm:flex-col">
                  <div className="flex flex-col gap-2">
                    <div className="font-semibold">Email address*</div>
                    <div>
                      <Mail
                        txt="20"
                        plcHolder="xxxxxx@gmail.com"
                        name="mail"
                        func1={func}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="font-semibold">Contact number* </div>
                    <div>
                      <Text1 txt="20" name="contact" func1={func} />
                    </div>
                  </div>
                </div>
                <div className="flex ml-12 lg:gap-7 sm:gap-3 lg:flex-row sm:flex-col">
                  <div className="flex flex-row gap-2">
                    <div className="font-semibold">Gender</div>
                    <div>
                      <div>
                        <Radio
                          rBtn="Male"
                          name="gender"
                          id="Male"
                          isTrue={Gender}
                        />
                      </div>
                      <div>
                        <Radio
                          rBtn="Female"
                          name="gender"
                          id="Female"
                          isTrue={Gender}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold">Your image</div>
                    <div>
                      <input type="file" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 lg:flex-row sm:flex-col">
                  <div className="flex flex-col gap-2">
                    <div className="font-semibold">Password* </div>
                    <div>
                      <Password
                        type={visible ? "text" : "password"}
                        txt="20"
                        name="pswd"
                        func1={func}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="font-semibold">Confirm* </div>
                    <div>
                      <Password
                        type={visible ? "text" : "password"}
                        txt="20"
                        name="conPswd"
                        func1={func}
                      />
                    </div>
                    <div>
                      <CheckBox
                        checkName="Show password"
                        name="showPswd"
                        isTrue={showPswd}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div>
                    <Button3 btnName="Register" Click3={submit} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

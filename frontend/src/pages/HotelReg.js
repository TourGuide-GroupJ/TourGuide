import React, { useState } from "react";
import axios from "axios";
import Text1, { Mail, Password } from "../component/Text1";
import CheckBox, { Radio } from "../component/CheckBox";
import { Button3 } from "../component/Button1";

export default function HotelReg() {
  const [HotelData, setHotelData] = useState();
  const func = (Event) => {
    setHotelData({ ...HotelData, [Event.target.name]: Event.target.value });
    console.log(HotelData);
  };

  //Hotel types
  const [types, setTypes] = useState();

  //Hotel classes
  const [classType, setClassType] = useState();

  const HotelType = (Event) => {
    setTypes(Event.target.id);
    if (Event.target.id === "Hotel") {
      setClassType(undefined);
    }
    console.log(types);
    console.log(classType);
  };

  //show password check box
  const [visible, setVisible] = useState(false);
  const showPswd = () => {
    setVisible(!visible);
  };

  //Avoiding to missing required data
  const isRequireDataFilled = () => {
    if (
      HotelData === undefined ||
      HotelData === null ||
      HotelData.hName === "" ||
      HotelData.hotelLicenseNumber === "" ||
      HotelData.contact === "" ||
      HotelData.mail === "" ||
      HotelData.pswd === "" ||
      HotelData.conPswd === ""
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
      if (HotelData.pswd !== HotelData.conPswd) {
        return alert("Password & reconfirmation didn't match");
      }     
      try {
        var hotelName = HotelData.hName;
        var hotelLicenseNumber = HotelData.hotelLicenseNumber; //data catch from user and store in variables
        var hotelType = types;
        var hotelClass = classType;
        var contactNumber = HotelData.contact;
        var email = HotelData.mail;
        var password = HotelData.pswd;
        console.log("ok");
        await axios
          .post("http://localhost:4000/hotel/save", {
            hotelName,
            hotelLicenseNumber,
            hotelType,
            hotelClass,
            contactNumber,
            email,
            password,
          })
          .then((res) => {
            alert("Saved successfull");
            setHotelData({
              hName: "",
              hotelLicenseNumber: "",
              mail: "",
              contact: "",
              pswd: "",
              conPswd: "",
            });
          })
          .catch((error) => {
            alert(error);
          });
      }
      catch (error) {
        console.error(error);
        alert(error.message);
      }
    }
  }

  return (
    <div className="flex justify-center bg-[#e5e7eb] h-screen">
      <div className="flex flex-col w-full gap-5 p-5">
        <div>
          <p className="text-3xl font-semibold text-center">
            Hotel Registration
          </p>
        </div>
        <form action="" method="post">
          <div className="flex justify-center">
            <div className="flex justify-center lg:w-[500px]  bg-white rounded-xl">
              <div className="flex flex-col justify-center gap-3 p-2 ">
                <div className="flex flex-col gap-2">
                  <div className="mt-5 font-semibold">Hotel Name*</div>
                  <div>
                    <Text1
                      plcHolder="Enter Hotel Name"
                      txt="30"
                      name="hName"
                      func1={func}
                    />
                  </div>
                </div>
                <div className="flex gap-2 lg:flex-row sm:flex-col">
                  <div className="flex flex-col gap-2">
                    <div className="font-semibold">Hotel license ID</div>
                    <div>
                      <Text1
                        txt="12"
                        max="8"
                        name="hotelLicenseNumber"
                        func1={func}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-40 gap-2">
                  <div>
                    <div className="flex flex-col w-40 gap-2">
                      <div className="font-semibold">Hotel type*</div>
                      <div>
                        <Radio
                          rBtn="Hotel"
                          name="type"
                          id="Hotel"
                          isTrue={HotelType}
                        />
                        {types === "Hotel" && (
                          <div className="ml-8">
                            <label className="font-semibold">
                              Hotel Class*
                            </label>
                            <div>
                              <Radio
                                rBtn="1 Star"
                                name="classType"
                                id="1Star"
                                isTrue={() => setClassType("1 Star")}
                              />
                              <Radio
                                rBtn="2 Star"
                                name="classType"
                                id="2Star"
                                isTrue={() => setClassType("2 Star")}
                              />
                              <Radio
                                rBtn="3 Star"
                                name="classType"
                                id="3Star"
                                isTrue={() => setClassType("3 Star")}
                              />
                              <Radio
                                rBtn="4 Star"
                                name="classType"
                                id="4Star"
                                isTrue={() => setClassType("4 Star")}
                              />
                              <Radio
                                rBtn="5 Star"
                                name="classType"
                                id="5Star"
                                isTrue={() => setClassType("5 Star")}
                              />
                            </div>
                          </div>
                        )}
                        <div>
                          <Radio
                            rBtn="Resort"
                            name="type"
                            id="Resort"
                            isTrue={HotelType}
                          />
                          <Radio
                            rBtn="Bungalow"
                            name="type"
                            id="Bungalow"
                            isTrue={HotelType}
                          />
                          <Radio
                            rBtn="Inns"
                            name="type"
                            id="Inns"
                            isTrue={HotelType}
                          />
                        </div>
                      </div>
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
                <div className="flex justify-end mb-6">
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

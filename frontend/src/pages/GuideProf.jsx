import React, { useState, useEffect } from "react";
import Button1 from "../component/Button1";
import axios from "axios";
import { Text2, Text3 } from "../component/Text1";
import OTPModal from '../alert/OTPModal';


export default function GuideProf() {
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState('');

  const [gId, setId] = useState("65999a726aed2717eb683aab");
  const [guideProfData, setGuideprofData] = useState({
    FirstName: "",
    LastName: "",
    NIC_Number: "",
    GuideId_Number: "",
    GuideId_ExpiredDate: "",
    GuideType: "",
    Language: [],
    Email: "",
    ContactNumber: "",
    Gender: "",
    UserName: "",
    Password: "",
  });

  const [updatedGuideData, setUpdatedGuideData] = useState({
    FirstName: "",
    LastName: "",
    NIC_Number: guideProfData.NIC_Number,
    GuideId_Number: guideProfData.GuideId_Number,
    GuideId_ExpiredDate: guideProfData.GuideId_ExpiredDate,
    GuideType: guideProfData.GuideType,
    Language: "",
    Email: "",
    ContactNumber: "",
    Gender: "",
    UserName: "",
    Password: "",
  });

  const guideProf = async () => {
    await axios
      .get(`http://localhost:4000/guide/guideprof/${gId}`)
      .then((res) => {
        setGuideprofData(res.data.Guide);
        setUpdatedGuideData(res.data.Guide);
        console.log(guideProfData);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    guideProf();
  }, []);

  const firstName = (Event) => {
    setUpdatedGuideData({
      ...updatedGuideData,
      FirstName: Event.target.value,
    });
  };

  const lastName = (Event) => {
    setUpdatedGuideData({
      ...updatedGuideData,
      LastName: Event.target.value,
    });
  };

  const language = (Event) => {
    setUpdatedGuideData({
      ...updatedGuideData,
      Language: Event.target.value,
    });
  };

  const email = (Event) => {
    setUpdatedGuideData({
      ...updatedGuideData,
      Email: Event.target.value,
    });
  };
  const contactNumber = (Event) => {
    setUpdatedGuideData({
      ...updatedGuideData,
      ContactNumber: Event.target.value,
    });
  };
  const password = (Event) => {
    setUpdatedGuideData({
      ...updatedGuideData,
      Password: Event.target.value,
    });
  };

  const [clickEdit, setClickEdit] = useState(false);
  const ClickEdit = () => {
    setClickEdit(!clickEdit);

    clickEdit ? handleSave() : handleEdit();

    console.log(updatedGuideData);
  };

  const handleEdit = () => {
    setUpdatedGuideData({ ...guideProfData }); // Copy the original data for editing
  };

  const handleSave = async () => {
    if (
      updatedGuideData.Email !== guideProfData.Email ||
      updatedGuideData.Password !== guideProfData.Password
    ) {
      setShowOtpModal(true);
      //await axios.post("",{}).then(()=>{}).catch(()=>{});
      /*await axios.put(`http://localhost:4000/guide/updateprofilespecila/${gId}`, {
          FirstName: updatedGuideData.FirstName,
          LastName: updatedGuideData.LastName,
          Language: updatedGuideData.Language,
          Email: updatedGuideData.Email,
          ContactNumber: updatedGuideData.ContactNumber,
          Password: updatedGuideData.Password,
        })
        .then((res) => {
          alert(res.status);
          if(res.status===200){
          setGuideprofData({ ...updatedGuideData });
          }
          else{
            
          }
          
        })
        .catch((error) => {
          alert(error);
        });*/
    } else {
      await axios
        .put(`http://localhost:4000/guide/updateprofile/${gId}`, {
          FirstName: updatedGuideData.FirstName,
          LastName: updatedGuideData.LastName,
          Language: updatedGuideData.Language,
          ContactNumber: updatedGuideData.ContactNumber,
        })
        .then((res) => {
          setGuideprofData({ ...updatedGuideData });
          alert(res.status);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-10">
        <div className="text-center">
          <span className="text-xl">Guide Details</span>
        </div>
        <div>
          <table className="p-5">
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <span>Your First Name</span>
                </td>
                <td>
                  <div className="flex flex-row">
                    <span className="text-left">- </span>
                    {clickEdit ? (
                      <Text2
                        type="text"
                        value={updatedGuideData.FirstName}
                        func1={firstName}
                      />
                    ) : (
                      <Text3 type="text" value={guideProfData.FirstName} />
                    )}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Your Last Name</span>
                </td>
                <td>
                  <div className="flex flex-row">
                    <span className="text-left">- </span>
                    {clickEdit ? (
                      <Text2
                        type="text"
                        value={updatedGuideData.LastName}
                        func1={lastName}
                      />
                    ) : (
                      <Text3 type="text" value={guideProfData.LastName} />
                    )}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Your NIC Number</span>
                </td>
                <td>
                  <div className="flex flex-row">
                    <span className="text-left">- </span>
                    <Text3 type="text" value={guideProfData.NIC_Number} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Your License Id</span>
                </td>
                <td>
                  <div className="flex flex-row">
                    <span className="text-left">- </span>
                    <Text3 type="text" value={guideProfData.GuideId_Number} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span>License Expired Date</span>
                </td>
                <td>
                  <div className="flex flex-row">
                    <span className="text-left">- </span>
                    <Text3
                      type="text"
                      value={guideProfData.GuideId_ExpiredDate}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Guide Type</span>
                </td>
                <td>
                  <div className="flex flex-row">
                    <span className="text-left">- </span>
                    <Text3 type="text" value={guideProfData.GuideType} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Languages</span>
                </td>
                <td>
                  <div className="flex flex-row">
                    <span className="text-left">- </span>
                    {clickEdit ? (
                      <Text2
                        type="text"
                        value={updatedGuideData.Language}
                        func1={language}
                      />
                    ) : (
                      <Text3 type="text" value={guideProfData.Language} />
                    )}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Your Email</span>
                </td>
                <td>
                  <div className="flex flex-row">
                    <span className="text-left">- </span>
                    {clickEdit ? (
                      <Text2
                        type="text"
                        value={updatedGuideData.Email}
                        func1={email}
                      />
                    ) : (
                      <Text3 type="text" value={guideProfData.Email} />
                    )}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Your Contact Number</span>
                </td>
                <td>
                  <div className="flex flex-row">
                    <span className="text-left">- </span>
                    {clickEdit ? (
                      <Text2
                        type="text"
                        value={updatedGuideData.ContactNumber}
                        func1={contactNumber}
                      />
                    ) : (
                      <Text3 type="text" value={guideProfData.ContactNumber} />
                    )}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Password</span>
                </td>
                <td>
                  <div className="flex flex-row">
                    <span className="text-left">- </span>
                    {clickEdit ? (
                      <Text2
                        type="text"
                        value={updatedGuideData.Password}
                        func1={password}
                      />
                    ) : (
                      <Text3 type="text" value={guideProfData.Password} />
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-row justify-between">
            <div>
              <Button1
                btnName={clickEdit ? "Save" : "Edit"}
                Click1={ClickEdit}
              />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

/*<OTPModal
show={showOtpModal}
handleClose={() => setShowOtpModal(false)}
handleVerifyOtp={handleVerifyOtp}
handleResendOtp={handleResendOtp}
/>*/

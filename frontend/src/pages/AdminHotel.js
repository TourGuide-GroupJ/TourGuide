import React, { useState } from "react";
import axios from "axios";
import Button1 from "../component/Button1";
import SearchBar from "../component/SearchBar";

export default function AdminHotel() {
  const [newHotel, setNewHotel] = useState({});
  const [gId, setId] = useState("");
  const [HotelName, setHotelName] = useState();
  const [accept, setAccept] = useState(false);
  const [block, setBlock] = useState(false);

  const DBID = (Event) => {
    setId(Event.target.value);
  };

  async function Search(Event) {
    Event.preventDefault();
    try {
      await axios
        .get(`http://localhost:4000/Hotel/search/${gId}`)
        .then((res) => {
          setNewHotel((newHotel = res.data.Hotel));
          setHotelName(newHotel.FirstName + " " + newHotel.LastName);
          setAccept(newHotel.IsAccepted);
          setBlock(newHotel.IsBlocked);
          console.log(newHotel);
        })
        .catch((error) => {
          alert(error);
        });
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  async function Accept() {
    try {
      await axios
        .patch(`http://localhost:4000/Hotel/AdminHotel/accept/${gId}`)
        .then(() => {
          console.log("Accepted");
        })
        .catch((error) => {
          alert(error);
        });
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  async function Block() {
    if (block) {
      try {
        await axios
          .patch(`http://localhost:4000/Hotel/AdminHotel/unblock/${gId}`)
          .then(() => {
            console.log("Unblocked");
            setBlock(false);
          })
          .catch((error) => {
            alert(error);
          });
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    } else {
      try {
        await axios
          .patch(`http://localhost:4000/Hotel/AdminHotel/block/${gId}`)
          .then(() => {
            console.log("Blocked");
            setBlock(true);
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

  async function Delete() {
    try {
      await axios
        .delete(`http://localhost:4000/Hotel/delete/${gId}`)
        .then(() => {
          console.log("Deleted");
        })
        .catch((error) => {
          alert(error);
        });
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-10">
        <div className="mt-5 text-center">
          <span className="text-xl">Hotel Details</span>
        </div>
        <div className="flex flex-row items-center justify-center ">
          <div className="w-[100px] h-[8px] my-div flex text-center">
            Data Base Id{" "}
          </div>
          <div className="w-[280px] h-[8px]">
            <SearchBar name="dBId" func1={DBID} search={Search} />
          </div>
        </div>
        <div>
          <table className="gap-5 p-10">
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <span>Tour Hotel Name</span>
                </td>
                <td>
                  <span className="text-left"> - </span>
                  {HotelName}
                </td>
              </tr>
              <tr>
                <td>
                  <span>License Id</span>
                </td>
                <td>
                  <span className="text-left"> - </span>
                  {newHotel && newHotel.HotelId_Number}
                </td>
              </tr>
              <tr>
                <td>
                  <span>Hotel Type</span>
                </td>
                <td>
                  <span className="text-left"> - </span>
                  {newHotel && newHotel.HotelType}
                </td>
              </tr>
              <tr>
                <td>
                  <span>Email</span>
                </td>
                <td>
                  <span className="text-left"> - </span>
                  {newHotel && newHotel.Email}
                </td>
              </tr>
              <tr>
                <td>
                  <span>Contact Number</span>
                </td>
                <td>
                  <span className="text-left"> - </span>
                  {newHotel && newHotel.ContactNumber}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-row justify-between mt-5">
            <div>
              <Button1
                btnName={accept ? "Accepted" : "Accept"}
                Click1={Accept}
              />
            </div>
            <div>
              <Button1 btnName={block ? "Unblock" : "Block"} Click1={Block} />
            </div>
            <div>
              <Button1 btnName="Delete" Click1={Delete} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

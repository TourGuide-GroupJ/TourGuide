import React, { useState } from "react";
import axios from "axios";
import Button1 from "../component/Button1";
import SearchBar from "../component/SearchBar";

export default function AdminHotel() {
  let [newHotel, setNewHotel] = useState({});
  let [hotelId, setId] = useState("");
  let [accept, setAccept] = useState(false);
  let [block, setBlock] = useState(false);

  const DBID = (Event) => {
    setId(Event.target.value);
  };

  async function Search(Event) {
    Event.preventDefault();
    try {
      await axios
        .get(`http://localhost:4000/hotel/search/${hotelId}`)
        .then((res) => {
          setNewHotel((newHotel = res.data.Hotel));
          setAccept(newHotel.isAccepted);
          setBlock(newHotel.isBlocked);
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
        .patch(`http://localhost:4000/hotel/admin/accept/${hotelId}`)
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
          .patch(`http://localhost:4000/hotel/admin/block/${hotelId}`)
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
          .patch(`http://localhost:4000/hotel/admin/unblock/${hotelId}`)
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
        .delete(`http://localhost:4000/Hotel/delete/${hotelId}`)
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
                  {newHotel && newHotel.hotelName}
                </td>
              </tr>
              <tr>
                <td>
                  <span>License Id</span>
                </td>
                <td>
                  <span className="text-left"> - </span>
                  {newHotel && newHotel.hotelLicenseNumber}
                </td>
              </tr>
              <tr>
                <td>
                  <span>Hotel Type</span>
                </td>
                <td>
                  <span className="text-left"> - </span>
                  {newHotel && newHotel.hotelType}
                </td>
              </tr>
              <tr>
                <td>
                  <span>Email</span>
                </td>
                <td>
                  <span className="text-left"> - </span>
                  {newHotel && newHotel.email}
                </td>
              </tr>
              <tr>
                <td>
                  <span>Contact Number</span>
                </td>
                <td>
                  <span className="text-left"> - </span>
                  {newHotel && newHotel.contactNumber}
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

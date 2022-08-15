import React, { useEffect, useState } from "react";
import "./Doctor.css";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";

import items from "../../Components/Sidebar/Sidebar.json";
import SidebarItem from "../../Components/Sidebar/SidebarItem";
import "../../CSS/Sidebar.css";
function Doctor() {
  const [data, setData] = React.useState([]);
  const [filterVal, setFilterVal] = React.useState("");
  const [searchApiData, setsearchApiData] = React.useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          setData(json)
          setsearchApiData(json);
        });
    };
    fetchData();
  }, []);

  const handleFilter = (e) => {
    if (e.target.value == "") {
      setData(searchApiData);
    } else {
      const filterResult = searchApiData.filter(
        (item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.username.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setData(filterResult);
    }
    setFilterVal(e.target.value);
  };
  return (
    <>
    <div className="container">
    <div className="wrap">
    { items.map((item, index) => <SidebarItem key={index} item={item} />) }
    </div>
      <div className="detail">
        <h1 className="doctor-details-heading">DOCTOR DETAILS </h1>
        <div className="underline2"></div>
        <div className="doctor-details">
          <div className="doctor-search">
            <center>
              <input
                type="text"
                placeholder="Search Doctor, Specialization, Available ......."
                className="doctor-filter"
                onInput={(e) => handleFilter(e)}
                value={filterVal}
              />
              {/* <button className="search-doctor-btn">Search</button> */}
            </center>
          </div>
          <table className="doctor-table">
            <th>Name : </th>
            <th>Username : </th>
            <th>Email : </th>
            {data.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      </div>

      {/* <div className="container">
    <div className="wrap">
    { items.map((item, index) => <SidebarItem key={index} item={item} />) }
    </div>
    <div className='detail'>
   
        <h1 className='doctor-details-heading'>DOCTOR DETAILS  </h1>
        <div className='underline2'></div>
        <div className='doctor-details'>
        <div className='doctor-search'>
        <center>
            <input type='text' placeholder='Search Doctor, Specialization, Available .......' className='doctor-filter'/>
            <button className='search-doctor-btn'>Search</button>
            </center>
            </div>

            <div className='doctor-list'>
                 <table className='doctor-table' border={1}>
                 <tbody>
                        <tr>
                            <th>sr.no</th>
                            <th>Doctor Name</th>
                            <th>Specilized Field</th>
                            <th>Experience</th>
                            <th>Available Doctor</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Dr.Rajesh</td>
                            <td>Cardiology</td>
                            <td>5 years</td>
                            <td>Available</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Dr.Mahesh</td>
                            <td>Heart Specialist</td>
                            <td>3 years</td>
                            <td>Available</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Dr.Suresh</td>
                            <td>OPD User</td>
                            <td>2 years</td>
                            <td>Available</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Dr.Nima Ben</td>
                            <td>IPD User</td>
                            <td>3 year</td>
                            <td>Not Available</td>

                        </tr>
</tbody>
                        



                 </table>
            </div>
            </div>
    </div>
    </div> */}
    </>
  );
}

export default Doctor;

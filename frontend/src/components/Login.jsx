import React, { useState } from "react";
import Searchdoc from "./Infocomp/Searchdoc";
import doctors from "../output"; // Import the doctors array from output.js

const Login = () => {
  const [query, setQuery] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = doctors.filter((doctor) => {
      return (
        doctor.city.toLowerCase().includes(lowercasedQuery) ||
        doctor.state.toLowerCase().includes(lowercasedQuery)
      );
    });
    setFilteredDoctors(filtered);
  };

  return (
    <div className="login">
      <div className="info-page" style={{ maxHeight:"700px",overflowY: 'scroll',position:'relative'}}>
        <div className="row"></div>
        <div className="info-div" >
          <Searchdoc onSearch={handleSearch} />
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor, index) => {
              const { name, address, phone, state, city, url } = doctor;
              return (
                <div className="card" key={index}>
                  <h2 style={{ fontSize: "1.6rem" }}><b>{name}</b></h2>
                  <h3 style={{ fontSize: "1.3rem" }}>
                    Address: <span>{address}</span> <br /> Location:{" "}
                    <span>{city}</span>,{" "}
                    <span>
                      {state} <br />
                      <b>Website:</b> <a href={url} className="lowercase" target="_blank" rel="noopener noreferrer">{url}</a><br />
                      <b>Phone:</b> <span>{phone}</span>
                    </span>
                  </h3>
                </div>
              );
            })
          ) : (
            <p>No data found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

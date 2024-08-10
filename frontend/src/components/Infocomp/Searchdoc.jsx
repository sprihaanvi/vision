import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const Searchdoc = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(query);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div>
      <h1 style={{ marginTop: "40px", textAlign:"center"}}><b>Search for Doctors near you.</b></h1>
      <div className="container">
        <div className="row">
          <input
            type="text"
            placeholder="Search by City or State"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleEnterKey}
          />
          <Button
            variant="outline-primary"
            onClick={handleSubmit}
          >
            🔍
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Searchdoc;

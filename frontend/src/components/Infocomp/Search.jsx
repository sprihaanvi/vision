import React, { useState } from "react";
import { useGlobalContext } from "./context";
import Button from "react-bootstrap/Button";

const Search = () => {
  const { query, searchNews } = useGlobalContext();
  const [initialq, setquery] = useState("");
  const handleEnterKey = (e) => {
    e.preventDefault();
    if (e.key ==="Enter") {
      searchNews(initialq);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchNews(initialq);
  };

  return (
    <div>
      <h1 style={{ marginTop: "40px" }}>
        Stay Updated with Health related news.
      </h1>
      {/* <form onSubmit={handleSubmit}>
        <div className="container row">
            <div><input type="text" placeholder="Search" value={initialq} onChange={(e)=>setquery(e.target.value)}/>
            </div><div className="btn btn-primary" type="submit">Search</div>
        </div>
       </form> */}
      <div>
        <div className="container">
          <div className="row">
            <input
              type="text"
              placeholder="Search"
              value={initialq}
              onChange={(e) => setquery(e.target.value)}
            />
            <Button
              variant="outline-primary"
              onKeyDown={handleEnterKey}
              onClick={handleSubmit}
            >
              🔍
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

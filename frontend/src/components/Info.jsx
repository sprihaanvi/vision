import React, { useEffect, useState } from "react";
import Card from "./Infocomp/Card";
import { TbLoader } from "react-icons/tb";
import { useGlobalContext } from "./Infocomp/context";
import "./styles/info.css";
import Search from "./Infocomp/Search";

const Info = () => {
  

  const { hits, nbPages, isLoading,removePost } = useGlobalContext();
  
  if (isLoading) {
    return (
      <>
         <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", flexDirection: "column" }}>
        <h1 style={{ fontWeight: "bold", textAlign: "center" }}>Loading</h1>
        <TbLoader style={{ fontSize: "4rem" }} />
      </div>
      </>
    );
  }

  return (
    <div className="info-page">
      <div className="row">
        
      </div>
      <div className="info-div">
        <Search/>
        
        {hits.map((i) => {
          const { title, author, objectID, url, num_comments,story_text } = i;
          return (
            <div className="card" key={objectID}>
              <h2 style={{fontSize:'1.6rem'}}>{title}</h2>
              <h3 style={{fontSize:'1.2rem'}}>{story_text}</h3>
              <p className="p-info">
                By <span>{author}</span> | <span>{num_comments}</span> comments
              </p>
              <div className="card-button">
                
                <a href={url} target="_blank" rel="noopener noreferrer">Read More</a>
                <a href="#" onClick={()=>removePost(objectID)}>Remove</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;

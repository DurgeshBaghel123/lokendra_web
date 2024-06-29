import React from "react";
import "./Contactbox.css";

function Contactbox({data}) {
  console.log(data)
  
  return (
    <div className="contactbox p-5">
      <div className="icon mb-4">
        <span className={data.icon}></span>
      </div>
      <div className="border"></div>
      <div className="heading mb-4 fw-bold">
        <h4>{data.title}</h4>
      </div>
      <div className="text">
        <span>
          {data.text}
        </span>
      </div>
    </div>
  );
}

export default Contactbox;

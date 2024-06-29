import React from "react";
import "./Cources_box.css";


function Cources_box({data}) {
  
  return (
    
    <div className="courcesbox "data-aos="flip-left">
      <div className="image mb-4">
        <img src={data.image} alt="" /> 
      </div>
      <div className="border mt-5"></div>
      <div className="heading mb-4">
        <h3>{data.title}</h3>
      </div>
      <div className="text">
        <span>
          {data.text}
        </span>
      </div>
    </div>
  );
}

export default Cources_box;

import React from "react";

function MainDetails({name, address}) {
  return (
    <div>
      <div>
        
      </div>
      <div className="flex flex-col items-end">
        <h2 className="text-xl font-bold uppercase md:4xl">{name}</h2>
        <p>{address}</p>
      </div>
      
    </div>
  );
}

export default MainDetails;

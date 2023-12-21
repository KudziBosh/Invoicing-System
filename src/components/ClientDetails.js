import React from "react";

function ClientDetails({clientName,clientAddress}) {
  return (
    <div>
      <div className="">
        <h2 className="text-xl">{clientName} </h2>
        <p>{clientAddress}</p>
      </div>
    </div>
  );
}

export default ClientDetails;

import React, { useEffect } from "react";

export default function Card({ update }) {
  var local = localStorage.getItem("users");

  if (local) {
    local = JSON.parse(local);
  } else {
    local = [];
  }

  console.log("loc", local);

  return (
    <div className="row mt-2" style={{ cursor: "pointer" }}>
      {local.length === 0 ? (
        <h2 style={{ color: "red" }}>No Data</h2>
      ) : (
        <div>
          {local.map((data, id) => {
            return (
              <div
                className="card mt-2 ml-2"
                onClick={() => {
                  update(id);
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">{data.name}</h5>
                  <p className="card-text">{data.mail}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import "./Style.css";
import Card from "./Card";
import { FormCheck } from "react-bootstrap";
export default function Input() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [flag, setFlag] = useState(false);
  const [id, setID] = useState();
  const [data, setData] = useState([]);

  var letters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  function Add() {
    var val = {
      name: name,
      mail: email,
    };

    if (email.match(mailformat)) {
      var local = localStorage.getItem("users");

      if (local) {
        local = JSON.parse(local);
      } else {
        local = [];
      }
      local.push(val);
      setData([...local]);
      var temp = [...local];
      localStorage.setItem("users", JSON.stringify(temp));
      setName(" ");
      setEmail(" ");
    } else {
      alert("Please enter valid Email");
    }
  }
  function Check(value) {
    var letters = /^[A-Za-z ]+$/;
    if (value.length >= 0) {
      if (value.match(letters)) {
        setName(value);
      } else {
        alert("Please Enter only Alphbets");
      }
    }
    if (value.length === 1) {
      setName(" ");
    }
  }

  function Set() {
    if (email.match(mailformat)) {
      var local = localStorage.getItem("users");
      local = JSON.parse(local);

      local[id].name = name;
      local[id].mail = email;
      console.log("local", local);
      setData([...local]);
      var temp = [...local];
      localStorage.setItem("users", JSON.stringify(temp));
      setFlag(false);
      setName(" ");
      setEmail(" ");
    } else {
      alert("Please enter valid Email");
    }
  }
  function Update(id) {
    setFlag(true);
    setID(id);
    console.log("id", id);
    var local = localStorage.getItem("users");
    local = JSON.parse(local);
    setEmail(local[id].mail);
    setName(local[id].name);
  }
  return (
    <div
      className="login ml-3"
      style={{ width: "50%", marginTop: "3%", display: "flex" }}
    >
      {/* <h1 style={{ textAlign: "center" }}>Enter Details</h1> */}
      <form style={{ width: "50%" }}>
        <div className="container">
          <label>
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            className="alphaonly"
            onChange={(e) => {
              Check(e.target.value);
            }}
            value={name}
            pattern="[a-zA-Z]*"
            required
          />

          <label htmlFor="psw">
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            style={{ width: "100%", padding: "12px 20px", margin: "8px 0" }}
            name="psw"
            pattern=".+@globex.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          {flag === false ? (
            <>
              <button
                type="button"
                className="btn btn-lg btn-primary"
                onClick={() => {
                  Add();
                }}
                disabled={name.length && email.length > 0 ? false : true}
              >
                Add User
              </button>
            </>
          ) : (
            <button
              type="button"
              className="btn btn-lg btn-primary"
              onClick={() => {
                Set();
              }}
              disabled={name.length && email.length > 0 ? false : true}
            >
              Update
            </button>
          )}
        </div>
      </form>
      <div style={{ paddingLeft: "20%" }}>
        <Card
          update={(e) => {
            Update(e);
          }}
        />
      </div>
    </div>
  );
}

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import Model from "./compo/Model";

const Modal = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setNewModal] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    console.log(username, password)
    e.preventDefault();
    await axios
    .post("http://localhost:5000/login",{
      username,
      password,
    })
    .then((res) => {
console.log("inside of login axios res ",res);
// localStorage.setItem("jasonWEbToken", JSON.stringify(res.data.data.jwt))
// return navigate("/chat")
if(res.data){

  const localStore = localStorage.setItem("jasonWEbToken", JSON.stringify(res.data.data.jwt))
localStore && navigate("/chat/ali")
}
// if(localStore){return navigate("chat", { replace: true })}

    }).catch((err) => console.log("inside of the login err",err))


    // if (
    //   e.target[0].value === item.username &&
    //   e.target[1].value === item.password
    // ) {
    //   ;
    // } else {
    //   return console.log("somting wrong");
    // }


  };
  

  return (
    <div className="wrappers">
      <div className="form">
        <h1 className="title">Welcome to Microsoft Teams</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button
              type="submit"
              className="button"
              onClick={() => console.log("button is clicked")}
            >
              <span>Sign In</span>
            </button>
          </div>
        </form>

        <div align="center" className="linkdivbtn">
          <Link onClick={() => setNewModal(true)} className="linkbtn">
            create new account
          </Link>
        </div>
      </div>

      {modal && <Model closeModal={setNewModal} />}
    </div>
  );
};

export default Modal;

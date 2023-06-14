import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./moddel.css";
import styled from "styled-components";

const H1 =styled.h1`
font-size: 1.5em
` 



function Model({ closeModal }) {
  const navigate = useNavigate()

  const [state, setState ] = useState({
    username: "",
    password: "",
    email : "",
   });

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("in Model page", e)


await axios
.post("http://localhost:5000/register", {
  username : state.username,
  email : state.email,
  password : state.password,
}).then ((res) => console.log("inside of the register api res", res), navigate("/modal"))
.catch((err) => console.log("inside of the register api error", err))

}

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        
        <div className="titlename" >
          <H1>Register Here</H1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={state.username}
            onChange={handleChange}
            className="signupinput"
            placeholder="Username"
            required
          />
            <input
            
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
            className="signupinput"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            className="signupinput"
            placeholder="Password"
            required
          />
          <div align="center" className="signinbtn">
            <button type="submit" className="signup" >
              <span>Sign Up</span>
            </button>
          </div>

          {/* <input id="button" type="submit" name="button" onclick={() => console.log("button is clicked")} value="enter"/> */}
          
        </form>

       

        <div  style={{ width: "350px"}}>
          <button  className="closebtn"
         onClick={ () => closeModal(false) }
            >
             
            <span> cancel </span>
          </button>
          </div>

      </div>
    </div>
  );
}

export default Model;
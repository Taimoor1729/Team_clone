import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./moddel.css";





function Model({ closeModal }) {
  const navigate = useNavigate()

  const [state, setState ] = useState({
    username: "",
    password: "",
    email : "",
   });

   useEffect(() => {
    localStorage.setItem('form', JSON.stringify(state))
   }, [state])
 

  const handleSubmit =  (e) => {
    e.preventDefault();
    // console.log("in Model page", e)
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
          <h1>Register Here</h1>
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
            <button type="submit" className="signup" onClick={() => navigate('/chat/ali')}>
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
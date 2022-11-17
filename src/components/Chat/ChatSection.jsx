import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import "./chat.css";


const StyledHeading = styled.section`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  border-bottom: 1px solid rgb(224 224 224);
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  width: 99%;
  > .heading {
    margin-right: 50px;
    float: right;
    margin-bottom: 10px;
    font-size: medium;
  }
`;

const ChatSection = () => {
  const chatContainer = useRef(null)
  const [input, setInput] = useState("")
  const location = useLocation();
  const { state } = location;
  console.log("inside of the chat section ", state);
  const message = state?.mysms;
  const mymessage =state?.sangi;
  // state?.sangi

const  storedata = ( ) => {
  message.push(input);
  setInput("")
}

useEffect(() => {
  chatContainer.current?.scrollIntoView({ behavior: 'smooth' });
});


  return (
    <div
      className="chatSection testing"
      style={{
        boxShadow: "rgb(231 231 231) -15px 0px 10px -10px ",
        width: "50rem",
      }}
    >
      <StyledHeading>
        <h3 className="heading">{state?.name}</h3>
      </StyledHeading>


        <div className="chat-section-data"   style={{ overflowY : ' scroll' }}>
      
      { mymessage?.map((item) => (
        <div style={{marginLeft: "25px"}}>
          <p
            style={{
              backgroundColor: "lightgray",
              padding: "0px 20px",
              width: " 40%",
            }}
          >
            {item}
          </p>
        </div>
      )) }
     
      {message?.map((item) => (
        <div
          style={{
            backgroundColor: "rgb(81, 57, 62)",
            textAlignLast: "end",
            padding: "0px 20px",
            width: "51%",
            float: "right",
            display:"flex",
            flexDirection: "column",
            marginBottom: "10px",
            
          }}
          ref={chatContainer}
        >
          <p style={{ backgroundColor: " #51393e", color: "white", margin: "5px" }}>{item}</p>
        </div>
      ))}
      </div>
      <div className="inputofchat">
        <input className="chatinput" placeholder="type your message here" 
                 value={input}
                 onChange={(e) => setInput(e.target.value)}/>
        <div>
         
          <button className="chatbtn" onClick={storedata}>
            <i className="fi fi-rr-paper-plane"></i>
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default ChatSection;

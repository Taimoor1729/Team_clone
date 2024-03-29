import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import "./team.css";

const Containner = styled.div`
  height: 95%;
  justify-content: space-between;
  /* width: 852px; */
  width: 99%;
`;
const Heading = styled.section`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  border-bottom: 1px solid rgb(224 224 224);
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  width: 97%;
  > .heading {
    margin-right: 50px;
    float: right;
    font-size: medium;
    padding-top: 10px;
    margin-bottom: 8px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  padding: 10px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  padding: 10px;
  margin-left: 10px;
  width: 85%;
`;
const Feeds = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 83%;
  /* position: absolute; */
  /* position: absolute;
    width: 80%;
    height: 100%; */
`;
const P = styled.p`
  font-size: 10px;
`;
const Middle = styled.p`
  font-size: 10px;
  margin-left: -13%;
  display: flex;
  justify-content: space-around;
`;
const AvgContainner = styled.div``;
const Forms = styled.div`
  background-color: beige;
  height: 100px;
  height: 13%;
`;
const Button = styled.button`
  background-color: #464775;
  border-radius: 8px;
  border: none;
  color: white;
  width: 137px;
  height: 34px;
  margin-left: 60px;
  margin-top: 13px;
  cursor: pointer;
  
`;

const TeamSection = () => {
  const [form, setForm] = useState(false);
  const [message, setMessage] = useState("");

  const location = useLocation();
  const { state } = location;
  const { messagies } = state

  const [data, setData] = useState(messagies)
  console.log("data in state", state)
  console.log("all the data in the location", location.pathname);
  console.log("what is in the messagies", messagies)


  const storedata = () => {

    const newMessage = {
      id: state.messagies.length + 1,
      name: "Lorem Generator",
      description: message,
      img: 'https://cdn-icons-png.flaticon.com/128/2202/2202112.png',
    }

   

    if (message.trim().length !== 0) {
      setData((prevState) => [...prevState, newMessage])
      setMessage("");
      setForm(false);
    }
  };

  const inputForm = () => {
    return (
      <div className="inputofchat">
        <input
          className="chatinput"
          placeholder="type your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div>
          <button className="chatbtn" onClick={storedata}>
            <i className="fi fi-rr-paper-plane"></i>
          </button>
        </div>
      </div>
    );
  };


  return (
    <div
      style={{
        boxShadow: "rgb(231 231 231) -15px 0px 10px -10px ",
        width: "77em",
        display: "flex"
      }}
    >
      <Containner>
        <Heading>
          <h3 className="heading">{state?.name}</h3>
        </Heading>
        <Feeds>
          {data?.map((item) => (
            <>
              <Wrapper>
                <input
                  type="image"
                  img="true"
                  src={item.img}
                  alt={""}
                  style={{ width: "40px", height: "45px" }}
                />
                <AvgContainner>
                  <Section>
                    {item.name}
                    <P> {item.description} </P>
                  </Section>
                  <Middle>Tuesday, October 25, 2022</Middle>
                </AvgContainner>
              </Wrapper>
            </>
          ))}
        </Feeds>
        <Forms>
          {form === false ? (
            <>
              <Button onClick={() => setForm(true)}> New Conversation </Button>
            </>
          ) : (
            inputForm()
          )}
        </Forms>
      </Containner>
    </div>
  );
};


export default TeamSection
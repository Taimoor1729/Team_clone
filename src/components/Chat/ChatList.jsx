import React, { useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const contacts = [
  {
    name: "ali",
    id: 1,
    mysms : ["good","good"],
    sangi : ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at tempor dolor, ac fringilla justo. Donec magna elit, mollis nec urna vel, ultricies cursus tortor. Nulla imperdiet urna a faucibus vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et interdum orci, non scelerisque dui. Suspendisse sit amet nibh ultrices, porttitor metus non, finibus lorem. Nulla vitae ante et erat tempus feugiat ut eget dolor. Quisque bibendum nunc eu sem faucibus lacinia."]
  },
  {
    name: "hassan",
    id: 2,
    mysms : ["time"],
    sangi : ["hello"]
  },
  {
    name: "taimor",
    id: 3,
    mysms : ["yea","good","great"],
    sangi : ["something went wrong"]
  },
  {
    name: "changaiz",
    id: 4,
    mysms : ["good"],
    sangi : ["what"]
  },
  {
    name: "babar",
    id: 5,
    mysms : ["yea"],
    sangi : ["win the match"]
  },
  {
    name: "ayub",
    id: 6,
    mysms : ["nass"],
    sangi : ["ji"]
  },
];
const Label = styled.h2`
  margin-left: 10px;
  margin-bottom: 8px;
  height: 30px;
  font-size: medium;
  border-bottom: 1px solid rgb(224 224 224);
  width: 243px;
  position: relative;
  /* margin-bottom: 0px; */
`;
let activeStyle = {
  margin: "0",
  padding: "0",
  marginLeft: "10px",
  width: "248px",
  height: "50px",
  display: "flex",
  color: "#444791",
  // marginBottom: "10px",
  position: "relative",
  gap :"15px",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "spaceAround",
  backgroundColor: "white",
  textDecoration: "none",
  borderRight: "3.5px solid rgb(68, 71, 145)",
  paddingTop: '5px',
  paddinBottom: '5px',
};
let unactiveStyle = {
  margin: "0",
  padding: "0",
  marginLeft: "10px",
  width: "250px",
  height: "50px",
  display: "flex",
  color: "#757575",
  // marginBottom: "10px",
  position: "relative",
  gap: "15px",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "spaceAround",
  textDecoration: "none",
  paddingTop: '5px',
  paddinBottom: '5px',
};



const ChatList = () => {
const navigate = useNavigate()

useEffect(() => {navigate('/chat/ali')},[]) 

  return (
    <div style={{ display: "flex" , boxShadow: "rgb(231 231 231) -15px 0px 10px -10px "}}>
      <div style={{ display: "flex", flexDirection: "column", height: "467px", padding: "5px"}}>
        <Label>Chat</Label>

        {contacts.map((item, index) => 
        (
          <NavLink
            to={`${item.name}`}
            state={item}
            key={index}
            style={({ isActive }) => (isActive ? activeStyle : unactiveStyle )}
          >
            <input
              type="image"
              img="true"
              src={"https://cdn-icons-png.flaticon.com/128/3135/3135715.png"}
              alt="photo"
              style={{ width : "40px" }}
            />
            {item.name}
          </NavLink>
        )
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default ChatList;

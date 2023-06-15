import React from "react";
import styled from "styled-components";
import { DataBottom, DataTop } from "../Data/sidebarDataArray";
import { NavLink } from "react-router-dom";


const Containner = styled.div`
  align-items: center;
  padding: 2px;
  height: 92vh;
  display: flex;
  flex-direction: column;

`;
const SidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  cursor: pointer;
  flex: 1;

  &:hover {
 
    color: #444791;
    cursor: pointer;
    background-color: white; //#f5f5f5
    /* align-items: center; */
    
  }
`;



const SidebarBottom = styled.div`
  display: flex;
  justify-content: space-between;
  /* justify-content: flex-end; */
  flex-direction: column;
  padding: 10px 0px;
  cursor: pointer;
`;

let activeStyle = {
  textDecoration: "none",
  // cursor: "pointer",
  color: "#444791",
  marginBottom: "5px",
  width: "55px",
  height: "50px",
  display: "flex",
  flexDirection: "column",
  fontSize : '13px',
  alignItems: "center",
  position: "relative",
  borderLeft: "3px solid #444791",
};
let unactiveStyle = {
  textDecoration: "none",
  color: "#757575",
  // cursor: "pointer",
  width: "55px",
  height: "60px",
  display: "flex",
  flexDirection: "column",
  // marginBottom: "5px",
  alignItems: "center",
  position: "relative",
  fontSize : '13px',
};



const SideNav = () => {
  return (
    <div>
      <Containner>
        <div style={{flex: 1}}>
          {DataTop.map((item, index) => (
            <NavLink to={item.path} style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)} key={index} >
              <SidebarTop>
                {item.icon}
                {item.name}
              </SidebarTop>
            </NavLink>
          ))}
        </div>

        <div style={{ marginTop: "28px", textAlign:"center" }}>
          {DataBottom.map((item, index) => (
            <SidebarBottom key={index} >
              {item.icon} {item.name}
            </SidebarBottom>
          ))}
        </div>
      </Containner>
    </div>
  );
};
export default SideNav;
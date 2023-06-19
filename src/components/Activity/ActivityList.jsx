import React, { useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Activities } from "../../Data/sidebarDataArray";


const Wrapper = styled.div`
  margin: 25px 1px 28px 11px;
  display: flex;
  width: 183px;
`;

const Label = styled.h2`
  margin-left: 10px;
  margin-bottom: 15px;
  height: 30px;
  font-size: medium;
  border-bottom: 1px solid rgb(224 224 224);
  width: 200px;
  position: relative;
  margin-bottom: 0px;
`;

const Title = styled.div`
  border: none;
  background-color: inherit;
  padding: 4px 38px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  font-style: italic;
  margin-top: -6px;


`;

let activeStyle = {
  textDecoration: "none",
  color: "#444791",
  cursor: "pointer",
  // marginBottom: "10px",
  // width: "62px",
  // height: "60px",
  display: "flex",
//   flexDirection: "column",
  marginBottom: "-25px" ,
  alignItems: "center",
  position: "relative",
  // fontSize: "20px"
  // borderLeft: "3px solid #444791",
};

let unactiveStyle = {
  textDecoration: "none",
  color: "#757575",
  cursor: "pointer",
  // marginBottom: "10px",
  // width: "66px",
  // height: "60px",
  display: "flex",
//   flexDirection: "column",
  marginBottom: "-25px" ,
  alignItems: "center",
  position: "relative",
};




function ActivityList() {
  return (

    <div style={{ display: "flex", boxShadow: "rgb(231 231 231) -15px 0px 10px -10px " }}>
      <div style={{ display: "flex", flexDirection: "column", textDecoration: "none", height: "482px", padding: "5px", width: "260px"}}>
        <Label>Activities</Label>
        {/* <div className="listeditems"> */}
          {Activities.map((item, index) => (
            <NavLink
              to={`${item.path}`}
              state={item}
              key={index}

              style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
            >
              <Wrapper>
                <div style={{ marginTtop: "-12px" }}>
            
                  <input
                    type="image"
                    img="true"
                    src={"https://cdn-icons-png.flaticon.com/128/2202/2202112.png"}
                    alt="photo"
                    style={{ width: "40px" }} />
                </div>
                <div style={{ marginTop: "-6px", textAlign: "center" }}>
                  <Title>{item.name}</Title>
                  <p style={{ fontSize: "10px", marginTop: "2px" }}>{item.msgdetail}</p>
                </div>
              </Wrapper>
            </NavLink>

          ))}
        {/* </div> */}
      </div>
      <Outlet />
    </div>
  );
}

export default ActivityList;

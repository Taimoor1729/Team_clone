import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledHeading = styled.section`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  border-bottom: 1px solid rgb(224 224 224);
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  width: 780px;
  > .heading {
    margin-right: 50px;
    float: right;
  }

`;
const P = styled.p`
  margin-left: 20px;
`;


const ActivitySection = () => {
  
  const location = useLocation();
  const { state } = location;
  console.log("inside of location",location.state);

  
  return (
    <div
      className="message details"
      style={{ boxShadow: " rgb(231 231 231) -15px 0px 10px -10px" }}
    >
      <StyledHeading>
        <h3 className="heading" style={{marginBottom: '11px',fontSize: 'medium'}}>{state?.name}</h3>
      </StyledHeading>

      <P>{state?.Msgtitle}</P>
    </div>
  );
};

export default ActivitySection;

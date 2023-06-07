import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'



const teamsdata = [
    {
        id : 1,
        name : "General",
        path : "general",
        data : ["hy i'm in general tab"],
        messagies : [
            {
                 id : 1,
                 name: "Lorem Generator",
                 description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting," ,
                 img : 'https://cdn-icons-png.flaticon.com/128/2202/2202112.png'
        },
        {
            id : 2,
            name: "Lorem Generator",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting," ,
            img : 'https://cdn-icons-png.flaticon.com/128/2202/2202112.png'
   },
   {
    id : 3,
    name: "Lorem Generator",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting," ,
    img : 'https://cdn-icons-png.flaticon.com/128/2202/2202112.png'
},
{
    id : 4,
    name: "Lorem Generator",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting," ,
    img : 'https://cdn-icons-png.flaticon.com/128/2202/2202112.png'
}
        ]
    },
    {
        id : 2, 
        name : "Attendance",
        path : "attendance",
        data : ["hy i'm in general tab"]
    },
    {
        id : 3,
        name : "CloudTek Events",
        path : "events",
        data : ["hy i'm in general tab"]
    }, 
    {
        id : 4, 
        name : "Equipment",
        path : "equipment",
        data : ["hy i'm in general tab"]
    },
    {
        id : 5,
        name : "Hr Annousment",
        path : "annousment",
        data : ["hy i'm in general tab"]
    },
    {
        id : 6,
        name : "Interent Health",
        path : "health",
        data : ["hy i'm in general tab"]
    },
    {
        id : 7,
        name : "Random",
        path : "random",
        data : ["hy i'm in general tab"]
    }
]




const Containner = styled.div`
    display: flex;
    flex-direction: column;

`

const SecBox = styled.button`
    border: none;
    /* border: 1px solid; */
    border-top: 1px solid rgb(215 183 189);;
    height: 50px;
    font-size: small;
    color: grey;
    background-color: transparent;
    cursor : pointer
    
    ` 

const Box = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    /* background-color: aliceblue; */
    /* box-shadow: 0px 1px 3px 1px #888888; */
    /* height: 495px; */
    height: 446px;
    
`
const Label = styled.h2`
     margin-left: 10px;
  margin-bottom: 8px;
  height: 30px;
  font-size: medium;
  border-bottom: 1px solid rgb(224 224 224);
  width: 200px;
  position: relative;
  margin-bottom: 0px;
`
const Wrapper = styled.div`
    margin: 4px 1px 13px 9px;
    /* padding-top: 10px; */
  display: flex;
  width: 183px;
  cursor: pointer;
  margin-top: 5px;
`
const activeStyle = {
backGroundColor: "black",
textDecoration : "none",
color : "#444791",
fontSize:" 20px",
borderRight: "3px solid #444791",
cursor: "pointer",
marginBottom: "10px",
height: "36px",
display: "flex",

}

const unactiveStyle = {
// textDecration : "none"
textDecoration:"none",
color : "black"
}



const TeamsList = () => {
  return (
    <>
    <div className='teamstab' style={{boxShadow: "rgb(231 231 231) -15px 0px 10px -10px ", display : "flex", overflow : "hidden", height : "92vh"}} >
    <Containner>
     <Box>
        <Label>Teams</Label>

        {
          teamsdata.map((item, index) => <div start={{display : "flex", flexDirection : "column"}}  key={index}> 
        <NavLink  to={`${item.name}`} state={item} style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>

        <Wrapper> 
            {item?.name}
        </Wrapper>
        </NavLink>
        
           </div>

            )
        }

    </Box>
    <SecBox>
    <NavLink to="/routes" state={teamsdata} style={{textDecoration: "none", color : "grey"}}>
    <i className="fi fi-rr-user-add" style={{marginRight: "15px"}} /> 
         Join and create team
    </NavLink>
         </SecBox>
    </Containner>
    <Outlet />
    </div>
     </>
  )
}

export default TeamsList
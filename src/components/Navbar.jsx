import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import './navbar.css'


const Containner = styled.div`
  width: 100%;
  display: flex;
  background-color: #464775;
  color: white;
  flex: 1;
  padding: 6px 0px;
`
const SideBar = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* flex: 1; */
color: white;
width: 62px;
`
const Middle = styled.div`
display: flex;
/* flex: 3; */
justify-content: flex-start;
align-items: center;
width: 17.5%;
padding-left: 17px;
`
const Left = styled.div`
display: flex;
flex: 11;
justify-content: space-between;
`
const SearchItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  flex: 6;
  padding: 8px;
  border:none;
  color: #464775;
  border-radius: 6px;
  margin-left: 14px;
`
const MainProfile = styled.div`
display: flex;
padding-right: 35px;
align-items: center;
justify-content: flex-end;
flex: 4;
`
const ProfileOption = styled.div`
font-size: 28px;
margin-right: 16px;
cursor: pointer;
`
const Profile = styled.div`
height: 32px;
`
const Button = styled.div`
  background-color: white;
  color: black;
  border-radius: 5px;
  font-size: small;

`


const Navbar = () => {
  const [selected, setSelected] = useState(false)

const navigate = useNavigate()

const togglebtn = () => {
setSelected(!selected)
}


const protect = () => { 
  localStorage.clear()
  navigate ("/modal")
} 

  return (
    <div>
      <Containner>
      <SideBar>
      <i className="fi fi-rr-angle-left"></i>
        <i className="fi fi-rr-angle-right"></i>
     </SideBar>
      <Middle>
          Microsoft Teams
      </Middle>
      <Left>
        <SearchItem>
        <i className=" fi fi-rr-search "></i>
        <input placeholder='search' style={{ border: 'none', width: '100%', outline: 'none'}}/>
       </SearchItem>
      <MainProfile>
      <ProfileOption>
      <Button onClick={() => protect()}  style={{padding: "2px 9px"}}>SignOut</Button>
      </ProfileOption>
      <Profile>
      <input type="image" img="true" value={selected} onClick={togglebtn} src = {'https://cdn-icons-png.flaticon.com/128/2202/2202112.png'} alt={''} style={{width: '32px'}} />
      </Profile>
      
      </MainProfile>
      </Left>
      </Containner>

      {selected ? 
      <div className='sub-menu-wrap'>
      <div className='submenu'>
        <div className='user-info'>
        <input type="image" img="true"  src = {'https://cdn-icons-png.flaticon.com/128/2202/2202112.png'} alt={''} style={{width: '32px'}} />
             <h2>User Name</h2>
        </div>
        <hr />
        <div className='user-deatail'> 
            <p>Test0000@test.com</p>
       
        </div>
        <hr />
        <button onClick={() => protect()} className="signout-btn">
          <p> Sign Out</p>
          </button>
     </div>
      </div>  : null  }


    </div>

  )
}
export default Navbar

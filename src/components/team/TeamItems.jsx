import React, { useState } from 'react'
import './team.css'

const arrys = [
  "Team no 1 " ,
  "Team no 2 " ,
  "Team no 3 " ,
]


const TeamItems = () => {
    const [bolean, setBolean] = useState(false)
    const [input, setInput] = useState("")
const [arry, setArry] = useState(arrys)

const addingData = (input) => {
    console.log("inside of the", input);
    debugger
    if(input.length !== 0){
    arry?.push(input);
    setArry(arry);
    setInput("");
    }else {
        return false
    }
}



  return (
    <>
    
        <div className='contianner' >
            <div className='wrapper' onClick={() => setBolean(true)}>
            <i className="fi fi-rr-user-add" style={{fontSize : '30px'}}></i>
                <h3>Create a Team</h3>
                <input type="text" placeholder='Enter Code' value={input} onChange={(e) => setInput(e.target.value) } />
                
                { 
                    bolean ? 
                    <button onClick= {() => addingData(input)} style={{marginTop: "10px"}}> Join team </button>
                    : <> </>
                 }
               
            </div>

                
                    { 
                     arry.map((item) => <div className='wrapperr'  onClick={() => console.log("button is clicked")}>  {item} </div>)
                    }


            {/* <div className='wrapper'>
            <i class="fi fi-rr-user-add" style={{fontSize : '30px'}}></i>
                <h3>Create a Team</h3>
            </div> */}

        </div>

    </>
  )
}

export default TeamItems
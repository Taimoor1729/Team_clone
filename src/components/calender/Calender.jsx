import React from 'react'
import "./calender.css"

const Calender = () => {
  return (
    <>
        <div className="frame" style={{boxShadow: "rgb(231 231 231) -15px 0px 10px -10px" , border: "none"}}>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKarachi&src=dGVtaXRlY2g2NjlAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4ucGsjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%230B8043" />
        </div>
    </>
  )
}

export default Calender
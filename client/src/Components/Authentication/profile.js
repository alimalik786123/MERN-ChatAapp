import React, { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {Avatar} from '@chakra-ui/react'
const msg1=(msg)=>{
  return msg
}
function Profile(props) { 
    const userid=window.localStorage.getItem("selectedid")
    const [color1,setcolor]=useState("linear-gradient(90deg, rgba(100,194,255,1) 0%, rgba(24,160,199,1) 48%, rgba(15,185,255,1) 100%")
    const [message,setmessage]=useState([])
    const curruser=window.localStorage.getItem("data")
    const messagedata=async(e)=>{
      const data=props.data1

      console.log(data._id,"clicked");
     props.getid(data)
     window.localStorage.setItem("selectedid",data._id)
     setcolor("linear-gradient(90deg, rgba(100,194,255,1) 0%, rgba(24,160,199,1) 48%, rgba(15,185,255,1) 100%")  
        
        
    }
  return (
    <div>
        <button className="user" style={props.data1._id===userid?{background:color1}:{background:"white",color:"black"}}  onClick={messagedata} value={props.data1} >
   <Avatar width={'44px'} height='44px' margin={'3px'} marginLeft='10px' name='Dan Abrahmov' src={props.img} />
   <h1 className="profiletxt" style={props.data1._id===userid?{color:"white"}:{color:"black"}}>{props.name}</h1>
   </button>
    </div>
  )
}

export default Profile
export {msg1}

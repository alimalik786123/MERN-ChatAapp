
import React, { createContext, useEffect, useState } from 'react'
import ContentPage from './ContentPage'
import ContentLeft from './ContentLeft'
export const Chats=createContext();


export const Chat = () => {
   const [data,setdata]=useState([])
   const [userid,setuserid]=useState('')
   const [profile,setprofile]=useState([])
   const [msg,setmsg]=useState()
   const [profileuserdata1,setprofileuserdata1]=useState([])
   const curruser=window.localStorage.getItem("data")
   var constdata,profiledata
   const message=(message,data)=>{
     console.log(message,"from chat");
     setmsg(message)
     setdata(data)
   }
    const chat=async()=>{
    //   constdata= await fetch("http://localhost:8080/fetchChat",{
    //     method:'POST',
    //     headers:{
    //      'Content-Type':'application/json',
    //     },
    //     body:JSON.stringify({curruser:curruser}) 
    //  })
   
  const constdata= await fetch("http://localhost:8080/profiledata",{
    method:'POST',
    headers:{
     'Content-Type':'application/json',
    },
    body:JSON.stringify({id:curruser})})
     profiledata=await constdata.json()
     const profile1=profiledata.map((data1)=>{return data1.users}).flat().filter((data2)=>{return data2!==curruser})
     console.log(profile1);
     setprofile(profile1)
     window.localStorage.setItem("profileid",JSON.stringify(profile1))

    
    
     
    }
    
    useEffect(()=>{
   chat()
    },[])
  

  return (
    <>
    <Chats.Provider value={{chat:constdata,profile:profile}}>
    
     <ContentLeft
     profiledata={profileuserdata1}
     message={message}
     
     />
     <ContentPage
     content={msg}
     userdata={data}
     />
    
    </Chats.Provider>
    </>
  )
}

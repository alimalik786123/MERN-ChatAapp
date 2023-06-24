
import React, { createContext, useState } from 'react'
import ContentPage from './ContentPage'
import ContentLeft from './ContentLeft'
export const Chats=createContext();
export const Chat = () => {
   const [chats,setchats]=useState([])
   const [userid,setuserid]=useState('')
   const curruser=window.localStorage.getItem("data")

    const chat=async()=>{
      const response= await fetch("http://localhost:8080/fetchChat",{
        method:'POST',
        headers:{
         'Content-Type':'application/json',
        },
        body:JSON.stringify({curruser:curruser}) 
     })
    }
  //   useEffect(()=>{
  //  fetchChat()
  //   },[])
  

  return (
    <>
    <Chats.Provider value={{chat:chat}}>
    
     <ContentLeft/>
     <ContentPage/>
    
    </Chats.Provider>
    </>
  )
}

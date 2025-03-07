'use client'
import React, { useState } from 'react'
import { ThemeProvider as NextThemesProvider, ThemeProvider } from "next-themes"
import Header from '@/components/custom/Header'
import Hero from '@/components/custom/Hero'
import { Messagecontext } from '@/context/messagecontext'
import { Userdetailcontext } from '@/context/Userdetail'

function Provider({children}) {
   
   const  [message,setmessage] = useState();
   const [userdetail,setuserdetail] = useState();

  return (
  <div>
    <Userdetailcontext.Provider value={{userdetail,setuserdetail}}>
    <Messagecontext.Provider value={{message,setmessage}}>
    <NextThemesProvider
     attribute="class"
     defaultTheme="dark"
     enableSystem
     disableTransitionOnChange>
        {children}
        <Hero/>
    </NextThemesProvider>
    </Messagecontext.Provider>
    </Userdetailcontext.Provider>

  </div>
 
  )
}

export default Provider
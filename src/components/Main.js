import React, { useState } from 'react'
import FormBox from './FormBox'
import List from './List'

const Main = () => {
    const [userInfos,setUserInfos]=useState([]);
    const getUserInfo =(userInfoObj)=>{
        setUserInfos([...userInfos,userInfoObj]);
    }
  return (
    <section className='main'>
        <FormBox getUserInfo={getUserInfo}/>
        <List userInfos={userInfos}/>
    </section>
  )
}

export default Main
import React from 'react';
import { Header } from './';
import styled from 'styled-components';
import {UserNameModal} from './';
import {Application} from './';
import { useState, useEffect, useMemo } from 'react';

function App() {

  const [userName, setUserName] = useState<null | any>(null);
  function setUserNameFunction(name: string){
    localStorage.setItem('username', name);
    setUserName(name);
  }

  useEffect(()=>{
    if(localStorage.getItem('username') !== null){
      setUserName(localStorage.getItem('username'));
    }
    else{
      setUserName(null);
    }
  }, [])

  return (
    <>
      <Application username={userName}/>
      {console.log(userName)}
      {userName === null ? <UserNameModal setUserNameFunction={setUserNameFunction}/> : null}
      
    </>
  );
}

export default App;

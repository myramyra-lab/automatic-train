import React,{useState} from 'react';
import { FormControl,  InputLabel, Input, Button, FormHelperText} from '@mui/material';


function CreateUser() {
  const [userInfo, setUserInfo] = useState({email:""})

  function registerUsers(e){
    e.preventDefault();
    console.log("submitted")
    const data = {email:userInfo.email}

    let key = (data.api_key)
    // let key = sessionStorage.getItem('API-KEy')
    console.log(key)
  

    let url = `http://localhost:8000/api/register?api_key=${key}`
    let h = new Headers(); 
    if(data){
      h.append('Content-Type','application/json');
    }
    let options = new Request(url, {
      method:'POST',
      headers:h,
      body:JSON.stringify(data)
    })
    fetch(options)
      .then(response=>response.json())
      .then(data=>
        setUserInfo(data)
        // window.location.reload()
      )
      .then(success)
      .catch(fail)

    function fail(err){
      console.log(err.message)
    }
    function success(content){
      if(content){
        if('error' in content){
          fail(content.error);
          return;
        }
        // sessionStorage.setItem('API-KEy',data.api_key)
      }
    }

    }
  return (
    <div>
      <FormControl >
       <InputLabel htmlFor="my-input">User Email</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" onChange={e=>setUserInfo({...userInfo, email:e.target.value})} />
      <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      <Button variant="text" color="primary" onClick = {registerUsers}>Register User</Button>
    </FormControl>
    </div>
  )
}

export default CreateUser;

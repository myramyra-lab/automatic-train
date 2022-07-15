import React,{useState} from 'react';
import { FormControl,  InputLabel, Input, Button, FormHelperText} from '@mui/material';
import axios from 'axios'


function Xapikeys() {
  const [userInfo, setUserInfo] = useState({email:""})

  function registerUsers(e){
    e.preventDefault();
    console.log("submitted")
    const data = {email:userInfo.email}
    // axios.post(`http://localhost:8000/api/register`,data)
    // .then(res=>{setUserInfo(res.data)})
    // .catch((error)=>{console.log(error)})

    let url = "http://localhost:8000/api/register"
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
        setUserInfo(data),
        window.location.reload()
      )
      .catch((error)=>{console.log(error)})
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

export default Xapikeys
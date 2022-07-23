import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { FormControl,  InputLabel, Input, Button} from '@mui/material';


function CreateItems() {
  const [itemInfo, setItemInfo] = useState({name:""})
  const [items, setItems] = useState([])

  const data = {name:itemInfo.name}
  function createItem(){
      axios.post(`http://localhost:8000/api/createitem`,data)
      .then((res)=>setItemInfo(res.data))
      .catch((err=>console.log(err)))
  }
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/items`)
    .then(res=>{ 
      setItems(res.data.data)
    })
  },[])
  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" onChange={e=>setItemInfo({...itemInfo, name:e.target.value})} />
        <Button variant="text" color="primary" onClick = {createItem}>Create Item</Button>
      </FormControl>
      <br></br>
      <div>List of API Keys</div>
      <div>{items}</div>
    </div>
  )
}

export default CreateItems;

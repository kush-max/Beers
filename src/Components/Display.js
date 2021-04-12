import React,{useState,useEffect} from 'react';
import Grid from './Grid'
import Searchbar from './Searchbar';
const axios = require('axios');
function Display() {
    const [beers, setbeers] = useState([])

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers')
    .then(res => {
        setbeers(res.data)
    })
},[])
   
    var ar=localStorage.getItem("fav")
    if(ar===null) ar=[]
    return (
        <>
        <Searchbar beers={beers}/>
        <div className="row">
            {beers.map((items,index)=>{  
                return <Grid name={items.name} image={items.image_url} description={items.description} isfav={ar.includes(items.name)}/>                
            })}
    
        </div>
        </>
    )
}
export default Display

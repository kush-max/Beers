import React, {useState} from 'react'
import './Grid.css'
function Grid({name,image,description,isfav}) {

    const [icon,setIcon] =useState((isfav)?"star":"star_border")
   
    function change(name){

        if (icon==="star_border") {
            let ar = JSON.parse(localStorage.getItem("fav"))
            if(ar===null) ar=[]            
            ar.push(name.name)
            localStorage.setItem("fav", JSON.stringify(ar))
            setIcon("star")

        }
        else {
            let ar = JSON.parse(localStorage.getItem("fav"))           
            ar = ar.filter((item)=> {
                return item!== name.name
            })
            console.log(ar)
            localStorage.setItem("fav", JSON.stringify(ar))                
            setIcon("star_border")
        }
    }
    
    return (
        <div className="row col-4 pl-2" style={{height: 200+'px',padding:5+"px"}}>
            <div className="col-6">
            <img src={image} width="100" height="150" alt="beers" style={{padding:15+"px"}}></img> 
            </div>
            <div className="col-6 overflow-auto" style={{height: 170+'px'}}>
            <i className="material-icons float-right" onClick={()=>change({name})} >{icon}</i>
            <br/> 
            <span className="font-weight-bold">{name}</span>
            <br/>               
            <p>{description}</p>
            </div>
            
            
        </div>  
    )
}
export default Grid

import React from 'react'

function Favourites() {
    var ar = JSON.parse(localStorage.getItem("fav"));
    return (
        <div>  
        <ol>         
            {ar.map((val,index) =>{return <li key={index} >{val}</li>})}
        </ol>   
        </div>
    )
}
export default Favourites

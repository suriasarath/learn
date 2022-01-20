import React  from "react";
import './Card.css'


function Card(props){
    return(
       <div className="card container width80">
           <h1>{props.name}</h1>

       </div>
        );

};

export default Card;
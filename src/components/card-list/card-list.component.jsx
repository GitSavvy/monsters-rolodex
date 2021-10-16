//import React from "react";

import './card-list.styles.css';


export const Cardlist = (props) => {
    //console.log(props)
 return (<div className='card-list' >
 { props.monsters.map( 
    monster =>   (  <h1 key={monster.id}> 
      {monster.name} {monster.email} </h1>)
      )
  }
 
 {props.children} </div>)  
}
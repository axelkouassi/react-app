import React, { Component } from 'react';
import {PersonCircle,Trash,PenFill} from 'react-bootstrap-icons';

const ContactCardIcon=(props)=>{
    console.log(props.cardIcon);
    const {name,email}=props.cardIcon  //destructure the object
    return (
      <div id = "card-icon" className="container border-bottom">
          <div className="row">
            <div className="col-1">
               <PersonCircle/>    
            </div>  
            <div className="col-7 text-left">
               <p>{name}</p>
               <p>{email}</p>   
            </div>   
            <div className="col-2">
               <div className="text-primary" ><PenFill/></div> 
            </div>
            <div className="col-2">
               <Trash/>    
            </div>
          </div>
      </div>  
    );
}

export default ContactCardIcon;
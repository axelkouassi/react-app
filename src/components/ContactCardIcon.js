import React, { Component } from 'react';
import {PersonCircle,Trash} from 'react-bootstrap-icons';

const ContactCardIcon=(props)=>{
    console.log(props.cardIcon);
    const {name,email}=props.cardIcon  //destructure the object
    return (
      <div id = "card-icon" className="container border-bottom">
          <div className="row">
            <div className="col-1">
               <PersonCircle/>    
            </div>  
            <div className="col-8 text-left">
               <p>{name}</p>
               <p>{email}</p>   
            </div>   
            <div className="col-3">
               <Trash/>    
            </div>
          </div>
      </div>  
    );
}

export default ContactCardIcon;
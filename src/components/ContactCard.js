import React from 'react';
import { Button } from 'react-bootstrap';

const ContactCard=(props)=>{

    console.log("In ContactCard");
    console.log(props.card);
    
    return(
    <div className="contact">
        <h1>Contact Card</h1>
        {props.card.map((listitem)=>{
            return(
            <div key={listitem.id} name={listitem.name} className="card">
                <div className="card-container">
                    <button type="button" id="del-btn">Delete</button>
                    <h4 id="name">{listitem.name}</h4>
                    <p>{listitem.email}</p>
                </div>
                <hr/>
            </div>);}
            ) // map
        }
    </div>
);

}

export default ContactCard;
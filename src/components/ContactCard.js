import React from 'react';

const ContactCard=(props)=>{

    console.log(props.details);
    
    return(
    <div className="contact">
        <h1>Contact Card</h1>
        {props.details.map((listitem)=>{
            return(
            <div className="card">
                <div className="card-container">
                    <button type="button" id="del-btn">Delete</button>
                    <h4 id="name">{listitem.name}</h4>
                    <p>{listitem.email}</p>
                    <hr/>
                </div>
            </div>);}
            ) // map
        }
    </div>
);

}

export default ContactCard;
import React, { Component } from 'react';
import ContactCardIcon from './ContactCardIcon';

const PersonListIcon = (props)=>{
    return(
    <div id="card-icon-con">
        <hr/>
        <h2 id="card-icon-con-title">Person List Icon</h2>
            {
            props.cardIcon.map((card)=>{
                return (<ContactCardIcon cardIcon ={card}/>)
           })
          }
    </div>

    );
}

export default PersonListIcon;
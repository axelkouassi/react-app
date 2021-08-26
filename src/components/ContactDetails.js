import React from 'react';

const ContactDetails=(props)=>{

    console.log(props.details);

    return(
        <div className="contact-list">
            <hr/>
            <h1>Contact Details</h1>
        <table>
            {/* <caption><h1>Contact Details</h1></caption> */}
            <thead>
                <tr>
                    <th><p>Person Id</p></th>
                    <th><p>Name</p></th>
                    <th><p>Email</p></th>
                    <th><p>Mobile</p></th>
                </tr>
            </thead>
            
            <tbody>
            {props.details.map((detail, index)=>{
                return(
                    <tr key={index}>
                        <td>{detail.id}</td>
                        <td>{detail.name}</td>
                        <td>{detail.email}</td>
                        <td>{detail.mobile}</td>
                    </tr>
                );
                })}
        </tbody>
        </table>

        {/* <h1>Contact List</h1>

        <ul>
        {props.details.map((listitem)=>{
                return(
                    <div>
                        <li key={listitem.id}>{listitem.id}, {listitem.name}, {listitem.email}, {listitem.mobile}</li>
                                </div>
                        );
                })}
            
        </ul> */}
        </div>
    );

}

export default ContactDetails;
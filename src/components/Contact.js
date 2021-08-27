import React, { Component } from 'react';

class Contact extends Component {
    state = {  }
    render() { 
        console.log(this.props.name)
        return (
        <li className="contact-search">{this.props.name}</li>
        );
    }
}
 
export default Contact;
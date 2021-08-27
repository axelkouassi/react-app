import React, { Component } from 'react';

class Contact extends Component {
    componentDidMount(){
        console.log("In componentDidMount contact")
    }
    componentWillUnmount(){
        console.log("In componentWillUnMount contact will unmount");
    }
    render() { 
        console.log(this.props.name)
        return (
        <li className="contact-search">{this.props.name}</li>
        );
    }
}
 
export default Contact;
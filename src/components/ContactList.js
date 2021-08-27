import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import Contact from './Contact';


class  ContactList extends Component {
    state = {
        showContacts:true
    }
    

    toggleShowHandler=()=>{
        console.log("Toggle show handler ContactList");
        console.log(this.props.cList);
        this.setState((prevState)=>{
            return {showContacts:!prevState.showContacts};
        })
    }
    render() { 
        console.log("In render of ContactList");
        console.log(this.props.cList);
        const contactListArr=(
            <ul>
                {
                    this.props.cList.map((contact)=>{
                        return <Contact key={contact.id} name={contact.name}/>
                    })

                }
            </ul>
        );
        return (
            <div className="contacts">
                <button  id ="tog-btn" type="button" onClick={this.toggleShowHandler}>
                    {this.state.showContacts?"Hide":"Show"} Contacts
                </button>
                {this.state.showContacts && contactListArr}
            </div>
        );
    }
}
 
export default ContactList;
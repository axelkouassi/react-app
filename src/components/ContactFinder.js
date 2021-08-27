import React, { Component, Fragment } from 'react';
import ContactList from './ContactList';

const contacts = [
    {
      id:"p1",
      name:"Jane Doe",
      email:"janedoe@gmail.com",
      mobile:"0123456789"
    },
    {
        id:"p2",
        name:"Gane Doe",
        email:"janedoe@gmail.com",
        mobile:"0123456789"
      }
]

class ContactFinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedContact:[],
            searchText:''
        }
        this.searchChangeHandler = this.searchChangeHandler.bind(this);
        console.log("In constructor in ContactFinder");
        console.log(props);
    }

    componentDidMount(){
        console.log("In componentDidMount ContactFinder");
        this.setState({selectedContact:contacts});
    }

    componentDidUpdate(prevProps, prevState){
        console.log("In componentDidUpdate ContactFinder 1");
        console.log(prevState);
        console.log("In componentDidUpdate ContactFinder 2");
        if(prevState.searchText !== this.state.searchText){
            console.log("In componentDidUpdate ContactFinder 3");
            this.setState(
                {
                    selectedContact:contacts.filter((contact)=>{
                        return contact.name.includes(this.state.searchText);
                    })
                }
            );
        }
    }

    searchChangeHandler(event){
        this.setState({searchText:event.target.value});
    }


    render() { 
        return (
            <Fragment>
                <div className="search-bar">
                    <input  placeholder="Search..." id ="search" type="search" onChange={this.searchChangeHandler}></input>
                </div>
                <ContactList cList ={this.state.selectedContact}/>
            </Fragment>
        );
    }
}
 
export default ContactFinder;
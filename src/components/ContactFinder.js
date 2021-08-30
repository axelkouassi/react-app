import React, { Component, Fragment, useRef } from 'react';
import ContactList from './ContactList';

const ContactFinder=(props)=>{

    console.log("In ContactFinder");
    console.log(props.contacts);

    /* constructor(props) {
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
        this.setState({selectedContact:this.props.contacts});
    }

    componentDidUpdate(prevProps, prevState){
        console.log("In componentDidUpdate ContactFinder 1");
        console.log(prevState);
        console.log("In componentDidUpdate ContactFinder 2");
        if(prevState.searchText !== this.state.searchText){
            console.log("In componentDidUpdate ContactFinder 3");
            this.setState(
                {
                    selectedContact:this.props.contacts.filter((contact)=>{
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
    } */

    

    /* searchChangeHandler(event){
        this.setState({searchText:event.target.value});
    } */

    //Using it to create reference of search text box instead of event.target.value
    const inpref = useRef("");

    const getSearchTerm = ()=>{
        console.log("Inside getSearchTerm");
        props.searchKeyword(inpref.current.value);
    }

    const deleteContact=(id)=>{
        props.getContactId(id);
    }

    return (
    <div>
        <div className="form-group has-search col-8 search-bar">
            <input type="search" placeholder="Search..." 
                    id ="search" className="form-control"
                    ref={inpref} value={props.searchText} onChange={getSearchTerm}>
            </input>
        </div>
        
        {/* {props.contacts.map(contacts=>{
            return(<Fragment></Fragment>);
        }) // map
    }  */}
    
    <div>
        <ContactList cList ={props.contacts}/>
    </div>
            
        
    </div>
    );
}
 
export default ContactFinder;
import React, { Component } from 'react';

class AddContactDetails extends Component{

    state={
        id:"",
        name:"",
        email:"",
        mobile:""
    }

    add=(event)=>{
        //Stop of the refreshing of the page validation of the fields in the form
        event.preventDefault();
        if(this.state.id ==="" || this.state.name==="" || this.state.email==="" || this.state.mobile===""){
            alert("All the fields are mandatory. \nThey can't be empty");
            return;
        }
        this.props.addContactHandler(this.state);
        //Initialize the state to clear the form
        this.setState({id:"", name:"", email:"", mobile:""});
    }
    
    // add value property and onchange event handler for two way binding between 
    //state property and form elements
    render(){
        return(
            <div className="add-contact">
                <h1>Add Contact</h1>
                <form>
                    Id: <br/>
                    <input type="text" name="id" value={this.state.id}
                        onChange={(event)=>{
                             this.setState({id:event.target.value})
                            }
                        }
                        /><br/>

                        Name: <br/>
                        <input type="text" name="name" value={this.state.name}
                        onChange={(event)=>{
                             this.setState({name:event.target.value})
                            }
                        }
                        /><br/>

                        Email: <br/>
                        <input type="email" name="email" value={this.state.email}
                        onChange={(event)=>{
                             this.setState({email:event.target.value})
                            }
                        }
                        /><br/>

                        Mobile: <br/>
                        <input type="number" name="mobile" value={this.state.mobile}
                        onChange={(event)=>{
                             this.setState({mobile:event.target.value})
                            }
                        }
                        /><br/><br/>
                        <button type="button" onClick={this.add}>Add Contact</button>
                </form>
            </div>
        )
    }
}

export default AddContactDetails;
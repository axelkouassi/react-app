import React, { Component } from 'react';

class AddContactDetails extends Component{

    state={
        id:"",
        name:"",
        email:"",
        mobile:"",
        isValid:true
    }

    add=(event)=>{
        //Stop of the refreshing of the page
        //validation of the fields in the form
        event.preventDefault();
        if(this.state.id ==="" || this.state.name==="" || this.state.email==="" || this.state.mobile===""){
            alert("All the fields are mandatory. \nThey can't be empty");
            this.setState({isValid:false});
            return;
        }
        this.setState({isValid:true});
        this.props.addContactHandler(this.state);
        //Initialize the state to clear the form
        this.setState({id:"", name:"", email:"", mobile:""});
    }
    
    // add value property and onchange event handler for two way binding between 
    //state property and form elements
    render(){
        console.log("In render function AddContactDetails");
        return(
            <div className={`add-contact ${!this.state.isValid ?'invalid':''}`}>
                <h1>Add Contact</h1>
                <form>
                    <label style={{color:!this.state.isValid?"red":"black"}}>Id</label>: <br/>
                    <input type="text" name="id" value={this.state.id}
                        onChange={(event)=>{
                             this.setState({id:event.target.value})
                            }
                        }
                        /><br/>

                        <label style={{color:!this.state.isValid?"red":"black"}}>Name</label>: <br/>
                        <input type="text" name="name" value={this.state.name}
                        onChange={(event)=>{
                             this.setState({name:event.target.value})
                            }
                        }
                        /><br/>

                        <label style={{color:!this.state.isValid?"red":"black"}}>Email</label>: <br/>
                        <input type="email" name="email" value={this.state.email}
                        onChange={(event)=>{
                             this.setState({email:event.target.value})
                            }
                        }
                        /><br/>

                        <label style={{color:!this.state.isValid?"red":"black"}}>Mobile</label>: <br/>
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
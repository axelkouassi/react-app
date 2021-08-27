import React, { Component } from 'react';

class AddContactDetails extends Component{

    //Lifecycle 1
    constructor(props){
        super(props)
        this.state={
            id:"",
            name:"",
            email:"",
            mobile:"",
            isValid:true
        }
        console.log("In Constructor of AddContactDetails");
        console.log(props);
    }
    
    //Lifecycle 2
    // static getDerivedStateFromProps(){
    //     console.log("In getDerivedStateFromProps AddContactDetails");
    //     //console.log(this.props);
    //   }

      componentDidMount(){
        ///api calls
        //reading data from file or database 
        console.log("In componentDidMount AddContactDetails");
     }

     //Lifecycle 3
     shouldComponentUpdate(){
        console.log("In shouldComponentUpdate AddContactDetails");
        return true;
    }

    //Lifecycle 5
    getSnapshotBeforeUpdate(){
        console.log("In getSnapshotBeforeUpdate AddContactDetails");
        return true; 
    }

    //Lifecycle 6
    componentDidUpdate(){
        console.log("In componentDidUpdate AddContactDetails");
    }

    componentWillUnmount(){
        console.log("In componentWillUnmount AddContactDetails");
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
    
    //Lifecycle 4
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
                        <button type="button" id="add-btn" onClick={this.add}>Add Contact</button>
                </form>
            </div>
        )
    }
}

export default AddContactDetails;
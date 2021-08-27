import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ContactDetails from './components/ContactDetails';
import AddContactDetails from './components/AddContactDetails';
import { useState } from 'react';
import {useEffect} from 'react';
import ContactCard from './components/ContactCard';
import ContactFinder from './components/ContactFinder';

function App() {

  //Persisting contact details to local storage
  const LOCAL_STORAGE_KEY = "contactDetails";

  //array to store contact details
  /* const [contactDetails, setContactDetails]=useState([
    {
      id:1,
      name:"Jane Doe",
      email:"janedoe@gmail.com",
      mobile:"0123456789"
    }
]); */

const [contactDetails, setContactDetails]=useState([]);

useEffect(() => {
  const retievedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
  console.log("In useEffect 1, retrieving data..."+ retievedData);
  if(retievedData){
    setContactDetails(retievedData);
  }
}, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactDetails));
  console.log("In useEffect 2, setting data..."+ contactDetails);
}, [contactDetails]);


const addContactData = (person)=>{
  console.log("In addContactData");
  let newContactDetails = [...contactDetails, {...person}]; //spread operator
  setContactDetails(newContactDetails);
  console.log(contactDetails);
}


  return (
    <div className="App">
      <Header/>
      <ContactFinder contacts={contactDetails}/>
      <hr/>
      <AddContactDetails addContactHandler={addContactData}/>
      <ContactCard card={contactDetails}/>
      <ContactDetails details={contactDetails}/>
    </div>
  );
}

export default App;

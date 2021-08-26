import './App.css';
import Header from './components/Header';
import ContactDetails from './components/ContactDetails';
import AddContactDetails from './components/AddContactDetails';
import { useState } from 'react';
import {useEffect} from 'react';
import ContactCard from './components/ContactCard';

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
  console.log("In useEffect 1...\nRetrieved data: "+ retievedData);
  if(retievedData){
    setContactDetails(retievedData);
  }
}, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactDetails));
  console.log("In useEffect 2...\nSetting data: "+ contactDetails);
}, [contactDetails]);


const addContactData = (person)=>{
  let newContactDetails = [...contactDetails, {...person}]; //spread operator
  setContactDetails(newContactDetails);
  console.log(contactDetails);
}


  return (
    <div className="App">
      <Header/>
      <AddContactDetails addContactHandler={addContactData}/>
      <ContactCard details={contactDetails}/>
      <ContactDetails details={contactDetails}/>
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ContactDetails from './components/ContactDetails';
import AddContactDetails from './components/AddContactDetails';
import { useState } from 'react';
import {useEffect} from 'react';
import ContactCard from './components/ContactCard';
import ContactFinder from './components/ContactFinder';
import PersonListIcon from './components/PersonListIcon';

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

const [contactDetails, setContactDetails] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [searchList, setSearchList] = useState([]);

useEffect(() => {
  const retievedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
  console.log("In useEffect 1, retrieving data..."+ retievedData);
  if(retievedData){
    setContactDetails(retievedData);
  }
  if(contactDetails.length === 0){
    console.log("In contactDetails length == 0")
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

const searchHandler = (searchText)=>{
  console.log("In searchHandler");
  setSearchTerm(searchText);
  if(searchTerm !== ""){
    const searchContact = contactDetails.filter((contact)=>{
      console.log("In filter contact");
      console.log(Object.values(contact));
      const str = Object.values(contact) //convert object into an array of values
      .join(" ")
      .toLowerCase().includes(searchTerm);
      /* const status = str.includes(searchTerm.toLowerCase); */
      console.log("Object converted into array of strings: " + str);
      console.log("Search term : " + searchTerm);
      /* console.log("Status :" + status); */
      
    });

    setSearchList(searchContact);

  }else{
    setSearchList(contactDetails);
  }

  /* return searchList; */
}

const updateContactData = (contact)=>{
  console.log("In updateContactData");
  console.log(contact);
  setContactDetails(
    contactDetails.map((c)=>{
      return c.id === contact.id?{...contact}:c;
    })
  )
}

const removeContactData = (id)=>{
  const delContact = contactDetails.filter(c=>{
    return c.id!== id;
  });
  setContactDetails(delContact);
}


  return (
    <div className="App">
      <Header/>

      <ContactFinder /* key={JSON.stringify(contactDetails)} */ 
                     contacts={searchTerm.length<1?contactDetails:searchList}
                     searchText={searchTerm}
                     searchKeyword={searchHandler}
                     getContactId={removeContactData}
      />
      <AddContactDetails addContactHandler={addContactData}/>
      {/* <ContactCard card={searchTerm.length<1?contactDetails:searchList}
                   searchText={searchTerm}
                   searchKeyword={searchHandler}
                   getContactId={removeContactData}
      /> */}
      <hr/>
      <PersonListIcon cardIcon={searchTerm.length<1?contactDetails:searchList}
                      searchText={searchTerm}
                      searchKeyword={searchHandler}
                      getContactId={removeContactData}
      />
      {/* <ContactDetails details={searchTerm.length<1?contactDetails:searchList}
                      searchText={searchTerm}
                      searchKeyword={searchHandler}
                      getContactId={removeContactData}
      /> */}
    </div>
  );
}

export default App;

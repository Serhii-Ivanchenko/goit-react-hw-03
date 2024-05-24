import { useId, useState } from 'react';
import * as Yup from 'yup';

import './App.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [searchName, setSearchName] = useState('');

  const addContact = newContact => {
    setContacts(prevContactList => {
      return [...prevContactList, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContactList => {
      return prevContactList.filter(contact => contact.id !== contactId);
    });
  };

  const searchedContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
  );


  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm onContactAdd={addContact} />

      <SearchBox value={searchName} onSearch={setSearchName} />

      <ContactList
        contacts={searchedContacts}
        onContactDelete={deleteContact}
      />
    </div>
  );
}

export default App;

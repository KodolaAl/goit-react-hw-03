import { useState } from "react";
import { Formik, Form } from "formik";
import "./App.css";
import contacts from "./contactList.json";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
    return contacts.filter((contact) => {
      contact.name.includes(inputValue);
    });
  };

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox inputValue={inputValue} handleChange={handleChange} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Contact from './Contact';
import './contact.css';

interface IContact {
    name : string,
    email : string
}

const Contacts = () => {
    const [contact, setContact] = useState<IContact>({} as IContact);
    const [contactList, setContactList] = useState<IContact[]>([]);
    console.log(contact)
    const onclick = () => {
        setContactList([...contactList, contact])
        setContact({
            name: "",
            email: ""
        })
    }

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setContact({...contact, [e.target.name] : e.target.value});
        console.log(e.target.name)
    }

    const handleRemove = (name: string) => {
        const newContactList = contactList.filter(contact => contact.name !== name)
        setContactList(newContactList);
    }

    console.log(contactList)
    return (
        <div>
            <h1>Contacts list</h1>
            <div className="form">
                <input name="name" 
                value ={contact.name}
                onChange={onChange} 
                placeholder="Contact Name" 
                type="text" />
                <input name="email" 
                value ={contact.email}
                onChange={onChange} 
                placeholder="Contact Email" 
                type="text" />
                <button onClick={onclick}>Add</button>
            </div>
            {
                contactList.map((contact) => (
                    <Contact name={contact.name} email={contact.email} handleRemove= {handleRemove}></Contact>
                ))
            }
        </div>
    );
};

export default Contacts;
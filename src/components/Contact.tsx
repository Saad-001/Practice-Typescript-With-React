import React from 'react';
import './contact.css'


interface IProps {
    name : string,
    email? : string,
    handleRemove : (name: string) => void

const Contact = ({name, email = "N/A", handleRemove} : IProps) => {

    return (
        <div className="card">
            <p>
                <strong>Name:</strong> {name}
            </p>
            <p>
                <strong>Email:</strong> {email}
            </p>
            <button onClick={() => handleRemove(name)}>Remove</button>
        </div>
    );
};

export default Contact;
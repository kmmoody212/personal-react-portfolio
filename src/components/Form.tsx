import { useState } from "react";

export default function Form() {
    // Each piece of state returns a two element array, which is destructured conventionally, and initialized to empty strings
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleInputChange = (e: any) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'firstName') {
            setFirstName(inputValue);
        } else if (inputType === 'lastName') {
            setLastName(inputValue); 
        } else if (inputType === 'email') {
            setEmail(inputValue);
        }
    };

    const handleFormSubmit = (e: any) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // Check whether email is valid or not
        if (!email) {
            Error('Email is invalid. Must enter a valid email address.');
            return;
        }

        // After submit, set all inputs back to empty strings
        setFirstName('');
        setLastName('');
        setEmail('');

    };

    return (
        <div className="container">
            <h1>
                Hello {firstName} {lastName}
            </h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                // Binding input to the state variable
                    value={firstName}
                    name="firstName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="First Name"
                    />
                     <input
                    value={lastName}
                    name="lastName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Last Name"
                    />
                    <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="E-mail Address"
                    />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}
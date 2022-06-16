import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
// import Filter from 'components/Filter';

// import {
//   useAddContactMutation,
//   useFetchContactsQuery,
// } from 'redux/contacts-slice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  // const [addContact] = useAddContactMutation();
  // const { data } = useFetchContactsQuery();
  // const contacts = data;

  const handleSubmit = e => {
    e.preventDefault();
    // if (
    //   contacts.some(
    //     contact => contact.name.toLowerCase() === name.toLowerCase()
    //   )
    // ) {
    //   alert(`${name} is already in contacts`);
    //   return;
    // }
    // addContact({ name, phone });
    setName('');
    setPhone('');
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangePhone = e => {
    setPhone(e.target.value);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            value={name}
            onChange={handleChangeName}
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            name="phone"
            value={phone}
            onChange={handleChangePhone}
            type="tel"
            placeholder="Enter phone"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {/* <Filter /> */}
    </>
  );
};

export default ContactForm;

import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Label } from './ContactForm.styled';
import { nanoid } from 'nanoid';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

   let NameId = nanoid();
  let NumberId = nanoid();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

      return (
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={NameId}>
          Name
          <input
            id={NameId}
            value={name}
            onChange={handleInputChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required={true}
          />
        </Label>
        <Label htmlFor={NumberId}>
          Number
          <input
            id={NumberId}
            value={number}
            onChange={handleInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required={true}
          />
        </Label>

        <button type="submit">Add contact</button>
      </Form>
    );
  };

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

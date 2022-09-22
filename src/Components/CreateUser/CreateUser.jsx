import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/User/actions';
import Input from '../Input'
import './CreateUser.css';

const fieldNames = {
  NAME: 'name',
  EMAIL: 'email',
  PHONE: 'phone',
  ADDRESS : 'address',
}

const validate = (values) => {
  let errors = {}
  if (!values[fieldNames.NAME]) {
    errors[fieldNames.NAME] = 'This is a required field';
  }
  if (!values[fieldNames.EMAIL]) {
    errors[fieldNames.EMAIL] = 'This is a required field';
  }
  if (!values[fieldNames.PHONE]) {
    errors[fieldNames.PHONE] = 'This is a required field';
  }
  if (!values[fieldNames.ADDRESS]) {
    errors[fieldNames.ADDRESS] = 'This is a required field';
  }
  if (values[fieldNames.PHONE] && (values[fieldNames.PHONE].length < 10 || values[fieldNames.PHONE].length > 10)) {
    errors[fieldNames.PHONE] = 'Enter a valid phone number';
  }
  if (values[fieldNames.EMAIL] && !(values[fieldNames.EMAIL].includes('@')) ) {
    errors[fieldNames.EMAIL] = 'Enter a valid email';
  }
  return errors;
}

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const onSubmit = () => {
    const data = {name: name.trim(), email: email.trim(), phone: phone.trim(), address: address.trim()};
    const error = validate(data);
    if (Object.keys(error).length > 0) {
      setErrors(error);
      return;
    }
    dispatch(addUser({ id: Date.now(), ...data }));
    setErrors({});
    setName('');
    setAddress('');
    setPhone('');
    setEmail('');
  }

  return (
    <div className='bg'>
      <div className='flex' >
        <Input
          labelText="Name"
          labelClass="input-label"
          className="input-text"
          errorText={errors[fieldNames.NAME]}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Input
          labelText="Email"
          labelClass="input-label"
          className="input-text"
          errorText={errors[fieldNames.EMAIL]}
          type="email"
          name={fieldNames.EMAIL}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className='flex'>
        <Input
          labelText="Phone"
          labelClass="input-label"
          className="input-text"
          errorText={errors[fieldNames.PHONE]}
          name={fieldNames.PHONE}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          value={phone}
        />
        <Input
          labelText="Address"
          labelClass="input-label"
          className="input-text"
          errorText={errors[fieldNames.ADDRESS]}
          name={fieldNames.ADDRESS}
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
      </div>
      <div className='btn'>
        <button className='btn-submit' type='button' onClick={onSubmit}>Create User</button>
      </div>
    </div>
  )
}

export default CreateUser
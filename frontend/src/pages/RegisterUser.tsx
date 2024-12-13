import React, { useState } from 'react';
import axios from 'axios';


const RegisterUser: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    address: '',
  });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/register', formData);
      alert('Usuario registrado exitosamente');
    } catch (error) {
      alert('Error al registrar usuario');
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" onChange={e => setFormData({ ...formData, username: e.target.value })} />
      <input type="email" placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} />
      <input type="address" placeholder="Address" onChange={e => setFormData({ ...formData, address: e.target.value })} />
      <button type="submit">Register User</button>
    </form>
  );
};


export default RegisterUser;
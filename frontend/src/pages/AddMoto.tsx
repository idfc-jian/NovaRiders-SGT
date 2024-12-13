import React, { useState } from 'react';
import axios from 'axios';

const AddMoto: React.FC = () => {
    const [formData, setFormData] = useState({
      name: '',
      category: '',
      description: '',
      price: '',
      imagenUrl: '',
    });
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await axios.post('http://localhost:5000/api/motos', formData);
        alert('Moto agregada exitosamente');
      } catch (error) {
        alert('Error al añadir la moto');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={e => setFormData({ ...formData, name: e.target.value })} />
        <input type="text" placeholder="Category" onChange={e => setFormData({ ...formData, category: e.target.value })} />
        <textarea placeholder="Description" onChange={e => setFormData({ ...formData, description: e.target.value })} />
        <input type="text" placeholder="Price" onChange={e => setFormData({ ...formData, price: e.target.value })} />
        <input type="text" placeholder="Image URL" onChange={e => setFormData({ ...formData, imagenUrl: e.target.value })} />
        <button type="submit">Add Moto</button>
      </form>
    );
};
  
export default AddMoto;
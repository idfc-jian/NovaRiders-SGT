import { useState, useEffect } from 'react';
import apiClient from '../utilities/api';

interface Moto {
  _id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  imagenUrl?: string;
}

const useFetchMotos = () => {
  const [motos, setMotos] = useState<Moto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMotos = async () => {
      try {
        const response = await apiClient.get('http://localhost:5000/api/motos');
        setMotos(response.data);
      } catch (error) {
        console.error('Error al buscar motos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMotos();
  }, []);

  return { motos, loading };
};

export default useFetchMotos;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


interface Moto {
  _id: string;
  name: string;
  category: string;
  description: string[];
  price: string;
  imagenUrl?: string;
}


const MotoDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [moto, setMoto] = useState<Moto | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  useEffect(() => {
    const fetchMoto = async () => {
      try {
        const response = await axios.get(`/api/motos/${id}`);
        setMoto(response.data);
      } catch (err) {
        setError('Error al recuperar la moto. Por favor inténtalo de nuevo.');
      } finally {
        setLoading(false);
      }
    };


    fetchMoto();
  }, [id]);


  if (loading) {
    return <p>Loading moto details...</p>;
  }


  if (error) {
    return <p className="error">{error}</p>;
  }


  return (
    <div className="moto-details">
      {moto ? (
        <>
          <h1>{moto.name}</h1>
          <p><strong>Category:</strong> {moto.category}</p>
          {moto.imagenUrl && <img src={moto.imagenUrl} alt={moto.name} />}
          <h3>Description:</h3>
          <ul>
            {moto.description.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
          <h3>Price:</h3>
          <p>{moto.price}</p>
        </>
      ) : (
        <p>No se encontró ninguna moto</p>
      )}
    </div>
  );
};


export default MotoDetails;
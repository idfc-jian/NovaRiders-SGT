import React from 'react';

interface MotoCardProps {
  moto: {
    name: string;
    category: string;
    description: string;
    price: string;
    imagenUrl?: string;
  };
}

const MotoCard: React.FC<MotoCardProps> = ({ moto }) => {
  const { name, category, description, price, imagenUrl } = moto;

  return (
    <div className="moto-card">
      <img src={imagenUrl || 'default.jpg'} alt={name} />
      <h3>{name}</h3>
      <p><strong>Category:</strong> {category}</p>
      <h4>Description:</h4>
      <p>{description}</p>
      <p><strong>Price:</strong> {price}</p>
    </div>
  );
};

export default MotoCard;
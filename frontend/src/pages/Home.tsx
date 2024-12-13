import React from 'react';
import MotoCard from '../components/motoCard';
import useFetchMotos from '../hooks/useFetchMotos';

const Home: React.FC= ()=>{
    const { motos, loading }= useFetchMotos();

    if (loading) return <p>Loading motos...</p>;

    return (
        <div className="home">
            {motos.map((moto)=>(
                <MotoCard key={moto._id} moto={moto}/>
            ))}
        </div>
    );
};

export default Home;
import React from 'react';

interface UserCardProps {
    username:string;
    email: string;
    address: string;
}

const UserCard: React.FC<UserCardProps> = ({ username, email, address}) =>{
    return (
        <div className="user-card">
            <h3>{username}</h3>
            <p>{email}</p>
            <p>{address}</p>
        </div>
    );
};

export default UserCard;
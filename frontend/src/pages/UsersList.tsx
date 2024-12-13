import React from 'react';
import UserCard from '../components/userCard';
import useFetchUsers from '../hooks/useFetchUsers';

const UserList: React.FC = ()=>{
    const { users, loading }= useFetchUsers();

    if (loading) return <p>Loading users...</p>;

    return (
        <div className="users-list">
            {users.map((user: any)=>(
                <UserCard key={user._id} username={user.username} email={user.email} address={user.address}/>
            ))}
        </div>
    );
};

export default UserList;
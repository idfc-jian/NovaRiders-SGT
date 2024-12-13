import Home from '../pages/Home';
import AddMoto from '../pages/AddMoto';
import MotoDetails from '../pages/MotoDetails';
import RegisterUser from '../pages/RegisterUser';
import UserList from '../pages/UsersList';
import React from 'react';

interface Route {
    path: string;
    component: React.FC;
}

const routes: Route[]=[
    {path: '/', component: Home},
    {path: '/add-moto', component: AddMoto},
    {path: '/moto/:id', component: MotoDetails},
    {path: '/register-user', component: RegisterUser},
    {path: '/users', component: UserList},
];

export default routes;
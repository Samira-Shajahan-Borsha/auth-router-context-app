import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);

    return (
        <div>
            <h1>This is Home {user?.email}</h1>
        </div>
    );
};

export default Home;
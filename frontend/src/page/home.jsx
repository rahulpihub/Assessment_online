import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/staffhome">
                <button>Create Question</button>
            </Link>
        </div>
    );
};

export default Home;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StaffHome = () => {
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/staff/staffhome/') // Django API endpoint
            .then(response => {
                setMessage(response.data.message);
                setStatus(response.data.status);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                setError('Failed to load data.');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Staff Home</h1>
            <p>{message}</p>
            <p>Stafghftus: {status}</p>
        </div>
    );
};

export default StaffHome;

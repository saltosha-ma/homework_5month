import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../../components/LoadingSprinner';

const UsersPage = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Ошибка загрузки данных:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <div>
                    {users.map(user => (
                        <div key={user.id}>{user.name}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UsersPage;

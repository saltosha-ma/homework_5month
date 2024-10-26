import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, filterUsersByName } from "../features/UsersSlice";

const UsersList = () => {
    const dispatch = useDispatch();
    const { filteredUsers, status, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleFilterChange = (e) => {
        dispatch(filterUsersByName(e.target.value));
    };

    return (
        <div>
            <h1>Users List</h1>
            <input
                type="text"
                placeholder="Filter by name"
                onChange={handleFilterChange}
            />
            {status === "loading" && <p>Loading...</p>}
            {status === "failed" && <p>Error: {error}</p>}
            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
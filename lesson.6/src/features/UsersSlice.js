import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Асинхронное действие для получения данных
export const fetchUsers = createAsyncThunk("users/fetchUsers",
    async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
});

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        filteredUsers: [],
        status: "idle",
        error: null,
    },
    reducers: {
        filterUsersByName: (state, action) => {
            state.filteredUsers = state.users.filter(user =>
                user.name.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.users = action.payload;
                state.filteredUsers = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { filterUsersByName } = usersSlice.actions;

export default usersSlice.reducer;
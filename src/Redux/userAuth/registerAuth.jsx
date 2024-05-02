import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

export const registerUser = createAsyncThunk('user/register', async (userData) => {
    try {
        const response = await fetch("https://my-doctors-app.onrender.com/api/auth/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData) // Pass user data here
        });
        if (!response.ok) {
            throw new Error('Failed to register user. Please try again.'); 
        }
        const data = await response.json();
        return data; // Pass received data as the action payload
    } catch (error) {
        throw new Error('Failed to register user. Please try again.');
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        status: STATUSES.IDLE,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = STATUSES.IDLE;
                state.data = action.payload; // Store received data in the state
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
                state.error = action.error.message; // Store error message in the state
            })
    }
});

export default userSlice.reducer;

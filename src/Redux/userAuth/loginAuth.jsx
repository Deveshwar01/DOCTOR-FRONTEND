import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
});


export const loginUser = createAsyncThunk('user/login', async (userData) => {
    try {
        const response = await fetch('https://my-doctors-app.onrender.com/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            throw new Error('Failed to log in user');
        }
        const data = await response.json();
        localStorage.setItem('token', data);
        return data;
    } catch (error) {
        throw new Error('Failed to log in user');
    }
});

const userSlice = createSlice({
    name: 'userLogin',
    initialState: {
        data: null,
        status: STATUSES.IDLE,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    }
});

export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'Sudipto Das',
    email: 'sudipto@gmail.com',
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {}
});

export default userSlice.reducer;
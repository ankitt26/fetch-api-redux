import { createSlice } from '@reduxjs/toolkit'; 

const UsersSlice = ({
    name : user ,
    initialState : {
        user: [],
        isLoading : true,
        error : undefined,
    },

    extraReducers:{

    }
})
export const {reducer :userReducer} = UsersSlice;
export default UsersSlice; 
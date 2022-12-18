import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    signupData: [],
    loginData: [],
    EmployeeData: []
}

export const addUser = createSlice({
    name: 'user',
    initialState,
    reducers: {
        SignupReducer: (state, action) => {
            state.signupData.push(action.payload)
        },
        LoginReducer: (state, action) => {
            const userName = state.signupData.find(value => value.username == action.payload.username)
            const password = state.signupData.find(value => value.password == action.payload.password)
            {userName && password ? state.loginData.push(action.payload): alert('Please Signup First')}
        },
        AddEmployeeReducer: (state, action) => {
            state.EmployeeData.push(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { SignupReducer, LoginReducer, AddEmployeeReducer } = addUser.actions

export default addUser.reducer
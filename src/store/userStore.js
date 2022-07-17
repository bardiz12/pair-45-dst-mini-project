import { createSlice } from "@reduxjs/toolkit"
import userImage from "../data/userImage"

const userListFromLocalStorage = localStorage.getItem('user-lists') || '[]'
const loggedInUserFromLocalStorage = localStorage.getItem('logged-in-user') || 'null'

const initialState = {
    userList: JSON.parse(userListFromLocalStorage),
    isLoggedIn: false,
    imageChoosen: 1,
}

const storeUserToLocalStorage = (userListData) => {
    localStorage.setItem('user-lists', JSON.stringify(userListData));
}


const userStore = createSlice({
    name: 'userStore',
    initialState,
    reducers: {
        loggedIn(state) {
            state.isLoggedIn = true
        },
        addUser(state, action) {
            let userList = state.userList.filter(({ email }) => email !== action.payload.user.email)

            const { displayName, email, photoURL } = action.payload.user;
            userList.push({
                displayName,
                email,
                photoURL
            })

            if (userList.length > 4) {
                userList = userList.slice(1)
            }

            state.userList = userList
            storeUserToLocalStorage(userList)

        },
        changeImageChoosen(state, action) {
            state.imageChoosen = action.payload.id
        },
        notLoggedIn(state) {
            state.isLoggedIn = false
        }
    }
})

export const selectUserList = (state) => state.userStore.userList
export const selectImageChoosen = (state) => state.userStore.imageChoosen
export const selectIsLoggedIn = (state) => state.userStore.isLoggedIn
// export const isUserValid = (state,) => state.userList.
export const { addUser, changeImageChoosen, loggedIn, notLoggedIn, logout } = userStore.actions

export default userStore.reducer
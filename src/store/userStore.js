import { createSlice } from "@reduxjs/toolkit"
import userImage from "../data/userImage"

const userListFromLocalStorage = localStorage.getItem('user-lists') || '[]'
const loggedInUserFromLocalStorage = localStorage.getItem('logged-in-user') || 'null'

const initialState = {
    userList: JSON.parse(userListFromLocalStorage),
    loggedInUser: JSON.parse(loggedInUserFromLocalStorage),
    imageChoosen: 1,
}

const storeUserToLocalStorage = (userListData) => {
    localStorage.setItem('user-lists', JSON.stringify(userListData));
}

const storeLoggedInUserToLocalStorage = (user) => {
    localStorage.setItem('logged-in-user', JSON.stringify(user));
}

const userStore = createSlice({
    name: 'userStore',
    initialState,
    reducers: {
        setLoggedInUser(state, action) {
            const { user } = action.payload
            state.loggedInUser = {
                ...user,
                image: userImage.getImage(user.image)
            }
            storeLoggedInUserToLocalStorage(state.loggedInUser)
        },
        addUser(state, action) {
            state.userList.push(action.payload.user)
            storeUserToLocalStorage(state.userList)
        },
        changeImageChoosen(state, action) {
            state.imageChoosen = action.payload.id
        },
        logout(state) {
            state.loggedInUser = null
            storeLoggedInUserToLocalStorage(null)
        }
    }
})

export const selectUserList = (state) => state.userStore.userList
export const selectImageChoosen = (state) => state.userStore.imageChoosen
export const selectloggedInUser = (state) => state.userStore.loggedInUser
// export const isUserValid = (state,) => state.userList.
export const { addUser, changeImageChoosen, setLoggedInUser, logout } = userStore.actions

export default userStore.reducer
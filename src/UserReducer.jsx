/**
 * createSlice is a function provided by Redux Toolkit.
 It helps you create a Redux slice — a piece of the overall state along with actions and reducer logic in one place.
 */
import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

/**
 * You're creating a slice of the Redux state called userSlice.

    createSlice returns an object containing:

    The generated reducer function

    The action creators

    Some metadata (like name and actions)
 */
const userSlice = createSlice({
    //following name will be the name will be how we get access to this slice "state.whatever_name_you_put_down_here"
    name: "users",
    initialState: userList,
    //following will conatin reducer functions that will work on current state
    reducers: {
        addUser: (state, action) => {
            //console.log(action)
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            //console.log(action)
            const { id, name, email } = action.payload;
            const uu = state.find(user => user.id == id);

            if (uu) {
                uu.name = name;
                uu.email = email;
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            const uu = state.find(user => user.id == id);

            if (uu) {
                return state.filter(f => f.id !== id);
            }
        }
    }
})

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
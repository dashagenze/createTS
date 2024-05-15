import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IProfileState {
    name: string,
    surname: string,
}

const initialState: IProfileState = {
    name: 'Пользователь',
    surname: 'X',
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        changeName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        changeSurname: (state, action: PayloadAction<string>) => {
            state.surname = action.payload
        }
    }

})

export const { changeName, changeSurname } = profileSlice.actions;
export default profileSlice.reducer
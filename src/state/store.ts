import { configureStore} from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice.ts'
import profileReducer from './profile/profileSlice.ts'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        profile: profileReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import { createSlice } from '@reduxjs/toolkit'

const scoreSlice = createSlice({
    name: 'score',
    initialState: {
        gamesResults: [],
        gamesChoices: [],
        points: 0
    },
    reducers: {
        lose(state, { payload }) {
            state.gamesResults.push(payload.result)
            state.gamesChoices.push(payload.choice)
            state.points--
        },
        win(state, { payload }) {
            state.gamesResults.push(payload.result)
            state.gamesChoices.push(payload.choice)
            state.points++
        },
        resetScore(state) {
            state.points = 0
        }
    }
})

export const scoreActions = scoreSlice.actions
export default scoreSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const UPDATE_MOOD = "UPDATE_MOOD";

export const MOODS = {
  SAD: "sad",
  SHOCKED: "shocked",
  HAPPY: "happy",
  BLISSFULL: "blissfull",
  LOVESTRUCK: "lovestruck",
  EXCITED: "excited",
  KO: "ko"
};

const INITIAL_STATE = { mood: MOODS.SAD };

const moodSlice = createSlice({
    name: "mood",
    initialState: INITIAL_STATE,
    reducers: {
        updateCatMood: (state, action) => {
            state.mood = action.payload
        },
    }
})

export const { updateCatMood } = moodSlice.actions
export default moodSlice.reducer
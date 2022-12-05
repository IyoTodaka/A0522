import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

export const UPDATE_MOOD = "UPDATE_MOOD";

// export const updateCatMood = createAction(UPDATE_MOOD);
// console.log(updateCatMood()) //action creator
// {type: "UPDATE_MOOD", payload: undefined} //action

export const MOODS = {
  SAD: "sad",
  SHOCKED: "shocked",
  HAPPY: "happy",
  BLISSFULL: "blissfull",
  LOVESTRUCK: "lovestruck",
  EXCITED: "excited",
  KO: "ko"
};

const INITIAL_STATE = { mood: MOODS.SHOCKED };

//action creator
// export const updateCatMood = (payload) => (
//     {
//         type: UPDATE_MOOD,
//         payload
//     }
// )

// console.log(`The action type is ${updateCatMood}`);

// if (updateCatMood.type === "UPDATE_MOOD") {
//   console.log("yay!");
// }

//reducer
export const oldReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case updateCatMood.type:
      return { ...state, mood: action.payload };
    default:
      return state;
  }
};

// const reducer = createReducer(state, actionsMap)
// export const reducer = createReducer(
//     INITIAL_STATE, //state
//     {
//         [updateCatMood]: (state, action) => {
//             state.mood = action.payload
//         },
//     }, //actionsmap
//     [], //empty matcher array
//     (state) => state //default reducer
// );


// const sliceObject = createSlice({
//     name: 'aSliceName',
//     initialState: someInitialState,
//     reducers: {
//         //objects of case reducers
//     }
// })

const moodSlice = createSlice({
    name: "mood",
    initialState: INITIAL_STATE,
    reducers: {
        updateCatMood: (state, action) => {
            state.mood = action.payload
        },
    }
})
// console.log(moodSlice.actions) //obejct of action reducers
// console.log(moodSlice.reducer) //combined reducer
// const { actions, reducer } = moodSlice
// const { updateCatMood } = actions

export const { updateCatMood } = moodSlice.actions
export default moodSlice.reducer
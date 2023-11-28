import { createSlice} from "@reduxjs/toolkit";
//import db from "./../Database";

const initialState = {
   // assignments: db.assignments,
    assignments: [],
    assignment: {title: "New Assignment"},
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, action) => {
            state.assignments = [
                {...action.payload, id: new Date().getTime()}, ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment.id !== action.payload.id);
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if(assignment.id !== action.payload.id) {
                    return action.payload;
                }
                else {
                    return assignment;
                }
            });
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },
    },
});

export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { SingleTaskProps } from "../../Components/SingleTask";

interface InitialStateProps {
  todos: SingleTaskProps[];
}

const initialState: InitialStateProps = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { setTodos } = todoSlice.actions;

export default todoSlice.reducer;

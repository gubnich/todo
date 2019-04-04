import { TodosActions, TodosActionTypes } from "./todos.actions";

export const initialState = {
    data: [{ id: 1, text: "initial", isDone: false }]
};

export function todoReducer(state = initialState, action: TodosActions) {
    switch (action.type) {
        case TodosActionTypes.AddTodo:
            const newId: number = state.data.length
                ? state.data[state.data.length - 1].id + 1
                : 0;
            return {
                data: [
                    ...state.data,
                    { id: newId, text: action.payload.text, isDone: false }
                ]
            };
        case TodosActionTypes.FulfilTodo:
            state.data.find(
                item => item.id === action.payload.id
            ).isDone = true;
            return {
                data: [...state.data]
            };
        case TodosActionTypes.RemoveTodo:
            return {
                data: state.data.filter(item => item.id !== action.payload.id)
            };
        default:
            return state;
    }
}

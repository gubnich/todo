import { TodoItem } from "../../models/TodoItem";

export interface AppState {
    todosss: State;
}

export interface State {
    data: TodoItem[];
}

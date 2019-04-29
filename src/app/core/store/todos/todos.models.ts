import { TodoItem } from "../../models/index";

export interface AppState {
    todoApp: State;
}

export interface State {
    counter: number;
    data: Array<TodoItem>;
}

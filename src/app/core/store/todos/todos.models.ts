import { TodoItem } from "../../models/index";

export interface AppState {
    todoApp: State;
}

export interface State {
    data: Array<TodoItem>;
}

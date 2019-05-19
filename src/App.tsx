import React, { useReducer, useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { Item } from "./components/Item";
import uuid from "uuid/v4";
type Action = { type: "CREATE"; value: Todo } | { type: "UPDATE"; value: Todo } | { type: "DELETE"; value: string };

const bob: string = 50;

const reducer = (state: Todo[], action: Action) => {
    switch (action.type) {
        case "CREATE":
            return [action.value, ...state];
        case "UPDATE":
            return state.map(todo => {
                if (todo.id === action.value.id) {
                    return { ...action.value };
                }
                return todo;
            });
        case "DELETE":
            return state.filter(todo => {
                return todo.id !== action.value;
            });
        default:
            return state;
    }
};

export interface Todo {
    id: string;
    completed: boolean;
    value: string;
}

type Filter = "all" | "completed" | "incomplete";

const App: React.FC = () => {
    // const [todos, setTodos] = useState([] as string[]);

    const initialState: Todo[] = [];
    const [state, dispatch] = useReducer(reducer, initialState);
    const [filter, setFilter] = useState("all" as Filter);

    const onEnter = (value: string) => {
        dispatch({ type: "CREATE", value: { id: uuid(), value, completed: false } });
    };

    const filterTodos = (todo: Todo) => {
        return filter === "all" ? todo : filter === "completed" ? todo.completed : !todo.completed;
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Todo Typescript</h1>
            </header>
            <main>
                <h2>Filter</h2>
                <ul>
                    <li>
                        <input
                            name="filters"
                            type="radio"
                            id="all"
                            onChange={() => setFilter("all")}
                            checked={filter === "all"}
                        />
                        <label htmlFor="all">All tasks</label>
                    </li>
                    <li>
                        <input
                            name="filters"
                            type="radio"
                            id="completed"
                            onChange={() => setFilter("completed")}
                            checked={filter === "completed"}
                        />
                        <label htmlFor="completed">Completed</label>
                    </li>
                    <li>
                        <input
                            name="filters"
                            type="radio"
                            id="incomplete"
                            onChange={() => setFilter("incomplete")}
                            checked={filter === "incomplete"}
                        />
                        <label htmlFor="incomplete">Incomplete</label>
                    </li>
                </ul>
                <Input onEnter={onEnter} />
                <p aria-live="polite" aria-atomic="true">
                    The list below is now showing <span>{filter}</span> tasks.
                </p>
                <ul>
                    {state.filter(filterTodos).map((todo, index) => (
                        <Item
                            todo={todo}
                            key={index}
                            onUpdate={todo => dispatch({ type: "UPDATE", value: { ...todo } })}
                            onDelete={() => dispatch({ type: "DELETE", value: todo.id })}
                        />
                    ))}
                </ul>
            </main>
        </div>
    );
};

export default App;

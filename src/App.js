"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Input_1 = require("./components/Input");
var Item_1 = require("./components/Item");
var v4_1 = require("uuid/v4");
var bob = 50;
var reducer = function (state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.value].concat(state);
        case "UPDATE":
            return state.map(function (todo) {
                if (todo.id === action.value.id) {
                    return __assign({}, action.value);
                }
                return todo;
            });
        case "DELETE":
            return state.filter(function (todo) {
                return todo.id !== action.value;
            });
        default:
            return state;
    }
};
var App = function () {
    // const [todos, setTodos] = useState([] as string[]);
    var initialState = [];
    var _a = react_1.useReducer(reducer, initialState), state = _a[0], dispatch = _a[1];
    var _b = react_1.useState("all"), filter = _b[0], setFilter = _b[1];
    var onEnter = function (value) {
        dispatch({ type: "CREATE", value: { id: v4_1["default"](), value: value, completed: false } });
    };
    var filterTodos = function (todo) {
        return filter === "all" ? todo : filter === "completed" ? todo.completed : !todo.completed;
    };
    return (<div className="App">
            <header className="App-header">
                <h1>Todo Typescript</h1>
            </header>
            <main>
                <h2>Filter</h2>
                <ul>
                    <li>
                        <input name="filters" type="radio" id="all" onChange={function () { return setFilter("all"); }} checked={filter === "all"}/>
                        <label htmlFor="all">All tasks</label>
                    </li>
                    <li>
                        <input name="filters" type="radio" id="completed" onChange={function () { return setFilter("completed"); }} checked={filter === "completed"}/>
                        <label htmlFor="completed">Completed</label>
                    </li>
                    <li>
                        <input name="filters" type="radio" id="incomplete" onChange={function () { return setFilter("incomplete"); }} checked={filter === "incomplete"}/>
                        <label htmlFor="incomplete">Incomplete</label>
                    </li>
                </ul>
                <Input_1.Input onEnter={onEnter}/>
                <p aria-live="polite" aria-atomic="true">
                    The list below is now showing <span>{filter}</span> tasks.
                </p>
                <ul>
                    {state.filter(filterTodos).map(function (todo, index) { return (<Item_1.Item todo={todo} key={index} onUpdate={function (todo) { return dispatch({ type: "UPDATE", value: __assign({}, todo) }); }} onDelete={function () { return dispatch({ type: "DELETE", value: todo.id }); }}/>); })}
                </ul>
            </main>
        </div>);
};
exports["default"] = App;

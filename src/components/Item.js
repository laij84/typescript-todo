"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var styled_components_1 = require("styled-components");
var Input_1 = require("./Input");
var StyledItem = styled_components_1["default"].li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    text-decoration: ", ";\n"], ["\n    display: flex;\n    text-decoration: ", ";\n"])), function (_a) {
    var completed = _a.completed;
    return (completed ? "line-through" : "none");
});
function Item(_a) {
    var todo = _a.todo, onUpdate = _a.onUpdate, onDelete = _a.onDelete;
    var _b = react_1.useState(false), editing = _b[0], setEditing = _b[1];
    return (react_1["default"].createElement(StyledItem, { completed: todo.completed },
        react_1["default"].createElement("input", { type: "checkbox", checked: todo.completed, onChange: function (e) { return onUpdate(__assign({}, todo, { completed: e.target.checked })); }, "aria-label": "Mark " + (todo.completed ? "incomplete" : "completed") }),
        editing ? (react_1["default"].createElement(Input_1.Input, { onEnter: function (value) {
                onUpdate(__assign({}, todo, { value: value }));
                setEditing(false);
            }, defaultValue: todo.value })) : (todo.value),
        react_1["default"].createElement("button", { onClick: function () { return setEditing(true); } }, "Edit"),
        react_1["default"].createElement("button", { onClick: onDelete }, "Delete")));
}
exports.Item = Item;
var templateObject_1;

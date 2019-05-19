"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Input(_a) {
    var onEnter = _a.onEnter, defaultValue = _a.defaultValue;
    var _b = react_1.useState(defaultValue || ""), value = _b[0], setValue = _b[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        onEnter(value);
        setValue("");
    };
    return (react_1["default"].createElement("form", { onSubmit: handleSubmit },
        react_1["default"].createElement("input", { onChange: function (e) { return setValue(e.target.value); }, value: value })));
}
exports.Input = Input;

import React, { useState } from "react";
import { Todo } from "../App";
import styled from "styled-components";
import { Input } from "./Input";

const StyledItem = styled.li`
    display: flex;
    text-decoration: ${({ completed }: { completed: boolean }) => (completed ? "line-through" : "none")};
`;

export function Item({
    todo,
    onUpdate,
    onDelete
}: {
    todo: Todo;
    onUpdate: (value: Todo) => void;
    onDelete: () => void;
}) {
    const [editing, setEditing] = useState(false);

    return (
        <StyledItem completed={todo.completed}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={e => onUpdate({ ...todo, completed: e.target.checked })}
                aria-label={`Mark ${todo.completed ? "incomplete" : "completed"}`}
            />
            {editing ? (
                <Input
                    onEnter={value => {
                        onUpdate({ ...todo, value });
                        setEditing(false);
                    }}
                    defaultValue={todo.value}
                />
            ) : (
                todo.value
            )}
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </StyledItem>
    );
}

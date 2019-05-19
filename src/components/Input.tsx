import React, { useState } from "react";

export function Input({ onEnter, defaultValue }: { onEnter: (value: string) => void; defaultValue?: string }) {
    const [value, setValue] = useState(defaultValue || "");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onEnter(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={e => setValue(e.target.value)} value={value} />
        </form>
    );
}

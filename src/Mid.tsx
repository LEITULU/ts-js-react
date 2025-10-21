import { useState } from "react";

function Mid1() {
    const [todo, setTodo] = useState<string[]>([]);
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo([...todo, e.target.value]);
    };

    return (
    <>
    <div>
        <h1>Todo list</h1>
        <input onChange={onChange} />
        <ul>
            {todo.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
    </>
    )
}

export default Mid1;
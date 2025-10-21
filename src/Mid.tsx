import { useState } from "react";

function Mid1() {
    const [todo, setTodo] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleClick = () => {
        if (inputValue.trim() !== "") {
            setTodo([...todo, inputValue]);
            setInputValue("");
        }
        console.log(setTodo);
    }

    return (
    <>
    <div>
        <h1>Todo list</h1>
        <input value={inputValue} onChange={onChange} />
        <input type="button" value="button" onClick={handleClick} />
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
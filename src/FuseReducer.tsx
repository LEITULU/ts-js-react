import { useReducer } from "react";

function reducer(state: number, action: { type: string}) {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    };
}

export default function FuseReducer() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
    <>
        <p>{count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>＋</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>−</button>
    </>
    );
}

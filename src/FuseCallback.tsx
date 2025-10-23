import { useCallback, useState } from "react";

function Child({ onClick }: { onClick: () => void}) {
    console.log("子コンポーネント再レンダリング");
    return (<button onClick={onClick}>子ボタン</button>)
}

export default function FuseCallBack() {
    const [count , setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log(`${count}がクリックされました`);
    },[] );

    return (
    <>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <Child onClick={handleClick} />
    </>
    );
}
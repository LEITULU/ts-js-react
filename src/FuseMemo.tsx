import { useMemo , useState }from "react";

export default function FuseMemo() {
    // const [count , setCount] = useState(0);
    const [num, setNum] = useState(1000000);

    const double = useMemo(() => {
        return  heavyComputation(num);
    }, [num]);

    function heavyComputation(n: number): number {
        console.log("重い計算中...");
        for (let i = 0; i < 1000000000; i++) {
            n += 1;
        }
        console.log("計算終了");
        return n;
    }

    return (
        <>
        <p>{double}</p>
        <button onClick={() => setNum(num + 1)}>+1</button>
        </>
    )
}
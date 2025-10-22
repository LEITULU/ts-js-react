import { useState, useEffect } from "react"

function Hidouki() {
    const [message, setMessage] = useState("読み込み中...");

    useEffect(() => {
        async function fetchData() {
        console.log("データ取得開始...");

        await new Promise<void>((resolve: () => void) => setTimeout(resolve, 2000));
            console.log({message} , {setMessage});
            setMessage("データ取得完了！");
        }

        fetchData();
    }, []);


    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>{message}</h2>
        </div>
    )
}

export default Hidouki
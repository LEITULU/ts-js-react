import { useState, useEffect } from "react"

function Hidouki() {
    const [message, setMessage] = useState("");
    const fullText = "こんにちは！"; // 表示したい文字列

    useEffect(() => {
        async function animateText() {
            for (let i = 0; i < fullText.length; i++) {
                await new Promise(function(resolve) {
                    setTimeout(resolve, 2000);
                });
                setMessage(prev => prev + fullText[i]);
            }
        }

        animateText();
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>{message}</h2>
        </div>
    )
}

export default Hidouki
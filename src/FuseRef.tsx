import { useRef } from "react";

export default function FuseRef() {
    const inputRef = useRef<HTMLInputElement>(null);
    function focusInput() {
        inputRef.current?.focus();
    }

    return (
        <>
        <input ref={inputRef} />
        <button onClick={focusInput}>フォーカス</button>
        </>
    )
}
import { useState, useEffect } from 'react';

function useLocalStorage(key: string, initialValue: string) {
    const [value , setValue] = useState(() => {
        return localStorage.getItem(key) || initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key,value);
    }, [key, value]);

    return [value , setValue] as const;
}

export default function Ftest1() {
    const [name , setName] = useLocalStorage('username', '');

    return (
    <>
        <input value={name} onChange={e => setName(e.target.value)} />
        <p>保存された名前: {name}</p>
    </>
    );
}
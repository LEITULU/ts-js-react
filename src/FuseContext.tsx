import { createContext, useContext } from "react";

export default function FuseContext() {
    const ThemeContext = createContext("light");

    function Child() {
        const theme = useContext(ThemeContext);
        return <p>現在のテーマ: { theme }</p>
    }

    return (
        <>
        <ThemeContext.Provider value="dark">
            <Child />
        </ThemeContext.Provider>
        </>
    );
}
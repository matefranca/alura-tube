import React, { useState } from "react";

export const ColorModeContext = React.createContext({
    mode: "light",
    setMode: () => { alert ("You need to configure me first.") },
    toggleMode: () => { alert ("You need to configure me first.") }
});

export default function ColorModeProvider(props){
    const [mode, setMode] = useState(props.initialMode);

    function toggleMode(){
        if (mode == "dark") setMode("light");
        if (mode == "light") setMode("dark");
    }

    return (
        <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
            {props.children}
        </ColorModeContext.Provider>
    )
}
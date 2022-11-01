import { useContext } from "react"
import * as React from 'react'

const moods = {
    happy: ":)",
    sad: ":("
}

const MoodContext = React.createContext(moods);

function HookUseContext() {

    return(
        <div>
            <h1>useContext hook</h1>
            <h3>
                We are passing context mood from parent to child and picking it up in child component with useContext
            </h3>
            <MoodContext.Provider value={moods.happy}>
                <MoodEmoji/>
            </MoodContext.Provider>
            <p>---------------------------------------------------------------------------</p>
        </div>
    )
}

function MoodEmoji() {
    const mood = useContext(MoodContext)

    return(
        <p>
            The mood is =  {mood}
        </p>
    )
}

export default HookUseContext
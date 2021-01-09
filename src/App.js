import React, {useState} from 'react'
import Tree from './components/Tree'
import Controller from './components/Controller'
import { ColorContext } from './ColorContext'

export default function App(props){

    let [bgcolor, changeColor] = useState('#FFFFFF')

    return (
        <div className="container">
            <ColorContext.Provider value={{bgcolor, changeColor}}>
                <Tree/>
                <Controller/>
            </ColorContext.Provider>
        </div>
    )
}
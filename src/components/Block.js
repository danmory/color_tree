import React, {useState} from 'react'
import {ColorContext} from '../ColorContext'

export default function Block(){
    let [color, setColor] = useState('#FFFFFF')
    return (
        <ColorContext.Consumer>
            {({bgcolor}) =>
                <button 
                    type='button' 
                    className='block' 
                    style={{backgroundColor: color}}
                    onClick= {() => setColor(bgcolor)}
                />
            }    
        </ColorContext.Consumer>
    )
}
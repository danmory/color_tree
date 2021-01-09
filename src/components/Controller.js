import React, {useState} from 'react'
import {ColorContext} from '../ColorContext'

export default function Controller(){
    let [value, setValue] = useState('#FFFFFF')
    let error = false
    if (!value.match(/#[0-9A-Fa-f]{6}/)){
        error = true
    }
    return (
        <ColorContext.Consumer>
            {({changeColor}) =>
                <div className='controller'>
                    <input
                        type='text'
                        value={value}
                        className={error? 'error': 'no-error'}
                        onChange={(event)=> {
                            setValue(event.target.value)
                            changeColor(event.target.value)
                        }}
                    />
                </div>
            }
        </ColorContext.Consumer>

    )
    
}
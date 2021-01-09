import React from 'react'
import Block from './Block'

export default function Level(props){
    const blocks = []
    for (let i = 0; i < 2*props.lvl + 1; i++){
        blocks.push(<Block key={i}/>)
    }
    return (
        <div className='level'>
            {blocks}
        </div>
    )
}
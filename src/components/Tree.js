import React from 'react'
import Level from './Level'
import {TREE_HIGHT} from '../utils'

export default function Tree(){
    const levels = []
    for (let i = 0; i < TREE_HIGHT; i++){
        levels.push(<Level key={i} lvl={i} />)
    }
    return (
        <div className='tree'>
            {levels}
        </div>
    )
}
import React from 'react'

export const ColorContext = React.createContext({
    bgcolor: '#FFFFFF',
    changeColor: () => this.bgcolor = localStorage.getItem('color')
})
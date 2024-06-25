import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/fonts.css'
import './styles/index.css'
import { Header } from './Header.jsx'
import { App } from './App.jsx' 

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<>
    <Header />
    <App />
</>
)


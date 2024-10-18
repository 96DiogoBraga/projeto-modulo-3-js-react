import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Cadastro from './components/Cadastro';

function App() {

  return (
    <div className='pagina'>
     <Header/>
    <Cadastro/>     
    </div>
  )
}

export default App

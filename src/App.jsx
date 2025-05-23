import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)

  return (
    <div className="App">
      <h1>MI PEPA PROYECTO</h1>
      <p>Contadorcito: {contador}</p>
      <button className="mi-boton" onClick={() => setContador(contador + 1)}>Sumar 1</button>
    </div>
  )
}

export default App
import { useState } from 'react';
import './App.css';
import Card from './Components/Card';

function App() {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [mostrarCard, setMostrarCard] = useState(null);

  const correoRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleButton = (e) => {
    if (nombre.length > 3 && nombre.trim().length > 3 && nombre[0] !== ' ' && apellido.length > 6 && correoRegex.test(correo)) {
      setMostrarCard(true);
    } else {
      setMostrarCard(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <h1>E-Book de Inteligencia Artificial</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        <label>Apellido </label>
        <input type="text" placeholder='Ingrese su apellido' value={apellido} onChange={(e) => setApellido(e.target.value)}/>
        <label>Correo electrónico</label>
        <input type="email" placeholder='Ingrese su correo electrónico' onChange={(e) => setCorreo(e.target.value)}/>
        <button onClick={handleButton}>Enviar</button>
      </form>
      {mostrarCard ?<Card nombre={nombre} apellido={apellido} correo={correo}/>: null }
      {mostrarCard == false && <p style={{color:'red'}}>Por favor chequea que la información sea correcta</p> }
    </div>
  );
}

export default App;
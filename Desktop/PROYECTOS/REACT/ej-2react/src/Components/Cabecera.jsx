import './Cabecera.css';
import NavBar from './NavBar';

function Cabecera() {
  return (
  
    <header style={{ textAlign: 'center', padding: '2rem' }}>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="Logo de React"
        width={80}
        height={80}
        style={{ marginBottom: '1rem' }}
      />
      <h1>Mi Aplicación React</h1>
      <NavBar />
    </header>
    
     
  );
}

export default Cabecera;
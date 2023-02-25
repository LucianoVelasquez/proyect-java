import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Titulo de la pagina y contenido principal.</h1>
        <Testimonio 
          nombre='Fernando Chinchaw'
          pais='China'
          imagen='shawn'
          alt='Foto shawn'
          cargo='Desarrollo en UI/UX'
          testimonio='is tempus, nunc ac placerat facilisis, nunc velit rhoncus dolor, quis varius dolor odio eu ex. Quisque sapien nisl, congue vitae arcu sed, ultrices porttitor nibh. Nam fermentum feugiat dui, id sollicitudin neque commodo a. Cras at enim nec est gravida efficitur vitae vitae metus. Maecenas aliquet tortor at suscipit accumsan. Fusce at justo rutrum, hendrerit orci vitae, fermentum sapien.'
        />
        <Testimonio 
          nombre='Emma Nostia'
          pais='Argentina'
          imagen='emma'
          alt='Foto emma'
          cargo='Ingeniera en Software'
          testimonio='is tempus, nunc ac placerat facilisis, nunc velit rhoncus dolor, quis varius dolor odio eu ex. Quisque sapien nisl, congue vitae arcu sed, ultrices porttitor nibh. Nam fermentum feugiat dui, id sollicitudin neque commodo a. Cras at enim nec est gravida efficitur vitae vitae metus. Maecenas aliquet tortor at suscipit accumsan. Fusce at justo rutrum, hendrerit orci vitae, fermentum sapien.'
        />
        <Testimonio 
          nombre='Sarah Verde'
          pais='Nigeria'
          imagen='sarah'
          alt='Foto sarh'
          cargo='Ingeniera Civil'
          testimonio='is tempus, nunc ac placerat facilisis, nunc velit rhoncus dolor, quis varius dolor odio eu ex. Quisque sapien nisl, congue vitae arcu sed, ultrices porttitor nibh. Nam fermentum feugiat dui, id sollicitudin neque commodo a. Cras at enim nec est gravida efficitur vitae vitae metus. Maecenas aliquet tortor at suscipit accumsan. Fusce at justo rutrum, hendrerit orci vitae, fermentum sapien.'
        />    
      </div>  
    </div>
  );
}

export default App;

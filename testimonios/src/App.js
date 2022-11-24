import './App.css';
import Kombat from './componentes/Kombat'
import 'animate.css';



function App() {
  return (
    <div className="App "> 
       <div className='bg'> </div>
      <div className='contenedor-principal'>
        <h1 className='animate__bounce'>Mortal Kombat  Factions</h1> 
        <Kombat 
        nombre = 'Lin Kuei'
        lider = 'Sub-Zero'
        imagen = 'LinKueiMK'
        historia = 'El clan de fuertes guerreros Ninja chinos del Lin Kuei(林贵族) es una sociedad norte de Asia, que mata por dinero desde muchas generaciones atrás. Sus integrantes son instruídos desde muy temprana edad, y apenas tienen contacto con el mundo exterior. Los mejores guerreros del clan tienen algún poder especial, y cuando llegan a dominarlo, reciben un nombre clave después se descubrió que solo los que vienen de un linaje antiguo, llegan a dominar este poder. '/>

        <Kombat 
        nombre = 'Hermandad de la Sombra'
        lider = 'Quan Chi'
        imagen = 'Brotherhood'
        historia = 'La Hermandad de la Sombra es una secta que rinde culto al caído dios antiguo Shinnok, y su propósito es asistir a su líder Quan Chi en todos sus objetivos incluyendo ayudar a otros como Shao Kahn, siempre que ésto signifique alcanzar los mismos objetivos. '/>

        <Kombat 
        nombre = 'Sociedad del Loto Blanco '
        lider = 'Raiden'
        imagen = 'WhiteLotus'
        historia = 'La Sociedad del Loto Blanco fue creada por Raiden para elegir al campeón que defenderá al Reino de La Tierra en el Mortal Kombat. Conocidos guerreros como Liu Kang, Kung Lao, Shujinko y Kai forman o formaron parte de esta Sociedad. '/>

        <Kombat 
        nombre = 'Fuerzas Especiales  '
        lider = 'Jax Briggs'
        imagen = 'SpecialForcesMK'
        historia = 'Las Fuerzas Especiales son una agrupacion militar terrestre liderada por Jax Briggs. Se dice que cuentan con la mejor y más avanzada tecnología humana y poseen una prisión en sus instalaciones para los asesinos y terroristas mas peligrosos, entre éstos, Kano, Jarek, Tasia, No Face y Tremor.  '/>

        <Kombat 
        nombre = 'Dragón Negro'
        lider = 'Kano'
        imagen = 'Blackdragon'
        historia = 'Según la leyenda, el Dragón Negro dividió su organización del Dragón Rojo. La razón por la cual el Dragón Negro se creara fue; una arraigado descontento con los estrictos códigos de honor y sigilo que imponía el Dragón Rojo. '/>
      </div>

      

    </div> //Fin app
  );
}

export default App;

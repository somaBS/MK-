import React from "react";
import '../style-sheet/Testimonio.css'

function Kombat(props) {
    return(
      <div className="contenedor-kombat"> 
       
          <img className="imagen-kombat"
          src={require(`../imagenes/${props.imagen}.webp`) }
          alt = "Linkuei pic"
           />
        
        <div className="contenedor-texto-kombat">
          <p className="nombre-kombat">{props.nombre}</p>
          <p className="lider-kombat">Liderado por {props.lider}</p>
          <p className="texto-kombat">{props.historia}</p>
        </div>

      </div>
    );
}


export default Kombat;
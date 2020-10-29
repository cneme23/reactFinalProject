// Primer bloque de codigo . Seteo todo el entorno para poder usar React.
import React, {Component}  from 'react';

// En este segundo bloque hago que mi componente sea Statefull y ademas le DOY un ESTADO
class Contador extends Component{
    //El metodo constructor toma logica del Objeto Component que importamos de React.
    constructor(props){ 
        //A su vez dentro del metodo constructor hay un metodo que se llama SUPER. Este metodo se encarga de pasar toda la logica del obejto "Component" al componente. 
        super(props);
        //Este seria el estado en si. Es un objeto literal que tendra incluido en el todas las propiedades.
        this.state={

            numero:props.inicial
        }

    }

    aumentarValor(){
        this.setState({numero: this.state.numero+1})
    }

    decrementar(){
        this.setState({numero: this.state.numero-1})
    }

render(){
    
    return(
        
        
        <div>
            
            <p> cantidad de productos {this.state.numero}</p>
            <button onClick =  {() => this.aumentarValor()}> aumentar</button>
            <button onClick= { () => this.decrementar()}> Decrementar</button>

        </div>
    )

 }

}


export default Contador ;
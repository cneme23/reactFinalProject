import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import ItemListContainer from "./components/Body/ItemListContainer";
import ItemCount from "./components/Body/ItemCount";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productos: null,
    };
  }
  componentDidMount() {
    const promise = new Promise((resolve, reject) => {
      return setTimeout(() => {
        const productos = [
            { titulo: "Habanos", precio: "$100", foto: "/img/cohiba_esplendidos.jpg" },
            { titulo: "Habanos", precio: "$100", foto: "/img/cohiba_esplendidos.jpg" },
            { titulo: "Habanos", precio: "$100", foto: "/img/cohiba_esplendidos.jpg" },
            {titulo:"Cigarros", precio: "$500", foto:"/img/vegafina_robusto.jpg"},
            {titulo:"Cigarros", precio: "$500", foto:"/img/vegafina_robusto.jpg"},
            {titulo:"Cigarros", precio: "$500", foto:"/img/vegafina_robusto.jpg"},
            {titulo:"Cigarritos", precio:"$700", foto:"/img/desert14.jpeg"},
            {titulo:"Cigarritos", precio:"$700", foto:"/img/desert14.jpeg"},
            {titulo:"Cigarritos", precio:"$700", foto:"/img/desert14.jpeg"}
          ];
        resolve(productos);
      }, 200);
    });
    promise.then(productos=> {
      this.setState({productos})
    })
  }
  onAdd = (cantidad) => {
    alert(cantidad);
  };
  
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <ItemListContainer productos={this.state.productos} />
        <ItemListContainer productos={this.state.productos} />
        
      
        <ItemCount initial={1} stock={5} onAdd={this.onAdd} />
      </div>
    );
  }
}
export default App;

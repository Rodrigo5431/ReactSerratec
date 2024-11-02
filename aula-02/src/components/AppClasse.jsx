import React, { Component } from 'react'

export default class AppClasse extends Component {
    constructor(props) {
        console.log("Constru");
      super(props)
      this.state = {
        dia: "segunda feira",
        hora: "00:00:00"
      }
    }
    componentDidMount(){
        console.log("Did mount");
        setInterval(()=>{
        this.setState({hora: new Date().toLocaleTimeString()})
    },0.1)
    }
    componentDidUpdate(){
console.log("did update");

    }
    componentWillUnmount(){
        console.log("will unmount");
        
    }
  render() {
    return (
      <div>
        <h1>Componente de classe</h1>
        <h2>{this.props.curso}</h2>
        <h2>{this.state.dia}</h2>
        <h2>{this.state.hora}</h2>
      </div>
    )
  }
}

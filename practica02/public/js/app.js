class App extends React.Component {
	constructor(){
		//ejecuta el constructor padre->React.Component
		super();
		//Recibe un estado inicial el componente: el listado inicial de ListaEmpleados
		this.state = {
			empleados: [
					{id: 1, nombre: "Ramón", email: "rvaldez@mail.mx"},
					{id: 2, nombre: "Carlos", email: "cvillagran@mail.mx"}
			]
		};
	}

	render(){
		return(<ListaEmpleados empleados={this.state.empleados} />);
	}
}

ReactDOM.render(<App />, document.querySelector("#app"));

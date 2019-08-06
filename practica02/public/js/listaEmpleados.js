class ListaEmpleados extends React.Component{
  render(){
    //console.log(this.props.empleados);
    return(
    <lu>
    {this.props.empleados.map(empleado=>{
      //console.log(empleado);
      return(
        //Renderiza una clase Empleado
        <Empleado
          key={empleado.id}
          nombre={empleado.nombre}
          email={empleado.email}
          />
      );
    })}
    </lu>
  );
  }
}

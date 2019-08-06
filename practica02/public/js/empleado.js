class Empleado extends React.Component {
  render(){
    //console.log(this.props);
    return(<li>{this.props.nombre} - {this.props.email}</li>);
  }
}

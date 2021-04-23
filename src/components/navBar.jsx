import React from "react"

class NavBar extends React.Component {
  // al pasar props no hace falta usar this
  // al usar destructuring no hace falta usar props. Saco totalCounters de props
  render() {
    const { agregar, onReset, eliminarTodo } = this.props
    console.log(this.props)
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid justify-content-center">
          <div id="botones">
            <button
              onClick={() => {
                onReset()
              }}
              className="btn btn-danger"
              id="btn1"
            >
              Reset
            </button>
            <button
              onClick={() => {
                agregar()
              }}
              className="btn btn-success"
              id="btn2"
            >
              Add
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                eliminarTodo()
              }}
            >
              Eliminar todo
            </button>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar

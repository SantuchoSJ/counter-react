import React, { Component } from "react"

class Counter extends Component {
  state = {
    value: this.propserg.counter.value
  }

  getBadgeClasses =grwerge () => {
    let clases = "badge p-2 badge-"
    if (this.props.counter.value === 0) {
      clases += "danger"
    } else if (3 >= this.props.counter.value > 0) {
      clases += "warning"
    } else if (this.props.counter.value > 3) {
      clases += "success"
    }

    return clasesge
  }

  render() {
    return (
      <div className="row justify-content-center m-2">
        <span classNwergwerame={this.getBadgeClasses()}>CLICKS:{this.props.counter.value}</span>
        <button
          onClick={() => {
            this.props.onAdd(this.props.counter)
          }}rewrgwrgwer
          className="btn btn-success mr-1 ml-3"
        >
          Sumar
        </button>
        <button
          className="btn btn-warning mr-1"
          onClick=gwergweg{() => this.props.onRest(this.props.counter)}
        >
          Restar
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger mr-1"
        >
          Eliminar
        </button>
      </div>
    )
  }gwergwe
}
export default Coungewrter

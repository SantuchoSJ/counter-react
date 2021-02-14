import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  getBadgeClasses = () => {
    let clases = "badge p-2 badge-";
    if (this.props.counter.value === 0) {
      clases += "danger";
    } else if (3 >= this.props.counter.value > 0) {
      clases += "warning";
    } else if (this.props.counter.value > 3) {
      clases += "success";
    }

    return clases;
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center m-2">
          <span className={this.getBadgeClasses()}>CLICKS:{this.props.counter.value}</span>
          <button
            onClick={() => {
              this.props.onAdd(this.props.counter);
            }}
            className="btn btn-success mr-1 ml-3"
          >
            Sumar
          </button>
          <button
            className="btn btn-warning mr-1"
            onClick={() => this.props.onRest(this.props.counter)}
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
      </div>
    );
  }
}
export default Counter;

import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // uso destructuring para sacar solo lo que necesito y simplificar
    const { onDelete, onRest, onAdd, onReset } = this.props;
    return (
      <div>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onRest={onRest}
            onAdd={onAdd}
            counter={counter}
          />
        ))}
        <button
          onClick={() => {
            onReset();
          }}
          className="btn btn-danger"
        >
          Reset
        </button>
      </div>
    );
    console.log("ddasdas");
  }
}

export default Counters;

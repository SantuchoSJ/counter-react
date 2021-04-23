import React, { Component } from "react"
import Counter from "./counter"

class Counters extends Component {
  render() {
    // uso destructuring para sacar solo lo que necesito y simplificar
    const { onDelete, onRest, onAdd } = this.props
    return (
      <React.Fragment>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onRest={onRest}
            onAdd={onAdd}
            counter={counter}
          />
        ))}
      </React.Fragment>
    )
  }
}

export default Counters

import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  restart = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  addValue = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  restValue = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  delete = (counterId) => {
    //devuelvo un nuevo array sin el elemento seleccionado
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({
      counters: counters,
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter((c) => c.value > 0).length} />
        <main clasname="container">
          <Counters
            counters={this.state.counters}
            onReset={this.restart}
            onAdd={this.addValue}
            onDelete={this.delete}
            onRest={this.restValue}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

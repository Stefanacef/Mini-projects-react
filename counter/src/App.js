import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import { render } from "react-dom";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  constructor(){
    super();
    console.log('app')
  }
  handelDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  handleResset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handelIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleResset}
            onIncrement={this.handelIncrement}
            onDelete={this.handelDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

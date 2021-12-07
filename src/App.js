import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/search-box/search-box-component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => this.setState({ monsters: users }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filtratedMonsters = monsters.filter((monster) => {
      return monster.name
        .toLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filtratedMonsters}></CardList>
      </div>
    );
  }
}

export default App;

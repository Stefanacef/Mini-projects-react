import React, { Component } from "react";

class Counter extends Component {

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          This is a button
        </button>
        <button
          onClick={()=>this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-s m-2"
        >
          x
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  formatCount() {
    //   destucturare
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
// STATE inculude orce date de care are nevoie componentul
/* THIS, ca sa faci referire la obiectul curent!!! */
//daca facem call noi la functie this va fi obiectl
//!!! daca nu facem noi call la functie this va returna undefinde
// folosim bind pentru a rezolva aceasta problema
// folosim arrow function pentru ca ele mostenesc THIS

//   constructor(){
//       super();
//       this.handelIncrement=this.handelIncrement.bind(this)
//   }

//THIS setState este pentru a schimba o proprietate in
//cadrul obiectului.

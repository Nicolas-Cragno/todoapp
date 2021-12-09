import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./new-actions.css";

class NewAction extends React.Component {
  handleChange = (e) => {
    let input = document.getElementById("todo");
    let btn = document.getElementById("btn");
    let list = document.getElementById("list");

    btn.addEventListener("click", function () {
      if (input.value !== "") {
        let actualList = input.value;
        let newList = document.createElement("li");
        let txt = document.createTextNode(actualList);
        newList.appendChild(txt);
        list.appendChild(newList);
        input.value = "";
      }
    });

    document.addEventListener("click", function (e) {
      if (e.target.localName === "li") {
        e.target.classList.add("tachado");
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>TO DO</h1>
          <div className="add-element">
            <input
              type="text"
              id="todo"
              placeholder="Escribir aquí ..."
              onChange={this.handleChange}
            />
            <button id="btn">Agregar</button>
          </div>

          <div className="element-list">
            <ul id="list"></ul>
          </div>
        </div>
      </React.Fragment>
    );
  }

  function() {}
}

export default NewAction;

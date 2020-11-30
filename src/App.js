import React, {Component} from "react"
import uuid from "uuid";

import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";



import "bootstrap/dist/css/bootstrap.min.css";





class App extends Component {
  render() {
    return (
      <div class="container">
      	<div class="row">
      		<TodoInput />
      		<TodoList />
      	</div>
      </div>
      )
  }
}

export default App;

import React from "react"
import TodoItem from "./TodoItem"
import todoData from "./todoData"
import "./style.css"



class App extends React.Component  {

  constructor() {
    super()
    this.state = {
      text: "",
      id: 6,
      completed:false,
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChanges = this.handleChanges.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange(id) {
    this.setState(prevstate => {
     const updatedTodo = prevstate.todos.map((todo) => {
      if(todo.id === id){
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      else
        return todo;
    })
    
      return ({
        todos: updatedTodo 
      })
    })
  }
  handleChanges(event){
    const {name,value} = event.target;
    this.setState({
      [name]:value
    })
  }
  handleClick(event){
    event.preventDefault()
    this.setState((prevstate) => {
      var updateTodo = prevstate.todos.map(todo => {return todo;});
      const newtodo = {
        id:prevstate.id,
        completed:prevstate.completed,
        text:prevstate.text
      }
      prevstate.id=prevstate.id+1;
      updateTodo.push(newtodo);
      return ({
        todos: updateTodo
      })
    })
  }

  render() {
    const TodoComponents = this.state.todos.map(data => <TodoItem key={data.id}
      item={data}
      handleChange = {this.handleChange}
    />);
    return(
      <div className="todo-list">
          <h1>Todo-List</h1>
          <form onSubmit={this.handleClick}>
            <label>You can add More tasks!</label>
            <input 
            type="text"
            name="text"
            placeholder="New item"
            
            onChange={this.handleChanges}
            />
            <button
            >
              add
            </button>
          </form>
          {TodoComponents}
      </div>
    )
  }

}

export default App;



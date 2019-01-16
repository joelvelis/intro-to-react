 import React, { Component } from 'react';
 import './App.css';
 import ToDo from './components/ToDo.js';

 class App extends Component {
  constructor(props) {
    super(props); //super tells the component to first cll its parent constructor function and then it own
      this.state = {  //this.state is an object 
        todos: [      //todos is a property of the this.state object and is also an array
        { description: 'Walk the cat', isCompleted: true },             //description & isCompleted are properties of an object
        { description: 'Throw the dishes away', isCompleted: false },  
        { description: 'Buy new dishes', isCompleted: false }          
      ],
        newTodoDescription: ''
    };
  }

 deleteTodo(index) {
    this.setState({ todos: this.state.todos.filter((_, todoItem) => todoItem !== index)}
    );
}

  handleChange(e) {
     this.setState({ newTodoDescription: e.target.value })
   }

  handleSubmit(e) {
     e.preventDefault();
     if (!this.state.newTodoDescription) { return }
     const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
     this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
   }

   toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }


   render() {
     return (
       <div className="App"> 
          <ul>
           { this.state.todos.map( (todo, index) => /* here we are using the map method on todos. It is enclosed in curly brackets to tell JSX to treat it as JavaScript code */
             <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete= { () => this.toggleComplete(index) }  deleteTodo ={ () => this.deleteTodo(index) } /> /* here we are calling the ToDo component and adding attributes to it */
           )}
         </ul>
         <form onSubmit={ (e) => this.handleSubmit(e) }>
           <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
           <input type="submit" />
         </form>
       </div> /* this set of code (line 21-23) returns a <ToDo> component for each this.state.todos */
     );
   }
 }
   
 
 

 export default App;



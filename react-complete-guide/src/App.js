import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
	state = {
		persons: [
			{ name: 'Bob', age: 28 },
			{ name: 'John', age: 29 },
			{ name: 'Jane', age: 26 }
		],
		otherState: 'some other value'
	}

	//event handler
	switchNameHandler = (newName) => {
		// console.log('Was clicked!');
		// this.state.persons[0].name = 'Robert';
		this.setState({
			persons: [
				{ name: newName, age: 28 },
				{ name: 'John', age: 29 },
				{ name: 'Jane', age: 27 }
			]
		})
	}

	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{ name: 'Bob', age: 28 },
				{ name: event.target.value, age: 29 },
				{ name: 'Jane', age: 27 }
			]
		})
	}

  	render() {
  		const style = {
  			backgroundColor: 'white',
  			font: 'inherit',
  			border: '1px solid blue',
  			padding: '8px',
  			cursor: 'pointer'
  		}

	    return (
	      <div className="App">
	        <h1>Hi I am a React App</h1>
	        <p>This is really working!</p>
	        <button 
	        	style={style}
	        	onClick={() => this.switchNameHandler('Robert')}>Switch Name</button>
	        <Person 
	        	name={this.state.persons[0].name} 
	        	age={this.state.persons[0].age}/>
	        <Person 
	        	name={this.state.persons[1].name} 
	        	age={this.state.persons[1].age} 
	        	click={this.switchNameHandler.bind(this, 'Bob!')}
	        	changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
	        <Person 
	        	name={this.state.persons[2].name} 
	        	age={this.state.persons[2].age}/>
	      </div>
	    );
		// <button onClick={() => this.switchNameHandler('Robert'))}>Switch Name</button>
	    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
	}
}

export default App;

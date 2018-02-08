import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ id: 'avfda1', name: 'Bob', age: 28 },
			{ id: 'ashdf4', name: 'John', age: 29 },
			{ id: 'gdfgt5', name: 'Jane', age: 26 }
		],
		otherState: 'some other value',
		showPersons: false
	}

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		// modern approach
		// creates a new array using the persons array
		const person = {
			...this.state.persons[personIndex]
		};

		// alternative approach
		//const person = Object.assign({}, this.state.persons[personIndex]);

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({ persons: persons });
	}

	deletePersonHandler = (personIndex) => {
		//const persons = this.state.persons.slice();
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);	// remove an element from the array
		this.setState({persons: persons});
	}

	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});	//sets doesShow to false if showPerson is true
	}

  	render() {
  		const style = {
  			backgroundColor: 'green',
  			color: 'white',
  			border: '1px solid blue',
  			padding: '8px',
  			cursor: 'pointer'
  		}

  		let persons = null;
  		if( this.state.showPersons ) {
  			persons = (
  				<div>
  					{this.state.persons.map( (person, index) => {
  						return <Person 
  							click={() => this.deletePersonHandler(index)}
  							name={person.name}
  							age={person.age}
  							key={person.id}
  							changed={(event) => this.nameChangedHandler(event, person.id)} />	
  					})}
  				</div>
  			);

  			style.backgroundColor = 'red';
  		}

  		//let classes = ['red', 'bold'].join(' ');
  		const classes = [];		
  		if(this.state.persons.length <= 2) {
  			classes.push('red');	// classes = ['red']
  		}
  		if(this.state.persons.length <= 1) {
  			classes.push('bold');	//classes = ['red', 'bold']
  		}

	    return (
		    	<div className="App">
			        <h1>Hi I am a React App</h1>
			        <p className={classes.join(' ')} >This is really working!</p>
			        <button 
			        	style={style}
			        	onClick={this.togglePersonHandler}>Toggle Person</button>
			        {persons}
		    	</div>
	    );
		// <button onClick={() => this.switchNameHandler('Robert'))}>Switch Name</button>
	    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
	}
}

export default App;

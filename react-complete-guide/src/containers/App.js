import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {
	constructor(props) {
		super(props);
		console.log('[App.js] Inside Constructor', props);
		this.state = {
			persons: [
				{ id: 'avfda1', name: 'Bob', age: 28 },
				{ id: 'ashdf4', name: 'John', age: 29 },
				{ id: 'gdfgt5', name: 'Jane', age: 26 }
			],
			otherState: 'some other value',
			showPersons: false,
			toggleClicked: 0
		};
	}

	componentWillMount() {
		console.log('[App.js] Inside componentWillMount()');
	}

	componentDidMount() {
		console.log('[App.js] inside componentDidMount()');
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
	// 	return nextState.persons !== this.state.persons ||
	// 		nextState.showPersons !== this.state.showPersons;
	// }

	componentWillUpdate(nextProps, nextState) {
		console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
	}

	componentDidUpdate(nextProps, nextState) {
		console.log('[UPDATE App.js] Inside componentDidUpdate', nextProps, nextState);
	}

	// state = {
	// 	persons: [
	// 		{ id: 'avfda1', name: 'Bob', age: 28 },
	// 		{ id: 'ashdf4', name: 'John', age: 29 },
	// 		{ id: 'gdfgt5', name: 'Jane', age: 26 }
	// 	],
	// 	otherState: 'some other value',
	// 	showPersons: false
	// }

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
		this.setState( (prevState, props) => {
			return  {
				showPersons: !doesShow, 
				toggleClicked: prevState.toggleClicked + 1
			}
		});	//sets doesShow to false if showPerson is true
	}

  	render() {
  		console.log('[App.js] inside render()');
  		let persons = null;

  		if( this.state.showPersons ) {
  			persons = <Persons 
				persons={this.state.persons}
				clicked={this.deletePersonHandler}
				changed={this.nameChangedHandler} />
  		}

	    return (
	    		<Aux>
		    		<button onClick={() => {this.setState({showPersons: true})}} >Show Persons</button>
			        <Cockpit 
			        	appTitle={this.props.title}
			        	showPersons={this.state.showPersons}
			        	persons={this.state.persons}
			        	clicked={this.togglePersonHandler} />
			        {persons}
			    </Aux>
	    );
		// <button onClick={() => this.switchNameHandler('Robert'))}>Switch Name</button>
	    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
	}
}

export default withClass(App, classes.App);

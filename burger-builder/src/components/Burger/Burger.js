import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js';

const burger = ( props ) => {
	//	array of ingredients
	//	grabs the key object pairs for ingredients
	let transformedIngredients = Object.keys(props.ingredients)
		//	maps to an array of the number of ingredients
		.map(ingKey => {
			//	creates a new array with the length of the given ingredients
			//		* e.g. cheese array has a length of 2 elements
			//	.map((_, i)
			//		* don't care what elements are returned, so "_" or blank
			//		* we care about "i", the index of elements
			return [...Array(props.ingredients[ingKey])].map((_, i) => {
				//	return as an array of JSX elements
				//	keys each have a unique identifier (ingKey + i)
				//	type is extracted from Object.keys(props.ingredients)
				//		* also checks if objects from BurgerBuilder.js is the
				//		  same as the ones from BurgerIngredient.js
				return <BurgerIngredient key={ingKey + i} type={ingKey} />
			});
		})
		//	flatten array to retrieve values from inner array
		//	reduce() transforms array into something else
		//		* takes function as an input, which takes 2 args
		//			* previous value and return value
		//		* accepts callbacks and initial values (of the reduced value)
		.reduce((arr, el) => {
			return arr.concat(el)
		}, []);

	//	Prompt user to enter ingredients if it's empty
	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please start adding ingredients!</p>
	}

	return (
		<div className={ classes.Burger }>
			<BurgerIngredient type="bread-top" />
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default burger;
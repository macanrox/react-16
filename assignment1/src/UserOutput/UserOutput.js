import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
	return (
		<div className='UserOutput'>
			<p>Username: {props.userName}</p>
			<p>Another set of texts</p>
		</div>
	);
};

export default userOutput;
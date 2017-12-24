import React from 'react';
import PropTypes from 'prop-types';

const ToDo = ({ text, completed, onClick}) => {
	return(
		<li
			onClick={onClick}
			style={{
				textDecoration: completed ? 'line-through' : 'none'
			}}
		>
			{text}
		</li>
	);
};
ToDo.propTypes = {
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired
};
export default ToDo;

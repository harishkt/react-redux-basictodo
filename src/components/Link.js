import React from 'react';


const Link = ({ children, filter, onFilter, currentActive}) => {
	console.log(`currentActive is ${currentActive}`);
	if (currentActive === filter) {
		return(
			<span>{children}</span>
		);
	}
	return(
		<a href='#'
		   onClick={e => {
			   e.preventDefault();
			   onFilter(filter);
		   }}
		   >
			{children}
		</a>
	);
};
export default Link;

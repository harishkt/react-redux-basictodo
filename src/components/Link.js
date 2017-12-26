import React from 'react';


const Link = ({ children, filter, onFilter}) => {
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

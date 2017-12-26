import React from 'react';
import Link from './Link';
import FilterLink from '../containers/FilterLink';


const Footer = (props) => (
	<p>
		Show List By:
		{" "}
		<FilterLink filter='SHOW_ALL' { ...props }>
			All
		</FilterLink>
		{" "}
		<FilterLink filter='ACTIVE' { ...props }>
			Active
		</FilterLink>
		{" "}
		<FilterLink filter='COMPLETED' { ...props }>
			Completed
		</FilterLink>
	</p>
);
export default Footer;
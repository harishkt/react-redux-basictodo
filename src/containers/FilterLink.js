import React from 'react';
import { connect } from 'react-redux';
import Link from '../components/Link';
import { setVisibility } from '../actions/actions';

const mapDispatchToProps = (dispatch) => {
	return {
		onFilter: (filter) => dispatch(setVisibility(filter))
	}
};

const FilterLink = connect(state => state, mapDispatchToProps)(Link);
export default FilterLink;

import { connect } from 'react-redux';
import Link from '../components/Link';
import { setVisibility } from '../actions/filterActions';

const mapStateToProps = (state) => ({
	currentActive: state.visibilityFilter
});
const mapDispatchToProps = (dispatch) => {
	return {
		onFilter: (filter) => dispatch(setVisibility(filter))
	}
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
export default FilterLink;
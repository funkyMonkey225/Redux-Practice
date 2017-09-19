import {connect} from 'react-redux';
import MartaDash from './martadash';
import * as actions from './actions';

const mapStateToProps = (state, ownProps) =>({
    marta: state.marta,
    filter: ownProps.filter
});

const mapDispatchToProps = dispatch => ({
    handleClick: () => {
        dispatch(actions.fetchData())
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MartaDash)
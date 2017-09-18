import {connect} from 'react-redux';
import MartaDash from './martadash';
import * as actions from './actions';

const mapStateToProps = state =>({
    state: state.marta
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
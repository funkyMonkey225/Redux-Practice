import {connect} from 'react-redux';
import MartaDash from './martadash';
import * as actions from './actions';

// const mapStateToProps = state =>({});

const mapDispatchToProps = dispatch => ({
    handleClick: () => {
        dispatch(actions.fetchData())
    }
});

export default connect(
    null,
    mapDispatchToProps
)(MartaDash)
import React from 'react';
import {connect} from 'react-redux';

import actionTypes from '../constants/actionTypes';
import User from './Users';
import Main from './Main';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main username={this.props.user.name}/>
                <User changeUsername={() => this.props.setName('aaa')}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: actionTypes.USER_SET_NAME,
                payload: name
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
import React from 'react';
import {connect} from 'react-redux';

import * as user from '../actions/userActions';
import {User} from '../components/Users';
import {Main} from '../components/Main';

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
    return { ...state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(user.setName('kkkkk'));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
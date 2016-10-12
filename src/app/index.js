import React from 'react';
import {render} from 'react-dom';

import User from './components/Users';
import Main from './components/Main';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Max"
        }
    }

    changeUsername(newName) {
        this.setState({username: newName});
    }

    render() {
        return (
            <div className="containder">
                <Main username={this.state.username} />
                <User changeUsername={this.changeUsername.bind(this)} />
            </div>
        );
    }
}

render(<App />, document.getElementById("app"));

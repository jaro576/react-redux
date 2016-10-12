import React from 'react';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>Main content</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button className="btn btn-primary" onClick={this.props.changeUsername.bind(null, 'aaaa')}>Change username</button>
                    </div>
                </div>
            </div>
        );
    }
}
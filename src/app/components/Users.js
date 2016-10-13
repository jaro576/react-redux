import React from 'react';

export const User = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>User content</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <button className="btn btn-primary" onClick={props.changeUsername}>Change username</button>
                </div>
            </div>
        </div>
    );
}
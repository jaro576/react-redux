import React from 'react';

export const Main = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>User page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <p> User name: {props.username}</p>
                </div>
            </div>
        </div>
    );
}
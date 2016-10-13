import React from 'react';

export default class Main extends React.Component{
    render(){
        return (
          <div>
              <div className="row">
                  <div className="col-xs-12">
                      <h1>User page</h1>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xs-12">
                      <p> User name: {this.props.username}</p>
                  </div>
              </div>
          </div>
        );
    }
}
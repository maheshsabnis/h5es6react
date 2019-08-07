// 1. import react and component object model
import React, { Component } from "react";
// 2. the Component is a base class for React Component 
// 2a. mandatory: implement the render() method that
// encapsulate the HTML View for the component
// note: The html has 'only one' parent element e.g. <div>

class SimpleComponent extends Component {
    render() {
        return (
              <div>
                <h1>Hello Simple React {this.props.message}</h1>
              </div>  
        );
    }
}

// 3. export the component class as es6 module so that
// module bundler can read it e.g. webpack
export default SimpleComponent; 
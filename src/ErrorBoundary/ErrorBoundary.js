
import React,{Component} from 'react';

class ErrorBoundary extends Component{
    state = {
        hasError : false,
        errorMsg: ''
    };

    //componentDidCatch, this is a method which receives potential error and
    // some additional information passed into it automatically by react and
    // componentDidCatch will be executed whenever a component
    // we wrap with the error boundary throws an error.
    componentDidCatch = (error,info) => {
        this.setState({
            hasError : true,
            errorMsg: error
        })
    }
    render() {
        if(this.state.hasError) {
            return <h1>{this.state.errorMsg}</h1>
        } else {
            return this.props.children;
        }
    }
};
export default ErrorBoundary;
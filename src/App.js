import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    // state property is inside the component and
    // we can only access it when a class extends from Component class.
    // We cannot do this in the functional component. State is the data of the component.
    // State can change but if it changes it leads  React to re-render the DOM or update the DOM.
    state = {
      person :[
          {name:'Max',age:28},
          {name:'Manu',age:27}
      ],
        showPerson: false
    };

    switchAttributeHandler = () => {
        //setState update the virtual DOM which then change the actual DOM.
        this.setState({
            person :[
                {name:'Alexander',age:28},
                {name:'Manu',age:25}
            ]
        })
    };

    onToggleHandler= () => {
        console.log("State: " + this.state.showPerson);
        this.setState({showPerson: !this.state.showPerson});
    };

    render() {
        let persons= null;
        if(this.state.showPerson) {
            persons = (
                <div>
                    <Person name={ this.state.person[0].name } age={ this.state.person[0].age }/>
                    <Person name={ this.state.person[1].name } age={ this.state.person[1].age } />
                </div>
            );
        } else {
            persons = null;
        }
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <button onClick={this.onToggleHandler}>Switch Attribute</button>
                {/* we can take these attributes and get inside the receiving*/}
                {/*component on object named props.*/}
                { persons }
            </div>
        );
    }
}

export default App;
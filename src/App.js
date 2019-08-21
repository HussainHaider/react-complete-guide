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
        persons :[
            {id:'1',name:'Max',age:28},
            {id:'2',name:'Manu',age:27}
        ],
        showPerson: false
    };

    switchAttributeHandler = () => {
        //setState update the virtual DOM which then change the actual DOM.
        this.setState({
            persons :[
                {id:'1',name:'Alexander',age:28},
                {id:'2',name:'Manu',age:25}
            ]
        })
    };

    onToggleHandler= () => {
        console.log("State: " + this.state.showPerson);
        this.setState({showPerson: !this.state.showPerson});
    };

    deletePersonHandler = (personIndex) => {
        // we use spreading from es6 bcz we want to copy of persons and not the reference(pointer)
        const newPerson = [...this.state.persons];
        newPerson.splice(personIndex,1);
        this.setState({
            persons:newPerson
        })
    };

    render() {
        let persons= null;
        if(this.state.showPerson) {
            persons = (
                <div>
                    { this.state.persons.map((person,index)=>{
                        return <Person
                            click={ () => this.deletePersonHandler(index) } // we can also use bind method
                            name={ person.name }
                            age={ person.age}
                            key={ person.id } // The key prop is an important property and we should
                            // add when rendering list of data This key property helps react
                            // update the list efficiently. key should be Unique
                        />
                    })}
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
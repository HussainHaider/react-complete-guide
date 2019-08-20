import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const App = props => {
    // To manage the state in functional Component we use React hook named useState
    // useState returns an array with exactly two elements
    // First element we get back will always be our current state when change then the updated one.
    // Second element will always be a function that allows us to update the state such that react is aware of and re-render it.
    const [peronState,setPersonState] = useState({ // using destructing from es6 to save in array  
        person :[
            {name:'Max',age:28},
            {name:'Manu',age:27}
        ],
        otherState: 'some other value'
    });


    const switchAttributeHandler = () => {
        // When using React hooks your function which you get as second element in the array does
        // not merge whatever you pass with old state(like in class based component we only update person and not otherState) instead it replaces the old state with it.
        // So you should manually include all other state data. Here e.g manually adding the otherState obj.
        // apart manually you can also use useState for other state properties.
        setPersonState({
            person :[
                {name:'Alexander',age:28},
                {name:'Manu',age:25}
            ],
            otherState : peronState.otherState
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <button onClick={switchAttributeHandler}>Switch Attribute</button>
            {/* we can take these attributes and get inside the receiving*/}
            {/*component on object named props.*/}
            <Person name={ peronState.person[0].name } age={ peronState.person[0].age }/>
            <Person name={ peronState.person[1].name } age={ peronState.person[1].age } />
        </div>
    );
};

export default App;

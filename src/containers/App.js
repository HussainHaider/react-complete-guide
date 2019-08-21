import React, { Component } from 'react';
import classes from './App.css'; // classes return the object of css classes. this feature when we enable the css module
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
    // shouldn't do  HTTP request or storing something in your local storage
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }
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
    // if you have some scenario where props of your component can change and then
    // you want to update some internal state of that component, then
    // this is the hook to use
    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentWillMount() {
        console.log('[App.js] componentWillMount');
    }
    // That is a typical hook you would use for making an HTTP request to
    // get new data from the web.
    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

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

    nameChangeHandler = (event,id) => {
        // findIndex takes a function and iterate on array similar like map function.
        const personID =this.state.persons.findIndex(p=>{
            return p.id === id;
        });

        // we don't copy directly bcz it give the reference and we need copy of obj
        const person = {...this.state.persons[personID]};
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personID] = person;

        this.setState({
            persons: persons
        });

    };

    // After render function Render child components will be rendered
    render() {
        console.log('[App.js] render');
        let persons= null;

        if(this.state.showPerson) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}
                />
            );

        } else {
            persons = null;
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    showPerson={this.state.showPerson}
                    personsLength={this.state.persons.length}
                    clicked={this.onToggleHandler}
                />
                { persons }
            </div>
        );
    }
}
export default App;
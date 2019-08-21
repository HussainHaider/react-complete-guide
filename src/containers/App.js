import React, { Component } from 'react';
import classes from './App.css'; // classes return the object of css classes. this feature when we enable the css module
import Person from '../components/Persons/Person/Person'

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

    render() {
        let persons= null;
        let btnClass = '';
        if(this.state.showPerson) {
            persons = (
                <div>
                    { this.state.persons.map((person,index)=>{
                        return <Person
                            click={ () => this.deletePersonHandler(index) } // we can also use bind method
                            name={ person.name }
                            age={ person.age}
                            changed={ (event)=> this.nameChangeHandler(event,person.id)}
                            key={ person.id } // The key prop is an important property and we should
                            // add when rendering list of data This key property helps react
                            // update the list efficiently. key should be Unique
                        />
                    })}
                </div>
            );
            btnClass = classes.redBg;
        } else {
            persons = null;
        }
        // dynamically adding classes
        const assignedClasses =[];
        if(this.state.persons.length >=2){
            assignedClasses.push(classes.red);
        }
        if(this.state.persons.length >=1){
            assignedClasses.push(classes.bold);
        }
        return (
            <div className={classes.App}>
                <header className={classes.AppHeader}>
                    <h1 className={classes.AppTitle}>Welcome to React</h1>
                    <p className={assignedClasses.join(' ')}>It really works</p>
                </header>
                <button
                    className={btnClass}
                    onClick={this.onToggleHandler
                    }>Switch Attribute</button>
                {/* we can take these attributes and get inside the receiving*/}
                {/*component on object named props.*/}
                { persons }
            </div>
        );
    }
}
export default App;
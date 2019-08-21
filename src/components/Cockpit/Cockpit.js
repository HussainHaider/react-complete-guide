import React,{useEffect} from 'react'
import classes from "./Cockpit.css";


const cockpit = (props) => {
    // use Effect is the lifecycle hook for the functional component
    // the function runs every time when the component render so stop this behaviour and run
    // it only once we use a empty array as a second argument. you can pass the dependence in the second argument
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    // dynamically adding classes
    let btnClass = '';
    if(props.showPerson) {
        btnClass = classes.redBg;
    }

    const assignedClasses =[];
    if(props.persons.length >=2){
        assignedClasses.push(classes.red);
    }
    if(props.persons.length >=1){
        assignedClasses.push(classes.bold);
    }
    return (
        <div>
            <header>
                <h1>Welcome to React</h1>
                <p className={assignedClasses.join(' ')}>It really works</p>
            </header>
            <button className={btnClass} onClick={props.clicked}>Switch Attribute</button>
        </div>
    );
}
export default cockpit;
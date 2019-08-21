import React from 'react'
import classes from "./Cockpit.css";


const cockpit = (props) => {
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
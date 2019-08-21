
import React from 'react';
import './Person.css'

const Person = (props) => {
    // {} use to output the dynamic data.
    // Also in class component we have to use this.props to access the attributes
    return (
        <div className="Person">
            <p>I'm a { props.name } and I am { props.age } years old.!!! </p>
            {/*to get the text/output between the opening and closing tag of our custom component*/}
            {/*react give us a simple props property named children*/}
            <p>{ props.children }</p>
            <input type="text" onChange={props.changed}/>
            <button onClick={props.click}>Click me!!</button>
        </div>
    );
};
export default Person;
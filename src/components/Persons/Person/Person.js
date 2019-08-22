import React from 'react';
import './Person.css'
import PropTypes from 'prop-types'

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
// We can actually improve the props logic,like throw an error
// or a warning if you try to pass in incorrect props.
// If you work in a large team where work is divided then in such
// situations people start using your component incorrectly because
// they don't know that age should be a number.So it can help if
// you provide some instructions on which props these components
// accepts and which type of prop each prop should be.We can do it using Prop-types
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
export default Person;
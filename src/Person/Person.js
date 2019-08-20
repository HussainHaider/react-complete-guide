
import React from 'react';

const Person = (props) => {
    // {} use to output the dynamic data.
    // Also in class component we have to use this.props to access the attributes
    return (
        <div>
            <p>I'm a { props.name } and I am { props.age } years old.!!! </p>
            {/*to get the text/output between the opening and closing tag of our custom component*/}
            {/*react give us a simple props property named children*/}
            <p>{ props.children }</p>
        </div>
    );
};
export default Person;
import React from 'react'
// The General concept is that you have a component that wraps
// other component that adds something to it, that could be styling, that could be additional HTML
// structure around it.
const WithClass = (props) => {
    return (
        <div className={props.classes} >
            {props.children}
        </div>
    );
};

export default WithClass;
import React from 'react'
import Person from "./Person/Person";

const persons = (props) => props.persons.map((person,index)=>{
    return <Person
        click={ () => props.clicked(index) } // we can also use bind method
        name={ person.name }
        age={ person.age}
        changed={ (event)=> props.changed(event,person.id)}
        key={ person.id } // The key prop is an important property and we should
        // add when rendering list of data This key property helps react
        // update the list efficiently. key should be Unique
    />
});

export default persons
import React, { useState } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

const People = () => {
    const [people, setPeople] = useState([])


    const personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'John',
            age: Math.floor( Math.random() * 40 )
        }

        setPeople( ( prevState ) => {
            return [
                ...prevState,
                newPerson
            ]
        } );
    }

    const personDeletedHandler = (personId) => {
        setPeople( ( prevState ) => {
            return prevState.filter(person => person.id !== personId)
        } );
    }

    return (
        <div>
            <AddPerson personAdded={personAddedHandler} />
            {people.map(person => (
                <Person 
                    key={person.id}
                    name={person.name} 
                    age={person.age} 
                    clicked={() => personDeletedHandler(person.id)}/>
            ))}
        </div>
    );
}

export default People;
import React from 'react';

import person from './Person.module.css';

const Person = (props) => (
    <div className={person.Person} onClick={props.clicked}>
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
    </div>
);

export default Person;
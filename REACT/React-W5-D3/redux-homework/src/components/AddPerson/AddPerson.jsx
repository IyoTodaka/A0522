import React from 'react';

import addPerson from './AddPerson.module.css';

const AddPerson = (props) => (
    <div className={addPerson.AddPerson}>
        <button onClick={props.personAdded}>Add Person</button>
    </div>
);

export default AddPerson;
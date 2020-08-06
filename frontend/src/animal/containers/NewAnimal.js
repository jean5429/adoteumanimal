import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import './NewAnimal.css';

const NewAnimal = () => {
    return (
        <form className="animal-form">
            <Input
                element="input"
                type="text"
                label="Title"
                validators={[]}
                errorText="Please enter a valid text."
            />
        </form>
    );
};

export default NewAnimal;

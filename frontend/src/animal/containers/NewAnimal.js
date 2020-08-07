import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/utils/validators';
import './NewAnimal.css';

const NewAnimal = () => {
    return (
        <form className="animal-form">
            <Input
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid text."
            />
        </form>
    );
};

export default NewAnimal;

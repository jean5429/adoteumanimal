import React, { useCallback } from 'react';

import Input from '../../shared/components/FormElements/Input';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
} from '../../shared/utils/validators';
import './NewAnimal.css';

const NewAnimal = () => {
    const titleInputHandler = useCallback((id, value, isValid) => {}, []);
    const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

    return (
        <form className="animal-form">
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid text."
                onInput={titleInputHandler}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (at least 5 characters)."
                onInput={descriptionInputHandler}
            />
        </form>
    );
};

export default NewAnimal;

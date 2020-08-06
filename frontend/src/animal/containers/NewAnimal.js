import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import './NewAnimal.css';

const NewAnimal = () => {
    return (
        <form className="animal-form">
            <Input element="input" type="text" label="Title" />
        </form>
    );
};

export default NewAnimal;

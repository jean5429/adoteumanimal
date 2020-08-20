import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
    VALIDATOR_NONE,
} from '../../shared/utils/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './AnimalForm.css';

const NewAnimal = () => {
    const [formState, inputHandler] = useForm(
        {
            name: {
                value: '',
                isValid: false,
            },
            description: {
                value: '',
                isValid: false,
            },
            species: {
                value: '',
                isValid: true,
            },
            appearance: {
                value: '',
                isValid: false,
            },
        },
        false
    );

    const animalSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
        //Database connection
    };

    return (
        <form className="animal-form" onSubmit={animalSubmitHandler}>
            <Input
                id="name"
                element="input"
                type="text"
                label="Nome"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Por favor, coloque um nome válido."
                onInput={inputHandler}
            />
            <Input
                id="species"
                element="select"
                name="species"
                type="radio"
                valid={true}
                values={[
                    { type: 'dog', checked: true },
                    { type: 'cat', checked: false },
                ]}
                label="Espécie"
                checked={true}
                initialValidity={true}
                initialValue="dog"
                validators={[VALIDATOR_NONE()]}
                //errorText="Por favor, selecione a espécie do animal"
                onInput={inputHandler}
            />
            <Input
                id="city"
                element="input"
                type="text"
                label="Cidade"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Por favor, coloque uma cidade válida."
                onInput={inputHandler}
            />
            <Input
                id="description"
                element="textarea"
                label="Descrição"
                validators={[VALIDATOR_MINLENGTH(5)]}
                placeholder="Descrição da personalidade do animal."
                errorText="Por favor, coloque uma descrição válida (pelo menos 5 caracteres)."
                onInput={inputHandler}
            />
            <Input
                id="appearance"
                element="textarea"
                label="Aparência"
                validators={[VALIDATOR_MINLENGTH(5)]}
                placeholder="Descrição da aparência física do animal."
                errorText="Por favor, coloque uma aparência válida (pelo menos 5 caracteres)."
                onInput={inputHandler}
            />
            <Button success type="submit" disabled={!formState.isValid}>
                Adicionar Animal
            </Button>
        </form>
    );
};

export default NewAnimal;

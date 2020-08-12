import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
} from '../../shared/utils/validators';
import './NewAnimal.css';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    console.log(state.inputs);
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {
                        value: action.value,
                        isValid: action.isValid,
                    },
                },
                isValid: formIsValid,
            };
        default:
            return state;
    }
};

const NewAnimal = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            name: {
                value: '',
                isValid: false,
            },
            description: {
                value: '',
                isValid: false,
            },
            appearance: {
                value: '',
                isValid: false,
            },
        },
        isValid: false,
    });
    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE',
            value: value,
            isValid: isValid,
            inputId: id,
        });
    }, []);

    return (
        <form className="animal-form">
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
                element="radio"
                name="species"
                type="radio"
                value="dog"
                label="Espécie"
                content="Cachorro"
                checked="true"
                validators="false"
                errorText="Por favor, selecione a espécie do animal"
                onInput={inputHandler}
            />
            <Input
                id="species"
                name="species"
                element="radio"
                type="radio"
                value="cat"
                content="Gato"
                validators={[VALIDATOR_REQUIRE()]}
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

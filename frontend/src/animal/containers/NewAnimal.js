import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
    VALIDATOR_NONE,
} from '../../shared/utils/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import './AnimalForm.css';

const NewAnimal = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [formState, inputHandler] = useForm(
        {
            name: {
                value: '',
                isValid: false,
            },
            image: {
                value: null,
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

    const history = useHistory();

    const animalSubmitHandler = async (event) => {
        event.preventDefault();
        if (auth.userType !== 'ong')
            throw new Error('Somente ONGs podem cadastrar novos animais.');
        try {
            const formData = new FormData();
            formData.append('name', formState.inputs.name.value);
            formData.append('city', formState.inputs.city.value);
            formData.append('species', formState.inputs.species.value);
            formData.append('image', formState.inputs.image.value);
            formData.append('description', formState.inputs.description.value);
            formData.append('appearance', formState.inputs.appearance.value);
            formData.append('owner', auth.userId);
            await sendRequest(
                'http://localhost:5000/api/animal/',
                'POST',
                formData
            );
            history.push('/');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <form className="animal-form" onSubmit={animalSubmitHandler}>
                {isLoading && <LoadingSpinner asOverlay />}
                <Input
                    id="name"
                    element="input"
                    type="text"
                    label="Nome"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Por favor, coloque um nome válido."
                    onInput={inputHandler}
                />
                <ImageUpload
                    center
                    id="image"
                    onInput={inputHandler}
                    errorText="Por favor, insira uma imagem"
                />
                <Input
                    id="species"
                    element="select"
                    name="species"
                    type="select"
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
        </React.Fragment>
    );
};

export default NewAnimal;

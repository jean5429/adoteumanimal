import React, { useState, useContext } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';
import {
    VALIDATOR_MINLENGTH,
    VALIDATOR_EMAIL,
    VALIDATOR_NONE,
    VALIDATOR_REQUIRE,
} from '../../shared/utils/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';

import './Auth.css';

const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
                value: '',
                isValid: false,
            },
            password: {
                value: '',
                isValid: false,
            },
        },
        false
    );

    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined,
                    usertype: undefined,
                    image: undefined,
                },
                formState.inputs.email.isValid &&
                    formState.inputs.password.isValid
            );
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false,
                    },
                    usertype: {
                        value: 'user',
                        isValid: true,
                    },
                    image: {
                        value: null,
                        isValid: false,
                    },
                },
                false
            );
        }
        setIsLoginMode((prevMode) => !prevMode);
    };

    const authSubmitHandler = async (event) => {
        event.preventDefault();
        if (isLoginMode) {
            try {
                const responseData = await sendRequest(
                    'http://localhost:5000/api/users/login',
                    'POST',
                    JSON.stringify({
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value,
                    }),
                    {
                        'Content-Type': 'application/json',
                    }
                );
                auth.login(responseData.user);
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                const formData = new FormData();
                formData.append('name', formState.inputs.name.value);
                formData.append('email', formState.inputs.email.value);
                formData.append('type', formState.inputs.usertype.value);
                formData.append('password', formState.inputs.password.value);
                formData.append('image', formState.inputs.image.value);
                const responseData = await sendRequest(
                    'http://localhost:5000/api/users/signup',
                    'POST',
                    formData
                );
                auth.login(responseData.user);
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <Card className="authentication">
                {isLoading && <LoadingSpinner asOverlay />}
                <h2>Login</h2>
                <hr />
                <form className="auth-form" onSubmit={authSubmitHandler}>
                    {!isLoginMode && (
                        <React.Fragment>
                            <Input
                                id="usertype"
                                element="select"
                                name="usertype"
                                type="select"
                                valid={true}
                                values={[
                                    { type: 'user', checked: true },
                                    { type: 'ong', checked: false },
                                ]}
                                label="Tipo de Usuário"
                                checked={true}
                                initialValidity={true}
                                initialValue="user"
                                validators={[VALIDATOR_NONE()]}
                                onInput={inputHandler}
                            />
                            <Input
                                element="input"
                                id="name"
                                type="text"
                                label="Seu Nome aqui"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Por favor, insira um nome"
                                onInput={inputHandler}
                            />
                            <ImageUpload
                                center
                                id="image"
                                onInput={inputHandler}
                            />
                        </React.Fragment>
                    )}
                    <Input
                        id="email"
                        element="input"
                        type="email"
                        label="E-mail"
                        validators={[VALIDATOR_EMAIL()]}
                        errorText="Por favor, coloque um email válido."
                        onInput={inputHandler}
                    />
                    <Input
                        id="password"
                        element="password"
                        type="password"
                        label="Senha"
                        validators={[VALIDATOR_MINLENGTH(8)]}
                        errorText="Por favor, coloque uma senha de pelo menos 8 caracteres"
                        onInput={inputHandler}
                    />
                    <Button success type="submit" disabled={!formState.isValid}>
                        {isLoginMode ? 'Fazer Login' : 'Cadastrar'}
                    </Button>
                </form>
                <Button onClick={switchModeHandler}>
                    Alterar para {isLoginMode ? 'Cadastrar' : 'Fazer Login'}
                </Button>
            </Card>
        </React.Fragment>
    );
};

export default Auth;

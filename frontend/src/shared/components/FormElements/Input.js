import React, { useReducer, useEffect } from 'react';

import { validate } from '../../utils/validators';
import './Input.css';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators),
            };
        case 'TOUCH': {
            return {
                ...state,
                isTouched: true,
            };
        }

        default:
            return StaticRange;
    }
};

const Input = (props) => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || '',
        isValid: props.initialValidity || false,
        isTouched: false,
    });

    const { id, onInput } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);

    const changeHandler = (event) => {
        dispatch({
            type: 'CHANGE',
            val: event.target.value,
            validators: props.validators,
        });
    };

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH',
        });
    };
    let element = null;

    switch (props.element) {
        case 'input':
            element = (
                <input
                    id={props.id}
                    type={props.type}
                    placeholder={props.placeholder}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    value={inputState.value}
                />
            );
            break;
        case 'textarea':
            element = (
                <textarea
                    id={props.id}
                    placeholder={props.placeholder}
                    rows={props.rows || 3}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    value={inputState.value}
                />
            );
            break;
        case 'radio':
            /*element = [];
            for (const individualValue in props.values) {
                element[individualValue] = (
                    <input
                        id={props.id}
                        type={props.type}
                        placeholder={props.placeholder}
                        onChange={changeHandler}
                        onBlur={touchHandler}
                        value={individualValue}
                        name={props.name}
                        checked={props.checked}
                    />
                );
            }*/
            element = (
                <input
                    id={props.id}
                    type={props.type}
                    placeholder={props.placeholder}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    value={inputState.value}
                    name={props.name}
                    checked={props.checked}
                />
            );
            break;
        default:
            element = (
                <textarea
                    id={props.id}
                    placeholder={props.placeholder}
                    rows={props.rows || 3}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    value={inputState.value}
                />
            );
    }

    return (
        <div
            className={`form-control ${
                !inputState.isValid &&
                inputState.isTouched &&
                props.type !== 'radio' &&
                'form-control--invalid'
            }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {typeof props.content !== 'undefined' ? props.content : ''}
            {!inputState.isValid && inputState.isTouched && (
                <p>{props.errorText}</p>
            )}
        </div>
    );
};

export default Input;

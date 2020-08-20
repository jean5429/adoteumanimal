import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
} from '../../shared/utils/validators';
import { useForm } from '../../shared/hooks/form-hook';

import './AnimalForm.css';

const ANIMALS = [
    {
        id: '1',
        name: 'Caramelo',
        city: 'Americana',
        species: 'dog',
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwZrJUFAW-Bg-21tnCy9w3fiq8xTSqV5viqA&usqp=CAU',
        owner: '1',
        description: 'Animal super amigável',
        appearance: 'Cor caramelo',
    },
    {
        id: '2',
        name: 'Totó',
        city: 'SBO',
        species: 'dog',
        image:
            'https://portaldoscaesegatos.com.br/wp-content/uploads/2017/07/adotar-1.jpg',
        owner: '1',
        description: '',
        appearance: '',
    },
    {
        id: '3',
        name: 'Rex',
        city: 'Sumaré',
        species: 'dog',
        image:
            'https://fotos.amomeupet.org/uploads/fotos/1300x0_1568662224_5d7fe2d09bccd.jpeg',
        owner: '1',
        description: '',
        appearance: '',
    },
    {
        id: '4',
        name: 'Bob',
        city: 'Nova Odessa',
        species: 'dog',
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGg2H4lrGBx6t_GEqmgW8Tb0Ps0_i772DAAg&usqp=CAU',
        owner: '1',
        description: '',
        appearance: '',
    },
    {
        id: '5',
        name: 'Thor',
        city: 'Americana',
        species: 'dog',
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT_ZUQF9nNH-UIpuTaIt9SSK4SjIlKUmPCSA&usqp=CAU',
        owner: '1',
        description: '',
        appearance: '',
    },
    {
        id: '6',
        name: 'Pingo',
        city: 'SBO',
        species: 'dog',
        image:
            'https://img.jornalcruzeiro.com.br/img/2013/07/12/media/85269_CSL030212L004F26.jpg',
        owner: '1',
        description: '',
        appearance: '',
    },
    {
        id: '7',
        name: 'Chico',
        city: 'Sumaré',
        species: 'dog',
        image:
            'https://s2.glbimg.com/TdPTg4jg3ZqtmZtyFnuHehXLgmk=/0x314:720x1073/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/B/x/gU7r6UTvyFwLn5G5FlUg/whatsapp-image-2019-02-22-at-14.53.02.jpeg',
        owner: '1',
        description: '',
        appearance: '',
    },
    {
        id: '8',
        name: 'Paçoca',
        city: 'Nova Odessa',
        species: 'dog',
        image:
            'https://www.petz.com.br/cachorro/racas/vira-lata/img/vira-lata-saudavel.webp',
        owner: '2',
        description: '',
        appearance: '',
    },
    {
        id: '9',
        name: 'Pipoca',
        city: 'Americana',
        species: 'cat',
        image:
            'https://www.realh.com.br/drhomeopet/wp-content/uploads/2016/02/cat.jpg',
        owner: '2',
        description:
            'Gatinha super carinhosa, seu hobb favorita é caçar as pessoas',
        appearance: 'Tricolor',
    },
    {
        id: '10',
        name: 'Solar',
        city: 'SBO',
        species: 'cat',
        image:
            'https://www.significadodossonhos.inf.br/wp-content/uploads/2019/07/Sonhar-com-gato-amarelo3.jpg',
        owner: '1',
        description: '',
        appearance: '',
    },
    {
        id: '11',
        name: 'Artévius',
        city: 'SBO',
        species: 'cat',
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMBAeVGLnqFW0bV86x8x4_kUbdZHOrZkR1DA&usqp=CAU',
        owner: '2',
        description: '',
        appearance: '',
    },
    {
        id: '12',
        name: 'Luna',
        city: 'SBO',
        species: 'cat',
        image:
            'https://www.petvale.com.br/imagens/62757-vira-lata-femea-perdido-cajuru-curitiba-pr_23962.jpg',
        owner: '1',
        description: '',
        appearance: '',
    },
];

const UpdateAnimal = () => {
    const [isLoading, setIsLoading] = useState(true);
    const animalId = useParams().animalId;

    const [formState, inputHandler, setFormData] = useForm(
        {
            description: {
                value: '',
                isValid: false,
            },
            city: {
                value: '',
                isValid: false,
            },
            appearance: {
                value: '',
                isValid: false,
            },
        },
        false
    );

    const identifiedAnimal = ANIMALS.find((p) => p.id === animalId);

    useEffect(() => {
        if (identifiedAnimal) {
            setFormData(
                {
                    description: {
                        value: identifiedAnimal.description,
                        isValid: true,
                    },
                    city: {
                        value: identifiedAnimal.city,
                        isValid: true,
                    },
                    appearance: {
                        value: identifiedAnimal.appearance,
                        isValid: true,
                    },
                },
                true
            );
        }
        setIsLoading(false);
    }, [setFormData, identifiedAnimal]);

    const animalUpdateSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
        //Database connection
    };

    if (!identifiedAnimal) {
        return (
            <Card>
                <div className="center">
                    <h2>Não foi possível encontrar o animal!</h2>
                </div>
            </Card>
        );
    }

    if (isLoading) {
        return (
            <div className="center">
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <form className="animal-form" onSubmit={animalUpdateSubmitHandler}>
            <Input
                id="city"
                element="input"
                type="text"
                label="Cidade"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Por favor, coloque uma cidade válida."
                onInput={inputHandler}
                initialValue={formState.inputs.city.value}
                initialValidity={formState.inputs.city.isValid}
            />
            <Input
                id="description"
                element="textarea"
                label="Descrição"
                validators={[VALIDATOR_MINLENGTH(5)]}
                placeholder="Descrição da personalidade do animal."
                errorText="Por favor, coloque uma descrição válida (pelo menos 5 caracteres)."
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValidity={formState.inputs.description.isValid}
            />
            <Input
                id="appearance"
                element="textarea"
                label="Aparência"
                validators={[VALIDATOR_MINLENGTH(5)]}
                placeholder="Descrição da aparência física do animal."
                errorText="Por favor, coloque uma aparência válida (pelo menos 5 caracteres)."
                onInput={inputHandler}
                initialValue={formState.inputs.appearance.value}
                initialValidity={formState.inputs.appearance.isValid}
            />
            <Button success type="submit" disabled={!formState.isValid}>
                Atualizar Animal
            </Button>
        </form>
    );
};

export default UpdateAnimal;

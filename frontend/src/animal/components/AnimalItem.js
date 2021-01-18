import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import Modal from '../../shared/components/UIElements/Modal';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';

import './AnimalItem.css';

const AnimalItem = (props) => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [showAnimal, setShowAnimal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const openAnimalHandler = () => setShowAnimal(true);
    const closeAnimalHandler = () => setShowAnimal(false);

    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true);
    };

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
    };

    const confirmDeleteHandler = async () => {
        setShowConfirmModal(false);
        setShowAnimal(false);
        try {
            sendRequest(
                `http://localhost:5000/api/animal/${props.id}`,
                'DELETE'
            );
            props.onDelete(props.id);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <Modal
                show={showAnimal}
                onCancel={closeAnimalHandler}
                header={props.name}
                contentClass="animal-item__modal-content"
                footerclass="animal-item__modal-content"
                footer={<Button onClick={closeAnimalHandler}>Fechar</Button>}
            >
                <Card>
                    {isLoading && <LoadingSpinner asOverlay />}
                    <div className="details-container center">
                        <div className="details-item">
                            <div className="details-item__image">
                                <Avatar image={props.image} alt={props.name} />
                            </div>
                            <div className="details-item__info">
                                <h2>{props.name}</h2>
                                <h3>
                                    {props.species === 'dog'
                                        ? 'cachorro'
                                        : 'gato'}
                                </h3>
                                <p>{props.city}</p>
                                <p>Descrição: {props.description}</p>
                                <p>Aparência: {props.appearance}</p>
                            </div>
                            <div className="details-item__actions">
                                {auth.isLoggedIn &&
                                    auth.userType != 'ong' &&
                                    auth.userId !== props.owner && (
                                        <Button success to={`#`}>
                                            ADOTAR
                                        </Button>
                                    )}
                                {!auth.isLoggedIn && (
                                    <Button success to={`/auth`}>
                                        FAÇA LOGIN PARA ADOTAR
                                    </Button>
                                )}
                                {auth.isLoggedIn &&
                                    auth.userId === props.owner && (
                                        <Button to={`/animal/edit/${props.id}`}>
                                            EDITAR
                                        </Button>
                                    )}
                                {auth.isLoggedIn &&
                                    auth.userId === props.owner && (
                                        <Button
                                            danger
                                            onClick={showDeleteWarningHandler}
                                        >
                                            DELETAR
                                        </Button>
                                    )}
                            </div>
                        </div>
                    </div>
                </Card>
            </Modal>
            <Modal
                show={showConfirmModal}
                onCancel={cancelDeleteHandler}
                header="Você tem certeza?"
                footerClass="animal-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button inverse onClick={cancelDeleteHandler}>
                            CANCELAR
                        </Button>
                        <Button danger onClick={confirmDeleteHandler}>
                            DELETAR
                        </Button>
                    </React.Fragment>
                }
            >
                <p>
                    Você quer deletar o animal? Esta ação irá deletar o animal
                    permanentemente e não poderá ser desfeita.
                </p>
            </Modal>

            <li className="animal-item">
                <Card className="animal-item__content">
                    <Link
                        to={props.page === 'home' ? '/' : '/meusanimais'}
                        onClick={openAnimalHandler}
                    >
                        <div className="animal-item__image">
                            <Avatar image={props.image} alt={props.name} />
                        </div>
                        <div className="animal-item__info">
                            <h2>{props.name}</h2>
                            <h3>Cidade: {props.city}</h3>
                        </div>
                    </Link>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default AnimalItem;

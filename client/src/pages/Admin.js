import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateAudio from "../components/modals/CreateAudio";
import CreateCategory from "../components/modals/CreateCategory";

const Admin = () => {
    const [categoryVisible, setCategoryVisible] = useState(false)
    const [audioVisible, setAudioVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCategoryVisible(true)}
            >
                Добавить категорию
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setAudioVisible(true)}
            >
                Добавить аудио
            </Button>
            <CreateAudio show={audioVisible} onHide={() => setAudioVisible(false)}/>
            <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)}/>
        </Container>
    );
};

export default Admin;

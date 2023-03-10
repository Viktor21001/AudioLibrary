import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, FormFile, Image, Row} from "react-bootstrap";
import {Link, NavLink, Route, useParams} from 'react-router-dom'
import {fetchOneAudio} from "../http/audioAPI";
import {ADMIN_ROUTE} from "../utils/consts";
import {useHistory} from 'react-router-dom'
import {Redirect} from "react-router-dom";

const AudioPage = () => {
    const [audio, setAudio] = useState({info: []})
    const {id} = useParams()
    const history = useHistory()
    const link = process.env.REACT_APP_API_URL + audio.file
    useEffect(() => {
        fetchOneAudio(id).then(data => setAudio(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row>

                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + audio.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{audio.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                        >
                            {audio.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>Цена: {audio.price} руб.</h3>
                        <Button
                            variant={"outline-dark"}
                            onClick={() =>
                                history.push(process.env.REACT_APP_API_URL + audio.file)
                        }
                            className="ml-2"
                        >
                            Добавить в корзину
                        </Button>
                        <a href={link} className="nav-link d-inline" target="_blank" rel="noopener noreferrer">Купить сейчас</a>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Описание</h1>
                {audio.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default AudioPage;

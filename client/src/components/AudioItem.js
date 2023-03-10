import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useHistory} from "react-router-dom"
import {AUDIO_ROUTE} from "../utils/consts";

const AudioItem = ({audio}) => {
    const history = useHistory()
    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(AUDIO_ROUTE + '/' + audio.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + audio.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                    </div>
                </div>
                <div>{audio.name}</div>
                <div>Цена: {audio.price}</div>
            </Card>
        </Col>
    );
};

export default AudioItem;

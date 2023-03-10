import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import AudioItem from "./AudioItem";

const AudioList = observer(() => {
    const {audio} = useContext(Context)

    return (
        <Row className="d-flex">
            {audio.audios.map(audio =>
                <AudioItem key={audio.id} audio={audio}/>
            )}
        </Row>
    );
});

export default AudioList;

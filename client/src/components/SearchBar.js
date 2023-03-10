import React, {useContext, useState} from 'react';
import axios from 'axios';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchBar = () => {
    const {audio} = useContext(Context)
    return (
        <InputGroup className="my-3">
            <Form.Control
                onChange = {(e) => audio.setSelectedName(e.target.value)}
                placeholder='Search'
            />
        </InputGroup>
    );
}
export default SearchBar;
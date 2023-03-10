import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import {ACCOUNT_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";

const PriceBar = () => {
    const {audio} = useContext(Context)
    return (
        <Button
            variant={"outline-dark"}
            onClick={() => audio.setSelectedPrice(1)}
            className="ml-2"
        >
            Сортировка по цене
        </Button>
    );
}

export default PriceBar;

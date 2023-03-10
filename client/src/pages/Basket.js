import React from 'react';
import { Button, Container, Table } from "react-bootstrap";
import './Basket.css';

const Basket = () => {
    return (
        <div>
            <Container className="mt-3 d-flex justify-content-center">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>#</th>
                        <th style={{textAlign: "center"}}>Наименование</th>
                        <th style={{textAlign: "center"}}>Цена</th>
                        <th style={{textAlign: "center"}}>Изображение</th>
                        <th style={{textAlign: "center"}}>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{textAlign: "center"}}>1</td>
                        <td style={{textAlign: "center"}}>Голос леса</td>
                        <td style={{textAlign: "center"}}>40 руб.</td>
                        <td style={{textAlign: "center"}}>
                            <img
                                src="https://via.placeholder.com/150x150.png?text=Image"
                                alt="Голос леса"
                                width={150}
                            />
                        </td>

                        <td style={{textAlign: "center"}}>
                            <Button variant="outline-dark">Оплатить</Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>

            </Container>
        </div>
    );
};

export default Basket;


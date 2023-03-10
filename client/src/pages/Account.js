import React from 'react';
import {Button, Container, Table} from "react-bootstrap";

const Account = () => {
    return (
        <div>
            <Container className="mt-3 d-flex justify-content-center">
                <h1>Личный кабинет</h1>
            </Container>
            <Container className="mt-3 d-flex justify-content-center">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>Имя</th>
                        <th style={{textAlign: "center"}}>Фамилия</th>
                        <th style={{textAlign: "center"}}>Электронная почта</th>
                        <th style={{textAlign: "center"}}>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{textAlign: "center"}}>Виктор</td>
                        <td style={{textAlign: "center"}}>Елисеев</td>
                        <td style={{textAlign: "center"}}>victor.eliseev2@gmail.com</td>
                        <td style={{textAlign: "center"}}>
                            <Button variant="outline-dark">Редактировать</Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default Account;

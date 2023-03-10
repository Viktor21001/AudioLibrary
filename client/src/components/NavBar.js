import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, ACCOUNT_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const history = useHistory();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    };

    return (
        <div>
            <Navbar bg="auto" variant="white" className="navbar-custom">
                <Container>
                    <NavLink style={{ color: 'black' }} to={SHOP_ROUTE} className="navbar-brand">
                        <img src="/assets/brand/LogoNstu.jpg" width="auto" height="auto" className="d-inline-block align-top" alt="" />
                    </NavLink>
                    {user.isAuth ? (
                        <Nav className="ml-auto" style={{ color: 'white' }}>
                            {user.user === 'ADMIN' ? (
                                <Button variant={'outline-dark'} onClick={() => history.push(ADMIN_ROUTE)}>
                                    Админ панель
                                </Button>
                            ) : (
                                <Nav className="ml-auto" style={{ color: 'black' }}></Nav>
                            )}
                            <Button variant={'outline-dark'} onClick={() => history.push(BASKET_ROUTE)} className="ml-2">
                                Корзина
                            </Button>
                            <Button variant={'outline-dark'} onClick={() => history.push(ACCOUNT_ROUTE)} className="ml-2">
                                Личный Кабинет
                            </Button>
                            <Button variant={'outline-dark'} onClick={() => logOut()} className="ml-2">
                                Выйти
                            </Button>
                        </Nav>
                    ) : (
                        <Nav className="ml-auto" style={{ color: 'black' }}>
                            <Button variant={'outline-dark'} onClick={() => history.push(LOGIN_ROUTE)}>
                                Авторизация
                            </Button>
                        </Nav>
                    )}
                </Container>
                <div className="navbar-custom"></div>
            </Navbar>
            <Carousel showThumbs={false} className="carousel-wrapper">
                <div className="navbar-carousel">
                    <img src="/assets/brand/NavBarBottom1.png" alt="NavBarBottom" width="auto" height="70" />
                </div>
                <div>
                    <img src="/assets/brand/NavBarBottom2.png" alt="Slide1" />
                </div>
            </Carousel>

        </div>
    );
});

export default NavBar;


import React, {useContext, useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CategoryBar from "../components/CategoryBar";
import AudioList from "../components/AudioList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchAudios, fetchCategories, fetchPrice, fetchSearch} from "../http/audioAPI";
import Pages from "../components/Pages";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import PriceBar from "../components/PriceBar";

const Shop = observer(() => {
    const {audio} = useContext(Context)

    useEffect(() => {
        fetchCategories().then(data => audio.setCategories(data))
        fetchAudios(null, audio.page, 8).then(data => {
            audio.setAudios(data.rows)
            audio.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchAudios(audio.selectedCategory.id, audio.page, 8).then(data => {
            audio.setAudios(data.rows)
            audio.setTotalCount(data.count)
        })
    }, [audio.page, audio.selectedCategory,])

    useEffect(()=> {
        fetchSearch(audio.selectedName, audio.page, 8).then(data => {
            audio.setAudios(data.rows)
            audio.setTotalCount(data.count)
        })
    }, [audio.page, audio.selectedName,])

    useEffect(()=> {
        fetchPrice(audio.selectedPrice, audio.page, 8).then(data => {
            audio.setAudios(data.rows)
            audio.setTotalCount(data.count)
        })
    }, [audio.page, audio.selectedPrice,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <CategoryBar/>
                    <SearchBar/>
                    <PriceBar/>
                </Col>
                <Col md={9}>
                    <AudioList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});
export default Shop;

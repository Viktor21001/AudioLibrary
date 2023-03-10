import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const CategoryBar = observer(() => {
    const {audio} = useContext(Context)
    return (
        <ListGroup>
            {audio.categories.map(category =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={category.id === audio.selectedCategory.id}
                    onClick={() => audio.setSelectedCategory(category)}
                    key={category.id}
                >
                    {category.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default CategoryBar;

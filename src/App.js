import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
    return (
        <>
            <h1>I love {name}</h1>
            <h4>{rating}/5.0</h4>
            <h2>{picture}</h2>
        </>
    );
}

const foodILike = [
    {
        id: 1,
        name: "kimchi",
        image: "kimchi",
    },
    {
        id: 2,
        name: "samgyupsal",
        image: "samgyupsal",
        rating: 4.9,
    },
    {
        id: 3,
        name: "chukumi",
        image: "chukumi",
        rating: 4.8,
    },
];

function renderFood(dish) {
    return (
        <Food
            key={dish.id}
            name={dish.name}
            picture={dish.image}
            rating={dish.rating}
        />
    );
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number,
};

function App() {
    return (
        <div>
            <h1>Hello</h1>
            <div>{foodILike.map(renderFood)}</div>
        </div>
    );
}

export default App;

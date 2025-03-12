import React from 'react';

const GoodProps = (props) => {
    return (
        <>
        <h3>Im a {props.name} and its good {props.isGood}</h3>
        </>
    );
};

export default GoodProps;
import React from 'react';
import GoodProps from './GoodProps';

//let newProps = {name: "Broccoli", isGood: true}

const UsingProps = () => {
    
    return (
        <div>
            <h2>Passing props</h2>
            <GoodProps name="Broccoli" isGood="Very Good"/>
        </div>
    );
};

export default UsingProps;
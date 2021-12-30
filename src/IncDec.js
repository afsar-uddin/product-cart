import React, { useState } from 'react';
import Products from './Products/Products';

const IncDec = () => {
    const [incDec, setIncDec] = useState(0);
    let price = 10 * incDec;

    const handleInc = () => {
        setIncDec(counter => counter + 1);
    }

    const handleDec = () => {
        setIncDec(counter => counter - 1);
    }

    // console.log(incDec)
    return (
        <>
            {/* <h2>Increment and Decrement</h2>
            <button onClick={handleInc}>Increment</button>
            <h3>{incDec}</h3>
            <button onClick={handleDec}>Deccrement</button>
            <h3>------------------------------</h3>
            <p>THe product price is {price}</p> */}
            <Products />
        </>
    );
};

export default IncDec;
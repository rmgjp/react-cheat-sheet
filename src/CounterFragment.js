//Ejemplo de Funtional Component
import React, {useState} from "react";
//import PropTypes from "prop-types";

const CounterFragment = () => {
    //Hook
    const [value, setValue] = useState(0);


    //Metodo asignado a botones
    const handleAdd = (e) => {
        setValue(value+1);
    }

    const handleSub = (e) => {
        setValue(value-1)
    }

    const handleReset = (e) => {
        setValue((c) => c = 0)
    }

    //JSX
    return (
        <>
            <h2>Click Counter: {value}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSub}>-1</button>
        </>
    );
}
export default CounterFragment;
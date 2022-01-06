//Ejemplo de Funtional Component
import React from "react";
import PropTypes from "prop-types";
import CounterFragment from "./CounterFragment";

const MainFragment = ({name, version}) => {
    //Recibe propiedades y se guardan en una constante
    const randomString = name;

    const randomObject = {
        data: "data",
        value: 1234
    }
    //Retorno de un Fragment
    return (
        <>
            <h1>Cheat Sheet React</h1>
            <p>Pequeña referencia de componentes de {randomString}.</p>
            <p>Mostrando un objeto: </p>
            <pre>{JSON.stringify(randomObject, null, 3)}</pre>
            <p>React version: {version}</p>
            <CounterFragment/ >
        </>
    );
}

//Validación de Component
MainFragment.propTypes = {
    //Define el tipo de dato y si es requerido
    name: PropTypes.string.isRequired
}

//Valores Default de Props
MainFragment.defaultProps = {
    version: "17.0.2"
}

export default MainFragment;
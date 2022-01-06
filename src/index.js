//Librerias Escenciales de React
import React from "react";
import ReactDOM from "react-dom";

//Importación Funtional Components
import MainFragment from "./App";

//Importación de hojas de estilo
import './index.css';
import CounterFragment from "./CounterFragment";

//Selección de div para mostrar elementos JSX
const divRoot = document.querySelector("#root");

//Renderización de functional component en etiquetas div deseadas
ReactDOM.render(<MainFragment name="React"/ >, divRoot);
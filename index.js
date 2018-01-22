import React from 'react';
import ReactDOM from 'react-dom';
import Media from './src/playlist/components/media'

const app = document.getElementById('app');
{/*const holaMundo = <h1>Hello Worldss</h1>;*/}

// ReactDOM.render(que voy a renderizar, donde lo haré);
ReactDOM.render(<Media type="video" title="¿Qué es?" author="Leonidas Esteban" image="./images/covers/bitcoin.jpg"/>, app);

// console.log('Hello World');
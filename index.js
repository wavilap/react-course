import React from 'react';
import ReactDOM from 'react-dom';
import Playlist from './src/playlist/components/Playlist'
import data from './src/api.json';

const app = document.getElementById('app');
{/*const holaMundo = <h1>Hello Worldss</h1>;*/}

// ReactDOM.render(que voy a renderizar, donde lo haré);
ReactDOM.render(<Playlist data={data}/>, app);

// console.log('Hello World');
// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Container
import { App } from './view/App';

// Styles
import { Wrapper } from './styles';
import './assets/normalize.css'

ReactDOM.render(
    <Wrapper>
        <App />
    </Wrapper>,
    document.getElementById('root')
);

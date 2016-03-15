import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'components/router';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Router />, document.querySelector('#react-app-mount'));
});
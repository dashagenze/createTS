import { createElement } from 'react';

function Welcome({ name }) {
    return createElement(
        'h1',
        { className: 'greeting' },
        'Добро пожаловать в интернет-магазин для программистов!!'
    );
}

export default Welcome
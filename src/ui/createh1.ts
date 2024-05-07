import { createElement } from 'react';


function Welcome({}) {
    return createElement(
        'h1',
        { className: 'greeting' },
        'Добро пожаловать в интернет-магазин для программистов!!'
    );
}

export default Welcome
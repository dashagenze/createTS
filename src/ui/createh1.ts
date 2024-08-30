import { createElement } from 'react';


function Welcome({}) {
    return createElement(
        'h1',
        { className: 'greeting' },
        'Добро пожаловать в PROShop!!'
    );
}

export default Welcome
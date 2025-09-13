import './styles/reset.css';
import './styles/styles.css';

import renderHome from './home.js';
import renderMenu from './menu.js';

(function () {
    const handlers = {
        home: renderHome,
        menu: renderMenu,
    };

    document.querySelectorAll('nav > button').forEach(btn => btn.addEventListener('click', evt => {
        const id = evt.target.id;

        handlers[id]?.();
    }));

    handlers.home();

})();
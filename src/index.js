import './styles/reset.css';
import './styles/styles.css';

import renderHome from './home.js';
import renderMenu from './menu.js';
import renderAbout from './about.js';

(function () {
    const handlers = {
        home: renderHome,
        menu: renderMenu,
        about: renderAbout,
    };

    document.querySelectorAll('nav > button').forEach(btn => btn.addEventListener('click', () => {
        document.querySelectorAll('nav > button').forEach(btn => btn.classList.remove('selected'));

        const id = btn.id;
        handlers[id]?.();
        btn.classList.add('selected');
    }));

    document.querySelector('#home').classList.add('selected');
    handlers.home();

})();
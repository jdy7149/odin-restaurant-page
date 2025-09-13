export default function () {
    const contentDiv = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add('home-container');

    const title = document.createElement('h1');
    title.textContent = 'Welcome to My Restaurant';

    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum, felis sit amet hendrerit lobortis, quam arcu facilisis ipsum, ac luctus nisi risus nec magna. Donec mollis mollis mauris, in ultrices dolor elementum congue. Maecenas egestas, quam vel eleifend feugiat, tortor quam sodales urna, in fringilla velit eros a arcu.'

    container.appendChild(title);
    container.appendChild(p);
    contentDiv.replaceChildren(container);
};
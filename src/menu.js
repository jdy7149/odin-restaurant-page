class MenuCard {
    constructor(header, listItems) {
        this.header = header;
        this.listItems = listItems;
    }

    createCard() {
        const card = document.createElement('div');
        card.classList.add('card');

        const h2 = document.createElement('h2');
        h2.textContent = this.header;
        
        const ul = document.createElement('ul');
        
        this.listItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });

        card.appendChild(h2);
        card.appendChild(ul);
        return card;
    }
}

export default function () {
    const contentDiv = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add('menu-container');

    const cards = [
        new MenuCard('Appetizer',
            [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Etiam aliquam felis in aliquam placerat.',
                'Pellentesque nec turpis sit amet mauris blandit maximus eu non arcu.'
            ]),
        new MenuCard('Main Courses',
            [
                'Sed pretium ex quis lacus pulvinar aliquam.',
                'Proin ullamcorper felis et sem ornare euismod.',
                'In a eros at sapien congue molestie.',
                'Aenean in orci ac augue dapibus consectetur.',
                'Vestibulum quis tortor tincidunt, tristique leo dictum, vestibulum libero.'
            ]
        ),
        new MenuCard('Desserts', 
            [
                'Fusce feugiat lacus quis ligula volutpat, eget congue mauris viverra.',
                'Suspendisse sagittis velit nec egestas rhoncus.',
                'Aenean facilisis diam ut nibh venenatis, id maximus arcu condimentum.Aenean facilisis diam ut nibh venenatis, id maximus arcu condimentum.'
            ]
        ),
        new MenuCard('Drinks', [
            'Duis luctus augue a ante sollicitudin commodo.',
            'Pellentesque lobortis velit tristique porttitor feugiat.',
            'Etiam in purus nec nibh efficitur aliquet et nec orci.',
            'Quisque tristique sem sed ex laoreet laoreet.',
            'Ut id nunc pellentesque, condimentum sem sit amet, aliquet orci.'
        ])
    ];

    cards.map(card => card.createCard()).forEach(cardDiv => container.appendChild(cardDiv));
    contentDiv.replaceChildren(container);
};
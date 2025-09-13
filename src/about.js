export default function () {
    const contentDiv = document.querySelector('#content');

    const container = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.textContent = 'About Us';

    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna libero, sagittis a maximus nec, efficitur quis augue. Proin nunc ex, sollicitudin sed vestibulum sed, vehicula eu arcu. Aenean dignissim ornare mattis. Donec quam eros, fermentum et tristique vel, lobortis vitae tortor. Maecenas risus urna, egestas in dolor id, sodales consectetur est. Fusce eros sapien, finibus in felis id, faucibus laoreet nisi. Donec semper sodales sem, vel laoreet justo luctus sit amet. Sed aliquet nibh facilisis augue placerat congue.';

    container.appendChild(h1);
    container.appendChild(p);
    contentDiv.replaceChildren(container);
}
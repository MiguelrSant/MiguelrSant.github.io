export default () => {
    const container = document.createElement('div');

    const template = `
    <header id="opss">Opss...Isso não devia ter acontecido</header>
    `;

    container.innerHTML = template

    return container;
}

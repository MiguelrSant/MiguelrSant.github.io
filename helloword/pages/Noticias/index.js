export default () => {
    const container = document.createElement('div');

    const template = `
    <p>Ola a todos</p>
    `;

    container.innerHTML = template

    return container;
}

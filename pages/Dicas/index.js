export default () => {
    const container = document.createElement('div');

    const template = `
    <p>Ola a </p>
    `;

    container.innerHTML = template

    return container;
}
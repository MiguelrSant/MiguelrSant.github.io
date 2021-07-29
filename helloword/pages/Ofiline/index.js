export default () => {
    const container = document.createElement('div');

    const template = `
    <p class="texto-wifi">Você está fora de uma rede, você deve se conectar para continuar usando o Hello Word</p>
    `;

    container.innerHTML = template

    return container;
}

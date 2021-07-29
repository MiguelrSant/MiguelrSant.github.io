export default () => {
    const container = document.createElement('div');

    const template = `
    <div id="dicas1">
    <p id="td1">
        VOCÊ SABE PROGRAMAR???
    </p>
    <p id="pn1">
        Esse site é programado em JavaScript HTML5 e CSS3, 
        e programar, a programação pode fazer muitas 
        coisas diferentes como aplicativos e sistemas 
        operacionais e jogos, com diferentes linguagens.
        Como Python, c#, c/c++, etc... e programação é 
        muito mais que códigos sem sentido... 
    </p>
    </div>
    <div id="imgn1">
    <img id="imgd1" src="./img/pc.png" >
    </div>
    `;

    container.innerHTML = template

    return container;
}

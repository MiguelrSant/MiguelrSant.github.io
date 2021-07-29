export default () => {
    const container = document.createElement('div');

    const template = `
    <div id="texto">
    <p id="titulo">O que é Inteligência Artificial e quais são as suas aplicações?</p> 
    <p id="textar">A inteligência artificial é um ramo de pesquisa da ciência da computação que busca,
        através de símbolos computacionais, construir mecanismos e/ou dispositivos que
        simulem a capacidade do ser humano de pensar, resolver problemas, ou seja, de ser inteligente.
        A inteligência artificial irá transformar todas as indústrias, mas nós precisamos entender
        os seus limites. <br>
        A principal limitação da IA é que ela aprende com os dados. Não há outra
        maneira de incorporar conhecimento a ela. Isso significa que qualquer imprecisão nos dados
        se refletirá nos resultados.
    </p>
    <div id="imgno1">
        <img id="img" src="./img/Novidades/artificial.jpg">
    </div>
    </div>
    `;

    container.innerHTML = template

    return container;
}
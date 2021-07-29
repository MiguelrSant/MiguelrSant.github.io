    import * as Components from "../Script/imports.js"

    const main = document.getElementById('conteudo')

    /*window.addEventListener('offline', function() {
        document.body.innerHTML = ''
        document.body.appendChild(Components.wifi())
    });
    */

    const PrintHash = {
        Inicio: Components.importInicio,
        Noticias: Components.importNoticias,
        Contato: Components.importContato
    }
    const init = () => {
        window.addEventListener('hashchange', () =>  {
            main.innerHTML = ''
            var verificarHesh = window.location.hash.substr(1)
            const printar = PrintHash[verificarHesh]
            /*if (printar == undefined) {
                main.appendChild(Components.naoencontrado())
            }*/
            main.appendChild(printar())
        })
    }
    window.onload = initPage
    function initPage () {
        const url = window.location.href
        if (url == "https://miguelrsant.github.io/") {
            window.location.replace ('/#Inicio')
        }
        const verificarHesh = window.location.hash.substr(1) 
        const printar = PrintHash[verificarHesh]
        main.appendChild(printar())
        init()
    }
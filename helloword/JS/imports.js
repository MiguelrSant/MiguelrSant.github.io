import importHome from '../pages/Home/index.js'
import importNoticias from "../pages/Noticias/index.js";
import importNovidades from "../pages/Novidades/index.js";
import importDicas from "../pages/Dicas/index.js"

export default function Imports() {
    const main = document.getElementById('conteudo')
    
    function createImports() {
        let PrintPages = {
            Home: importHome,
            Noticias: importNoticias, 
            Novidades: importNovidades,
            Dicas:  importDicas
        }
    
        function init() {
            window.addEventListener('hashchange', () =>  {
                main.innerHTML = ''
                var Hash = window.location.hash.substr(1)
                const Printar = PrintPages[Hash]
                main.appendChild(Printar())
            })
        }
        return {
            PrintPages,
            init
        }
    }
    window.onload = function Load() {
        const Imports = createImports()
        const Url = window.location.href
        if (Url == "https://miguelrsant.github.io/") {
            window.location.replace ('/#Home')
        }
        const Hash = window.location.hash.substr(1) 
        const Printar = Imports.PrintPages[Hash]
        main.appendChild(Printar())
        Imports.init()
    }
}
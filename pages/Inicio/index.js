export default () => {
    const container = document.createElement('div')

    const template = 
    `
    <header id="text-ops">
        <h1>
            ESTEJA POR DENTRO DAS <br> 
            NOVIDADES DO MUNDO  <br>
            COM O FREIZEIT   
        </h1>
    </header>
    <div class="novidades-">
        <div>
            <h1 class="tiln">
                Free Fire
            </h1>
        </div>
        <div>
            <p class="parn">
            
                Para saber todas as mudanças, cada detalhe do que irá <br>
                mudar após a manutenção do Free Fire nesta quarta feira, dia <br>
                08 de Abril, acesse: Notas da atualização do Free Fire em Abril
            </p>
        </div>
        <div class="imgs">
            <img scr="https://raw.githubusercontent.com/MiguelrSant/MiguelrSant.github.io/main/IMG/Free-Fire3.png">
        </div>
    </div>  
    <br>
    <div class="novidades-">
        <div>
            <h1 class="tiln1">
                Conter Strik
            </h1>
            <style>
                .tiln1 {
                    color: white;
                    font-family: Arial; 
                }
                .tiln1:hover {
                    border-bottom: 2px solid white;
                    width: 250px
                }
            </style>
        </div>
        <div>
            <p class="parn">

            </p>
        </div>
        <div class="imgs">
            <img scr="">
        </div>
    </div>  
    <br>
    <div class="novidades-">
        <div>
            <h1 class="tiln2">
                PBG mobile
            </h1>
            <style>
                .tiln2 {
                    color: white;
                    font-family: Arial; 
                }
                .tiln2:hover {
                    border-bottom: 2px solid white;
                    width: 210px
            }
            </style>

        </div>
        <div>
            <p class="parn">

            </p>
        </div>
        <div class="imgs">
            <img scr="">
        </div>
    </div> 
    <br> 
    <div class="novidades-">
        <div>
            <h1 class="tiln3">
                Fortinit
            </h1>
            <style>
                .tiln3 {
                    color: white;
                    font-family: Arial; 
                }
                .tiln3:hover {
                    border-bottom: 2px solid white;
                    width: 150px
            }
            </style>
        </div>
        <div>
            <p class="parn">

            </p>
        </div>
        <div class="imgs">
            <img scr="">
        </div>
    </div> 
    <br> 
    <div class="novidades-">
        <div>
            <h1 class="tiln4">
                Legue of Legends
            </h1>
            <style>
                .tiln4 {
                    color: white;
                    font-family: Arial; 
                }
                .tiln4:hover {
                    border-bottom: 2px solid white;
                    width: 330px
            }
            </style>
        </div>
        <div>
            <p class="parn">

            </p>
        </div>
        <div class="imgs">
            <img scr="">
        </div>
    </div>  
    <br>
    <div class="novidades-">
        <div>
            <h1 class="tiln5">
                Hill Climb
            </h1>
            <style>
                .tiln5 {
                    color: white;
                    font-family: Arial; 
                }
                .tiln5:hover {
                    border-bottom: 2px solid white;
                    width: 190px
            }
            </style>
        </div>
        <div>
            <p class="parn">

            </p>
        </div>
        <div class="imgs">
            <img scr="">
        </div>
    </div>  
    `;

    container.innerHTML = template

    return container;
}

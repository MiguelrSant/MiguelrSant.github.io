const {titulo1, titulo2, titulo3, titulo4, titulo5, titulo6,
        texto1, texto2, texto3, texto4, texto5, texto6,
        img1, img2, img3, img4, img5, img6,} = require('./text.json')

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
        <div> <h1 class="tiln">${titulo1}</h1> </div>
        <div> <p class="parn"> ${texto1} </p> </div>
        <div style="background-image: url(${img1}); border-radius: 40px;" > </div>
    </div>  
    <br>
    <div class="novidades-">
        <div> <h1 class="tiln1"> ${titulo2} </h1> </div>
        <div> <p class="parn"> ${texto2} </p> </div>
        <div style="background-image: url(${img2}); border-radius: 40px;"></div>
    </div>  
    <br>
    <div class="novidades-">
        <div> <h1 class="tiln2">${titulo3}</h1> </div>
        <div> <p class="parn"> ${texto3}</p> </div>
        <div style="background-image: url(${img3}); border-radius: 40px;"></div>
    </div> 
    <br> 
    <div class="novidades-">
        <div> <h1 class="tiln3"> ${titulo4} </h1> </div>
        <div> <p class="parn"> ${texto4} </p> </div>
        <div style="background-image: url(${img4}); border-radius: 40px;"> </div>
    </div> 
    <br> 
    <div class="novidades-">
        <div> <h1 class="tiln4"> ${titulo5}</h1> </div>
        <div> <p class="parn"> ${texto5}</p> </div>
        <div style="background-image: url(${img5}); border-radius: 40px;"></div>
    </div>  
    <br>
    <div class="novidades-">
        <div> <h1 class="tiln5"> ${titulo6} </h1> </div>
        <div> <p class="parn"> ${texto6}</p> </div>
        <div style="background-image: url(${img6}); border-radius: 40px;"></div>
    </div>  
    `;

    container.innerHTML = template

    return container;
}

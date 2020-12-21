export default () => {
    const container = document.createElement('div')

    const template = 
    `
    <style>
        #cont {
            margin-top: 153px;
        }
    </style>
    `;

    container.innerHTML = template

    return container;
}

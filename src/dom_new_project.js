//Manipulacion del DOM para crear un nuevo proyecto

function NewProject(){

    const form = document.createElement('form');
    form.setAttribute('id','new-project');

    const div = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.setAttribute('for','title-project');
    label.textContent = "Titulo del Proyecto";
    input.setAttribute('type','text');
    input.setAttribute('id','title-project');
    input.required = true;

    div.appendChild(label);
    div.appendChild(input);
    form.appendChild(div);

}   

export default NewProject
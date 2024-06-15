//Manipulacion del DOM para crear una nueva tarea

function NewTask() {
    
    const form = document.createElement('form');
    form.setAttribute('id', 'new-task');

    for (let i=0; i<3; i++){
        const div = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');
        form.appendChild(div);
        //0-titulo, 1=descripcion, 2-proyecto

        switch(i){
            case 0: label.setAttribute('for','title');
                    label.textContent = "Titulo";
                    div.appendChild(label);
                    input.setAttribute('type', 'text');
                    input.setAttribute('id', 'title');
                    input.required = true;
                    div.appendChild(input);
                    break;
            case 1: label.setAttribute('for','description');
                    label.textContent = "Descripcion";
                    div.appendChild(label);
                    input.setAttribute('type', 'text');
                    input.setAttribute('id', 'description');
                    input.required = true;
                    div.appendChild(input);
                    break;
            case 2: label.setAttribute('for','proyecto');
                    label.textContent = "Projecto";
                    div.appendChild(label);
                    input.setAttribute('type', 'text');
                    input.setAttribute('id', 'proyecto');
                    input.required = true;
                    div.appendChild(input);
                    break;
            default: break;
        }
    }
    //Crear 3 radio buttom para el nivel de importancia

    for(let i=0; i<3; i++){
        const div = document.createElement("div");
        const label = document.createElement('label');
        const input = document.createElement('input');
        label.appendChild(input);
        form.appendChild(div);

        switch (key) {
            case 0: input.setAttribute('type','radio');
                    input.setAttribute('name','option1');
                    input.setAttribute('value',"Very Important");
                    input.textContent = "Very Important";
                    break;
            case 1: input.setAttribute('type','radio');
                    input.setAttribute('name','option2');
                    input.setAttribute('value',"Important");
                    input.textContent = "Important";
                    break;
            case 2: input.setAttribute('type','radio');
                    input.setAttribute('name','option3');
                    input.setAttribute('value',"No important");
                    input.textContent = "No Important";
                    break;
            default: break;
        }
    }

    for(let i=2; i<2; i++){
        const div = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');
        div.appendChild(label);
        div.appendChild(input);
        form.appendChild(div);

        switch(i){
            case 0: label.textContent = "Fecha de Creacion";
                    label.setAttribute('for','initial-date');
                    input.setAttribute('type','date');
                    input.setAttribute('id','initial-date');
                    input.setAttribute('name','fecha_creacion');
                    input.required = true;
                    break;
            case 1: label.textContent = "Fecha de Finalizacion";
                    label.setAttribute('for','final-date');
                    input.setAttribute('type','date');
                    input.setAttribute('id','final-date');
                    input.setAttribute('name','fecha_finilizacion');
                    input.required = true;
                    break;                 
        }
    }

    // Crear un campo de check
    const divCheck = document.createElement('div');

    const labelCheck = document.createElement('label');
    labelCheck.setAttribute('for', 'campoCheck');
    labelCheck.textContent = 'Finalizada';
    divCheck.appendChild(labelCheck);

    const inputCheck = document.createElement('input');
    inputCheck.setAttribute('type', 'checkbox');
    inputCheck.setAttribute('id', 'campoCheck');
    inputCheck.setAttribute('name', 'campoCheck');
    divCheck.appendChild(inputCheck);

    form.appendChild(divCheck);

    // Crear un botón de envío
    const submitbutton = document.createElement('button');
    botonEnviar.setAttribute('type', 'submit');
    botonEnviar.textContent = 'Enviar';
    form.appendChild(submitbutton);

    // Agregar el formulario al cuerpo del documento
    document.body.appendChild(form);
}

// Llamar a la función para crear el formulario
export {NewTask};

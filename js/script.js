function GeneraForm(){
    let formulario=document.createElement("form");

    let titulo=document.createElement("label");

    let cajaTextNombre=document.createElement("input");

    let cajaTextApellido=document.createElement("input");

    let cajaTextEmail=document.createElement("input");

    let cajaTextAsunto=document.createElement("input");

    let cajaTextMensaje=document.createElement("textarea");

    let boton=document.createElement("input");

        formulario.setAttribute('method', "post");
        formulario.setAttribute('action', "");

        cajaTextNombre.setAttribute('type', "text");
        cajaTextNombre.setAttribute('placeholder', "Nombre");

        cajaTextApellido.setAttribute('type', "text");
        cajaTextApellido.setAttribute('placeholder', "Apellido");

        cajaTextEmail.setAttribute('type', "text");
        cajaTextEmail.setAttribute('placeholder', "Email");

        cajaTextAsunto.setAttribute('type', "text");
        cajaTextAsunto.setAttribute('placeholder', "Asunto");

        cajaTextMensaje.setAttribute('placeholder', "Mensaje");

    boton.setAttribute('type', "button");	
        boton.setAttribute('value', "Enviar");
        boton.setAttribute('onclick', "alert('Se envio el mensaje')");	

        titulo.innerHTML='<h1>CONTACTAME</h1>';
        formulario.appendChild(titulo);
        formulario.appendChild(cajaTextNombre);
        formulario.appendChild(cajaTextApellido);
        formulario.appendChild(cajaTextEmail);
        formulario.appendChild(cajaTextAsunto);
        formulario.appendChild(cajaTextMensaje);
        formulario.appendChild(boton);
        document.getElementById("formulario").appendChild(formulario);
}
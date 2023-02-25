var inputs= document.getElementsByClassName ("formulario_input");
for (var i=0; i<inputs.length; i++){
    inputs [i].addEventListener ("keyup", function() {
        if (this.value.length>=1){ 
            this.nextElementSibling.classList.add("fijar");
        } else {
            this.nextElementSibling.classList.remove("fijar");
        }
    });
}

const form= document.querySelector("form")
document.querySelector(".show").addEventListener("click", () => {
    form.classList.add("form_mostrar")
})

document.querySelector(".formulario_submit").addEventListener("click", () => {
    form.classList.remove("form_mostrar")
})



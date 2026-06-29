let form = document.getElementById("formLibro");
let lista = document.getElementById("listaLibros");
let mensaje = document.getElementById("mensaje");
let contador = document.getElementById("contador");

let total = 0;

form.addEventListener("submit", function(e){
    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let descripcion = document.getElementById("descripcion").value.trim();
    let categoria = document.getElementById("categoria").value.trim();

    if(nombre === "" || descripcion === "" || categoria  === ""){
        mensaje.innerHTML = '<div classs="alert alert-danger">Completa todos los campos</div>';
        return;
}
let li =  document.createElement("li");
li.className = "list-group-item d-flex justify-content-between align-items-center";

li.innerHTML = `
<div>
    <strong>${nombre}</strong> - ${descripcion}
    <span class="badge bg-primary">${categoria}</span>
</div>
`;

let btn = document.createElement("button");
btn.textContent = "Eliminar";
btn.className = "btn btn-danger btn-sm";

btn.addEventListener("click", function(){
    li.remove();
    total--;
    contador.textContent = total; 
});

li.appendChild(btn);
lista.appendChild(li);

total++;
contador.textContent = total;

mensaje.innerHTML = '<div class="alert alert-success">Libro registrado correctamente</div>';

form.reset();
});

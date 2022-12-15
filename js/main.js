// aquí va el código
//campo producto - Name
//camo cantidad - Number 
// boton agregar btnAgregar
//alertValidaciones
//contadorProductos
//productosTotal
//precioTotal
//tablaListaCompras
// alertValidacionesTexto

let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");
let total = document.getElementById("precioTotal");
let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");
let btnAgregar = document.getElementById("btnAgregar");
let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let idTimeOut;
let contadorProductos = document.getElementById("contadorProductos");
let contador =0;
let totalEnProductos=0;
let productosTotal= document.getElementById("productosTotal");
let costoTotal=0;
let precioTotal = document.getElementById("precioTotal");
let precio =0;
let cantidad =0;

//genera un precio al azar
function getPrecio() {
    return Math.floor(Math.random() *50 *100) /100;  
}

//validar nombre
function validarNombre() {
    return (txtNombre.value.length>2)?true:false;
   
    
}

//validar cantidad
function validarCantidad() {
    if (txtNumber.value.length==0){
        return false;
    }
    if (isNaN(txtNumber.value)) {
        return false;
    }
    if (parseFloat(txtNumber.value)<=0) {
        return false;
    }
    return true;
}


btnAgregar.addEventListener ("click", function (event) {
    event.preventDefault();
    clearTimeout (idTimeOut);
    if ((!validarNombre())||(!validarCantidad)) {
        let lista ="<ul>"
        if (!validarNombre()) {
            txtNombre.style.border = "red thin solid"
            lista += "<li>Se debe escribir un nombre valido</li>"
            
        }
        if (!validarCantidad()) {
            txtNumber.style.border = "red thin solid"
            lista += "<li>Se debe escribir una cantidad valida</li>"
            
        }
        lista += "</ul>"
        alertValidacionesTexto.insertAdjacentHTML("beforeend", lista)
        alertValidaciones.style.display = "block";
        idTimeOut =setTimeout (function(){
            alertValidaciones.style.display= "none";
            alertValidacionesTexto.innerHTML="";
        },5000);
        return false; //termina ejecucion de la funcion
    }
    txtNombre.style.border ="";
    txtNumber.style.boder="";
    alertValidaciones.style.display= "none"
    contador ++;
    contadorProductos.innerHTML=contador;
    cantidad = parseFloat(txtNumber.value);
    totalEnProductos += cantidad;
    productosTotal.innerHTML = totalEnProductos;
    precio = getPrecio();
    costoTotal += precio*cantidad;
    precioTotal.innerHTML = "$ "+ costoTotal.toFixed(2);

    let row = `<tr>
        <td>${contador}</td>
        <td>${txtNombre.value}</td>
        <td>${txtNumber.value}</td>
        <td>${precio}</td>
    </tr>`
    cuerpoTabla[0].insertAdjacentHTML("beforeend",row);

    txtNombre.value="";
    txtNumber.value="";
    txtNombre.focus();
   
})
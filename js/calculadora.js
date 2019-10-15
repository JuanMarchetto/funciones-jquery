
var funciones = new Object();
var funcionAAplicar = "identidad";
$("button").click(function() {
    let valor = $("#entrada").val();
    let resultado = aplicar(funcionAAplicar, valor)
    $("#resultado").text(resultado)
});

function aplicar(funcionAAplicar, valor){
    try {
        return funciones[funcionAAplicar](valor);
    }catch(error) {
        console.error(error);
        return funcionAAplicar + " no es aplicable a " + valor;
    } 
}

$(function() {
    Object.keys(funciones).forEach(function (item) {
        opcion ='<option value="' + item + '" >' + item + '</option>';
        $("select").append(opcion);
        }
    )
});

$("select").change(function(e) {
    funcionAAplicar = e.target.value;
});
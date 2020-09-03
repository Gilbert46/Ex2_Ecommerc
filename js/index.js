function register(){
    document.getElementById("formulari").hidden = false;
    document.getElementById("navegador").hidden = true;
    document.getElementById("cercador").hidden = true;
    document.getElementById("formulari2").hidden = true;
    document.getElementById("formulari3").hidden = true;
}
function iniciar(){
    document.getElementById("formulari2").hidden = false;
    document.getElementById("formulari").hidden = true;
    document.getElementById("navegador").hidden = true;
    document.getElementById("cercador").hidden = true;
    document.getElementById("formulari3").hidden = true;    
}
function tornar(){
    document.getElementById("navegador").hidden = false;
    document.getElementById("cercador").hidden = false;
    document.getElementById("formulari").hidden = true;
    document.getElementById("formulari2").hidden = true;
    document.getElementById("formulari3").hidden = true;
}
function comprar(){
    document.getElementById("formulari3").hidden = false;
    document.getElementById("formulari2").hidden = true;
    document.getElementById("formulari").hidden = true;
    document.getElementById("navegador").hidden = true;
    document.getElementById("cercador").hidden = true;
}
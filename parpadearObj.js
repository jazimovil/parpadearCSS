// requiere jquery

function parpadearCSS(selector, propiedad, valor, veces = 2, dejarValor = false) {
    if (veces > 0) {
        var antVal = $(selector).css(propiedad);
        $(selector).css(propiedad, valor);
        setTimeout(function() {
            $(selector).css(propiedad, antVal);
            setTimeout(function() { parpadearCSS(selector, propiedad, valor, --veces, dejarValor) }, 250);
        }, 250);
    } else if (dejarValor) $(selector).css(propiedad, valor);
}

// para no tener problemas con chrome
function parpadearCSS(selector, propiedad, valor, veces, dejarValor) {
    (typeof veces !=='undefined') || (veces = 2);
    (typeof dejarValor !=='undefined') || (dejarValor = false);
    if (veces > 0) {
        var antVal = $(selector).css(propiedad);
        $(selector).css(propiedad, valor);
        setTimeout(function() {
            $(selector).css(propiedad, antVal);
            setTimeout(function() { parpadearCSS(selector, propiedad, valor, --veces, dejarValor) }, 250);
        }, 250);
    } else if (dejarValor) $(selector).css(propiedad, valor);
}


function parpadearClass(selector, clase1, clase2, veces, dejarClase2, milis) {
    clase1 || (clase1 = '');  // asi lo podemos hacer con valores que son para texto
    (typeof veces !=='undefined') || (veces = 2);  // esto con valores booleanos o numericos para no tener problema con el 0
    (typeof dejarClase2 !=='undefined') || (dejarClase2 = false);
    (typeof milis !=='undefined') || (milis = 250);
    if (veces > 0) {
        $(selector).removeClass(clase1);
        $(selector).addClass(clase2);
        setTimeout(function() {
            $(selector).removeClass(clase2);
            $(selector).addClass(clase1);
            setTimeout(function() { parpadearClass(selector, clase1, clase2, --veces, dejarClase2, milis) }, milis);
        }, milis);
    } else if (dejarClase2) {
        $(selector).removeClass(clase1);
        $(selector).addClass(clase2);
    }
}

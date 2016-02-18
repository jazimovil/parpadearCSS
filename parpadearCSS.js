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

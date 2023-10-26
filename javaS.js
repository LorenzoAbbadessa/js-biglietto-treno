const KM = prompt("Quanti chilometri vorresti percorrere?")
const età = prompt("Quanti anni hai?")
const prezzo = KM * 0.21




if ( età < 18 ) {
    document.getElementById("titolo").innerHTML = prezzo * 0.20 ;
} else if (età > 65) {
    document.getElementById("titolo").innerHTML = prezzo * 0.40 ;
}else {
    document.getElementById("titolo").innerHTML = prezzo  ;
}

document.getElementById("titolo").innerHTML = prezzo.toFixed(2)







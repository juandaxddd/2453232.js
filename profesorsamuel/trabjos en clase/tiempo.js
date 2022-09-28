


























var vec=[];
for (let i = 0; 10; i++ ) {
    vec[i]=Math.round (Math.random()*100);
}
var k=0;
setInterval (() => {
    console.log (vec[k])
    k++;k==10?k=0:k=k




})






















function pruebacallback (callback1, callback2, name){
    callback1 (name);
    setTimeout(() =>{
        console.log ('dentro de pruebacallback')
    },2000);
    callback2 (name);
}
    function saludo  (nombre){
        console.log (`Hola ${nombre}`)
    }
    function cuentaletras (nombre){
        console.log ( nombre.length)
    }
pruebacallback(saludo, 'ana' );











//receta de cocina changuaa
function callback(agua){
    callback (agua);
    console.log ('paso #1')
    setTimeout(() => {
        console.log ('poner a calentar el agua hasta que hierva')
    },1000)
}


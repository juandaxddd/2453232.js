class Publicacion {
    constructor (titulo, precio){
        this._titulo = titulo;
        this._precio =precio;
    }
    set titulo (titulo){
        this._titulo=titulo;
    }
    set precio (precio) {
        this._precio= precio;
    }
    get titulo(){
        return this._titulo;
    }
    get precio (){
        return this._precio;
    }
}
class Libro extends Publicacion{
    constructor (titulo, precio, )
}
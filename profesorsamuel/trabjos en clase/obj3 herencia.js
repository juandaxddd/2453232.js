class usuario {
    constructor (id, nombre, edad){
        this._id=id;
        this._nombre=nombre;
        this._edad=edad;
    }
}
class estudiante extends usuario{
    constructor (id, nombre, edad, ficha, programa){
        super(id,nombre,edad);
        this.ficha=ficha;
        this._programa=programa;
    }
}
var e1 =new estudiante (111, "juanPerez", 18, 2237756, "adsi");
var e2 =new estudiante (112, "Ana Herrera", 18,2237756, "adsi");

class moto {
    constructor (placa, estudiante){
        this._placa=placa;
        this._esudiante=estudiante;

    }
}


var m1=new moto ("se-123", e1);
console.log(m1);


class grupo {
    constructor(codgrupo,estudiantes){
        this._codgrupo=codgrupo;
        this._esudiantes=estudiantes;
    }
    incorporarEstudiante(estudiante){
        this._estudiantes.push(estudiante);
    }
}
var g1 = [];
var grupo1 =new grupo (909,g1);
console.log(grupo1);
grupo1.incorporarEstudiante (e1);
grupo1.incorporarEstudiante (e2);
console.log (grupo1)
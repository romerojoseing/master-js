var bicicleta = {
    color: 'rojo',
    modelo: 'BMX',
    frenos: 'disco',
    velMax: '60km', 
    cambiaColor: function(nuevo_color){
        this.color = nuevo_color;
    }
};

bicicleta.cambiaColor("Azul");
console.log(bicicleta);
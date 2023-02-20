class Animal {

    constructor (especie) {
        this.especie = especie
    }

    falar() {
        console.log(this.especie + 'au au au ')
    }

    comer() {
        console.log(this.especie + 'comer racao')
    }

    dormir(){
        console.log(this.especie + ' dormir')
    }

}

const cachorro = new Animal ('cachorro')
cachorro.falar()
cachorro.comer()
cachorro.dormir()
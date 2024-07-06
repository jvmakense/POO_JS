class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    acelerar() {
        throw new Error('este método deve ser implementado');
    }

    frear() {
        throw new Error('este método deve ser implementado');
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
        super(marca, modelo);
        this.portas = portas;
    }

    acelerar() {
        return`${this.marca} ${this.modelo} está acelerando`
    }

    frear() {
        return`${this.marca} ${this.modelo} está freando`
    }
}

    class Moto extends Veiculo {
        constructor(marca, modelo, cilindrada) {
            super(marca, modelo);
            this.cilindrada = cilindrada;
        }
    
        acelerar() {
            return`${this.marca} ${this.modelo} está acelerando`
        }
    
        frear() {
            return`${this.marca} ${this.modelo} está freando`
    }
}

const Carro1 = new Carro('Fiat', 'Uno', '2');
const Moto1 = new Moto('Honda', 'Bros', '159');
const Carro2 = new Carro('GM', 'Celta', '4');

console.log(Carro1.acelerar());
console.log(Moto1.frear());
console.log(Carro2.acelerar());


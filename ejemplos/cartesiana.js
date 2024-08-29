class Cartesiana {
    // Propiedades privadas
    #x;
    #y;

    constructor(x, y) {
        this.#x = x; // Inicialización de la propiedad privada
        this.#y = y; // Inicialización de la propiedad privada
    }

    // Método para obtener el valor de x
    getX() {
        return this.#x;
    }

    // Método para establecer el valor de x
    setX(x) {
        this.#x = x;
    }
}

// Crear una instancia de la clase Cartesiana
const m = new Cartesiana(10, 20);

// Acceder al valor de x usando el método público
console.log(m.getX()); // Imprime: 10

// Cambiar el valor de x usando el método público
m.setX(30);
console.log(m.getX()); // Imprime: 30

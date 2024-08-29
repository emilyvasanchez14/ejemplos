function suma(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        console.log("Error: tipo de dato incorrecto"); 
        return null;
    }
}

console.log(suma(5, 10)); // Esto debería devolver 15
console.log(suma(5, "10")); // Esto debería mostrar un error y devolver null




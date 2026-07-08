import { PersistenceService } from './services/persistence.service';
import { Producto, Cliente } from './models/types';

async function ejecutarPruebas() {
    const persistence = new PersistenceService();

    console.log("=== INICIANDO PRUEBAS DE PERSISTENCIA ===");

    //Escenario 1: Intentos de leer cuando el archivo no existe [cite: 28]
    console.log("\n1. Probando lectura inicial (Archivos inexistentes)...");
    const productosIniciales = await persistence.obtenerProductos();
    console.log(`Productos en memoria: ${productosIniciales.length} (Esperado: 0)`);

    //Escenario 2: Escritura de datos válidos 
    console.log("\n2. Insertando datos válidos...");
    try {
        const prod1: Producto = { id: 101, nombre: "Laptop Dell", precio: 8500, stock: 15 };
        const cliente1: Cliente = { id: 1, nombre: "Carlos Gómez", email: "carlos@kinal.edu.gt", telefono: "5555-1234" };

        await persistence.agregarProducto(prod1);
        await persistence.agregarCliente(cliente1);
        console.log("-> Registros guardados exitosamente.");
    } catch (error: any) {
        console.error("-> Error inesperado:", error.message);
    }

    //Escenario 3: Intentar registrar un ID duplicado (Validación preventiva) [cite: 13, 25]
    console.log("\n3. Probando validación de ID duplicado...");
    try {
        const prodDuplicado = { id: 101, nombre: "Teclado Mecánico", precio: 450, stock: 5 };
        await persistence.agregarProducto(prodDuplicado);
    } catch (error: any) {
        console.log(`-> Éxito manejando el error: ${error.message} [cite: 29]`);
    }

    //Escenario 4: Intentar meter datos inválidos con campos vacíos [cite: 26, 28]
    console.log("\n4. Probando validación de campos obligatorios vacíos...");
    try {
        const clienteInvalido = { id: 2, nombre: "", email: "correo-sin-arroba", telefono: "123" };
        await persistence.agregarCliente(clienteInvalido);
    } catch (error: any) {
        console.log(`-> Éxito manejando el error: ${error.message} [cite: 29]`);
    }

    //Escenario 5: Lectura correcta y reconstrucción de datos [cite: 23, 27]
    console.log("\n5. Recuperando y reconstruyendo datos desde los archivos JSON...");
    const productosFinales = await persistence.obtenerProductos();
    console.log("Datos actuales leídos de disco:", productosFinales);
}

ejecutarPruebas();
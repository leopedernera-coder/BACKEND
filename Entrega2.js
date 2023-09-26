const fs = require('fs');

class ProductManager {
    constructor() {
        this.id = 0;
        this.title = "";
        this.description = "";
        this.price = 0;
        this.thumbnail = "";
        this.code = 0;
        this.stock = 0;
        this.products = [];
        this.codes = [];
        this.filePath = 'products.json'; // Ruta del archivo JSON
        this.loadProductsFromFile(); // Cargar productos desde el archivo
    }

    // Resto de tus métodos existentes aquí...

    // Método para guardar productos en el archivo
    saveProductsToFile() {
        const data = JSON.stringify(this.products, null, 2);
        try {
            fs.writeFileSync(this.filePath, data);
            console.log('Productos guardados en el archivo.');
        } catch (error) {
            console.error('Error al guardar productos en el archivo:', error);
        }
    }

    // Método para cargar productos desde el archivo
    loadProductsFromFile() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            this.products = JSON.parse(data);
            console.log('Productos cargados desde el archivo.');
        } catch (error) {
            console.error('Error al cargar productos desde el archivo:', error);
        }
    }
}

let Manager = new ProductManager();

Manager.addProduct('producto 1', 'descripcion 1', 100, 'imagen.jpg', 40, 500);
Manager.addProduct('producto 2', 'descripcion 2', 500, 'imagen2.jpg', 20, 1000);
Manager.addProduct('producto 3', 'descripcion 3', 800, 'imagen3.jpg', 10, 2000);
Manager.addProduct('producto 4', 'descripcion 4', 10000, 'imagen4.jpg', 30, 10);

console.log(Manager.getProducts());
Manager.updateProductsById(1, 'newProd', 'newDesc', 75, 'newImage', 200, 4000);
console.log(Manager.getProducts());
console.log(Manager.deleteProductsById(3));
console.log(Manager.getProducts());

// Guardar productos en el archivo
Manager.saveProductsToFile();

# AppConsumoAPI

Esta aplicación es una app móvil desarrollada en React Native con TypeScript, que permite
listar, crear, editar y eliminar productos utilizando una API REST (`https://fakestoreapi.com/products`).

## Características principales

- Listado de productos: muestra todos los productos obtenidos de la API.  
- Creación de productos: permite agregar un nuevo producto con título, precio, descripción e imagen.  
- Edición de productos: modifica los datos de un producto existente.  
- Eliminación de productos: permite borrar un producto seleccionado.  
- Consumo de API externa con manejo de peticiones HTTP mediante axios. 
- Navegación entre pantallas utilizando React Navigation.

## Instalación y ejecución

1. Clonar el repositorio
   ```bash
   git clone https://github.com/tuusuario/proyecto-productos.git
   cd proyecto-productos
   ```

2. Instalar dependencias
   ```bash
   npm install
   ```

3. Ejecutar la aplicación
   ```bash
   npx expo start
   ```

4. Escaneá el código QR desde la app de Expo Go en tu celular.

## Funcionamiento general

La aplicación se comunica con la API de Fake Store API mediante las funciones definidas en `api/productos.ts`:

- `obtenerProductos()` Trae la lista completa de productos.  
- `obtenerProductoPorId(id)` Devuelve los datos de un producto específico.  
- `crearProducto(data)` Envía un nuevo producto al servidor.  
- `editarProducto(id, data)` Actualiza un producto existente.  
- `eliminarProducto(id)` Elimina un producto según su ID.

Cada pantalla del proyecto utiliza estos métodos según la funcionalidad correspondiente.

## Tecnologías utilizadas

- React Native  
- TypeScript  
- Axios  
- React Navigation  
- Expo
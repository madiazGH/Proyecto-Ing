import axios from "axios";
import { Producto } from "../producto";

const URL_API = "https://fakestoreapi.com/products";

export const obtenerProductos = () => {
    return axios.get(URL_API);
};

export const obtenerProductoPorId = (id: number) => {
    return axios.get(`${URL_API}/${id}`);
};

export const crearProducto = (data: Producto) => {
    return axios.post(URL_API, data);
};

export const editarProducto = (id: number, data: Producto) => {
    return axios.put(`${URL_API}/${id}`, data);
};

export const eliminarProducto = (id: number) => {
    return axios.delete(`${URL_API}/${id}`);
};

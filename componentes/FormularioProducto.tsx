import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { Producto } from "../producto";

interface Props {
    producto?: Producto;
    onEnviar: (data: Producto) => void;
}

export default function FormularioProducto({ producto, onEnviar }: Props) {
    const [titulo, setTitulo] = useState(producto?.title || "");
    const [precio, setPrecio] = useState(String(producto?.price || ""));
    const [descripcion, setDescripcion] = useState(producto?.description || "");
    const [imagen, setImagen] = useState(producto?.image || "");

    return (
        <View>
        <TextInput placeholder="Título" value={titulo} onChangeText={setTitulo} />
        <TextInput placeholder="Precio" value={precio} onChangeText={setPrecio} keyboardType="numeric" />
        <TextInput placeholder="Descripción" value={descripcion} onChangeText={setDescripcion} />
        <TextInput placeholder="URL Imagen" value={imagen} onChangeText={setImagen} />
        <Button
            title="Guardar"
            onPress={() =>
            onEnviar({
                title: titulo,
                price: parseFloat(precio),
                description: descripcion,
                image: imagen,
            })
            }
        />
        </View>
    );
}

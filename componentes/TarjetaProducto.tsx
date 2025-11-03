import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Producto } from "../producto";

interface Props {
    producto: Producto;
    onPress: () => void;
}

export default function TarjetaProducto({ producto, onPress }: Props) {
    return (
        <TouchableOpacity onPress={onPress} style={estilos.tarjeta}>
        <Image source={{ uri: producto.image }} style={estilos.imagen} />
        <Text style={estilos.titulo}>{producto.title}</Text>
        <Text style={estilos.precio}>${producto.price}</Text>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    tarjeta: {
        backgroundColor: "#fff",
        borderRadius: 8,
        marginVertical: 8,
        padding: 10,
        elevation: 3,
    },
    imagen: { width: "100%", height: 150, resizeMode: "contain" },
    titulo: { fontSize: 16, fontWeight: "bold", marginTop: 5 },
    precio: { fontSize: 14, color: "green" },
});

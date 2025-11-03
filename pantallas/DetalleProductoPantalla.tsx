import React, { useEffect, useState } from "react";
import { View, Text, Image, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RutasStack } from "../navegacion/NavegadorApp";
import { obtenerProductoPorId } from "../api/productos";
import { Producto } from "../producto";

type Props = NativeStackScreenProps<RutasStack, "DetalleProducto">;

export default function DetalleProductoPantalla({ route, navigation }: Props) {
    const { id } = route.params;
    const [producto, setProducto] = useState<Producto | null>(null);

    useEffect(() => {
        obtenerProductoPorId(id)
        .then((respuesta) => setProducto(respuesta.data))
        .catch((error) => console.error("Error al obtener producto:", error));
    }, []);

    if (!producto) return <Text>Cargando...</Text>;

    return (
        <View style={{ padding: 20, alignItems: "center" }}>
        <Image
            source={{ uri: producto.image }}
            style={{ width: 250, height: 250, resizeMode: "contain", marginBottom: 20 }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>{producto.title}</Text>
        <Text style={{ textAlign: "center", marginVertical: 10 }}>{producto.description}</Text>
        <Text style={{ color: "green", marginBottom: 20 }}>${producto.price}</Text>

        <Button title="Editar" onPress={() => navigation.navigate("EditarProducto", { id })} />
        <Button title="Eliminar" onPress={() => navigation.navigate("EliminarProducto", { id })} />
        </View>
    );
}

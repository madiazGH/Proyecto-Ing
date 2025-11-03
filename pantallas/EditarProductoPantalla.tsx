import React, { useEffect, useState } from "react";
import { View, Alert, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RutasStack } from "../navegacion/NavegadorApp";
import { obtenerProductoPorId, editarProducto } from "../api/productos";
import FormularioProducto from "../componentes/FormularioProducto";
import { Producto } from "../producto";

type Props = NativeStackScreenProps<RutasStack, "EditarProducto">;

export default function EditarProductoPantalla({ route, navigation }: Props) {
    const { id } = route.params;
    const [producto, setProducto] = useState<Producto | null>(null);

    useEffect(() => {
        obtenerProductoPorId(id)
        .then((respuesta) => setProducto(respuesta.data))
        .catch((error) => console.error("Error al obtener producto:", error));
    }, []);

    const manejarEnvio = (data: Producto) => {
        editarProducto(id, data)
        .then(() => {
            Alert.alert("Éxito", "Producto editado correctamente");
            navigation.goBack();
        })
        .catch((error) => {
            console.error("Error al editar producto:", error);
            Alert.alert("Error", "No se pudo editar el producto");
        });
    };

    if (!producto) return <Text>Cargando...</Text>;

    return (
        <View style={{ padding: 20 }}>
        <FormularioProducto producto={producto} onEnviar={manejarEnvio} />
        </View>
    );
}

import React, { useEffect } from "react";
import { View, Text, Button, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RutasStack } from "../navegacion/NavegadorApp";
import { eliminarProducto, obtenerProductoPorId } from "../api/productos";
import { Producto } from "../producto";

type Props = NativeStackScreenProps<RutasStack, "EliminarProducto">;

export default function EliminarProductoPantalla({ route, navigation }: Props) {
    const { id } = route.params;
    const [producto, setProducto] = React.useState<Producto | null>(null);

    useEffect(() => {
        obtenerProductoPorId(id)
        .then((respuesta) => setProducto(respuesta.data))
        .catch((error) => console.error("Error al obtener producto:", error));
    }, []);

    const confirmarEliminacion = () => {
        eliminarProducto(id)
        .then(() => {
            Alert.alert("Éxito", "Producto eliminado correctamente");
            navigation.navigate("ListaProductos");
        })
        .catch((error) => {
            console.error("Error al eliminar producto:", error);
            Alert.alert("Error", "No se pudo eliminar el producto");
        });
    };

    if (!producto) return <Text>Cargando...</Text>;

    return (
        <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>
            ¿Seguro que deseas eliminar "{producto.title}"?
        </Text>
        <Button title="Eliminar" onPress={confirmarEliminacion} />
        </View>
    );
}

import React from "react";
import { View, Alert } from "react-native";
import FormularioProducto from "../componentes/FormularioProducto";
import { crearProducto } from "../api/productos";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RutasStack } from "../navegacion/NavegadorApp";
import { Producto } from "../producto";

type Props = NativeStackScreenProps<RutasStack, "CrearProducto">;

export default function CrearProductoPantalla({ navigation }: Props) {
    const manejarEnvio = (data: Producto) => {
        crearProducto(data)
        .then(() => {
            Alert.alert("Éxito", "Producto creado correctamente");
            navigation.goBack();
        })
        .catch((error) => {
            console.error("Error al crear producto:", error);
            Alert.alert("Error", "No se pudo crear el producto");
        });
    };

    return (
        <View style={{ padding: 20 }}>
        <FormularioProducto onEnviar={manejarEnvio} />
        </View>
    );
}

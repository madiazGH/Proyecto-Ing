import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, TouchableOpacity, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RutasStack } from "../navegacion/NavegadorApp";
import { obtenerProductos } from "../api/productos";
import { Producto } from "../producto";
import TarjetaProducto from "../componentes/TarjetaProducto";

type Props = NativeStackScreenProps<RutasStack, "ListaProductos">;

export default function ListaProductosPantalla({ navigation }: Props) {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        obtenerProductos()
        .then((respuesta) => {
            setProductos(respuesta.data);
            setCargando(false);
        })
        .catch((error) => {
            console.error("Error al obtener productos:", error);
            setCargando(false);
        });
    }, []);

    if (cargando) return <Text>Cargando...</Text>;

    return (
        <View style={{ padding: 20 }}>
        <Button
            title="Agregar Producto"
            onPress={() => navigation.navigate("CrearProducto")}
        />

        <FlatList
            data={productos}
            keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
            renderItem={({ item }) => (
                <TarjetaProducto
                producto={item}
                onPress={() => navigation.navigate("DetalleProducto", { id: item.id! })}
                />
            )}
        />
        </View>
    );
}

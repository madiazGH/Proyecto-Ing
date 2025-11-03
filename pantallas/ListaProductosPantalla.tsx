import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, TouchableOpacity, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RutasStack } from "../navegacion/NavegadorApp";
import { obtenerProductos } from "../api/productos";
import { Producto } from "../producto";

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
            <TouchableOpacity
                onPress={() => navigation.navigate("DetalleProducto", { id: item.id! })}
            >
                <View style={{ flexDirection: "row", marginVertical: 10, alignItems: "center" }}>
                <Image source={{ uri: item.image }} style={{ width: 100, height: 100, resizeMode: "contain", marginBottom: 20 }} />
                <Text style={{ fontSize: 16, flexShrink: 1 }}>{item.title}</Text>
                </View>
            </TouchableOpacity>
            )}
        />
        </View>
    );
}

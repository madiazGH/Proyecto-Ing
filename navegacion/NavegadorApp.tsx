import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListaProductosPantalla from "../pantallas/ListaProductosPantalla";
import DetalleProductoPantalla from "../pantallas/DetalleProductoPantalla";
import CrearProductoPantalla from "../pantallas/CrearProductoPantalla";
import EditarProductoPantalla from "../pantallas/EditarProductoPantalla";
import EliminarProductoPantalla from "../pantallas/EliminarProductoPantalla";

export type RutasStack = {
    ListaProductos: undefined;
    DetalleProducto: { id: number };
    CrearProducto: undefined;
    EditarProducto: { id: number };
    EliminarProducto: { id: number };
};

const Stack = createNativeStackNavigator<RutasStack>();

export default function NavegadorApp() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ListaProductos" component={ListaProductosPantalla} options={{ title: "Productos" }} />
                <Stack.Screen name="DetalleProducto" component={DetalleProductoPantalla} options={{ title: "Detalle" }} />
                <Stack.Screen name="CrearProducto" component={CrearProductoPantalla} options={{ title: "Nuevo producto" }} />
                <Stack.Screen name="EditarProducto" component={EditarProductoPantalla} options={{ title: "Editar" }} />
                <Stack.Screen name="EliminarProducto" component={EliminarProductoPantalla} options={{ title: "Eliminar" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

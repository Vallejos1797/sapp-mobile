import { Stack } from 'expo-router';
import React from 'react';
import {TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="home" options={{ headerShown: false }} />
            <Stack.Screen
                name="stockCuartoFrio"
                options={{
                    headerShown: true,
                    title: 'Stock Cuarto Frío',
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => console.log('Abrir menú')}>
                            <Ionicons name="menu" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                }}
            />

        </Stack>
    );
}

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
    const router = useRouter();

    const handleLogout = async () => {
        await AsyncStorage.removeItem('userToken'); // Elimina el token de autenticación
        router.replace('/login'); // Redirige a la pantalla de login
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Encabezado con la foto de perfil y detalles del usuario */}
            <View style={styles.header}>
                <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
                <Text style={styles.welcomeText}>BIENVENIDO</Text>
                <Text style={styles.userName}>XXXX XXXXXX</Text>
                <Text style={styles.userRole}>Destinatario</Text>
                <Text style={styles.userDate}>Sep 13, 2024</Text>
            </View>

            {/* Opciones de navegación */}
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuButton} onPress={() => router.push('stockCuartoFrio')}>
                    <View style={styles.menuIcon}></View>
                    <Text style={styles.menuText}>Stock Cuarto Frío</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuButton}>
                    <View style={styles.menuIcon}></View>
                    <Text style={styles.menuText}>Animales Registrados</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton}>
                    <View style={styles.menuIcon}></View>
                    <Text style={styles.menuText}>Pedidos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton}>
                    <View style={styles.menuIcon}></View>
                    <Text style={styles.menuText}>Productos Entregados</Text>
                </TouchableOpacity>
            </View>

            {/* Botón de salida */}
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutButtonText}>SALIR</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        backgroundColor: '#ffffff',
        width: '100%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'center',
        paddingVertical: 20,
        marginBottom: 20,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    welcomeText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    userRole: {
        fontSize: 14,
        color: '#555',
    },
    userDate: {
        fontSize: 12,
        color: '#555',
    },
    menuContainer: {
        width: '100%',
        marginVertical: 20,
    },
    menuButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    menuIcon: {
        width: 20,
        height: 20,
        backgroundColor: '#00bfa5',
        borderRadius: 10,
        marginRight: 15,
    },
    menuText: {
        fontSize: 16,
        color: '#333',
    },
    logoutButton: {
        backgroundColor: '#00bfa5',
        width: '80%',
        paddingVertical: 12,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 30,
    },
    logoutButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

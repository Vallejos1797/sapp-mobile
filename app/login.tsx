import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import {login} from "@/app/api/authApi";

export default function LoginScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('U0501903967');
    const [password, setPassword] = useState('U0501903967');
    const [rememberMe, setRememberMe] = useState(false);
    const handleLogin = async () => {
        try {
            const token = await login(email, password);
            console.log('-->token',token)
            if (token) {
                router.replace('/home'); // Redirige a la pantalla principal si el login es exitoso
            }
        } catch (error) {
            Alert.alert('Error', 'Correo electrónico o contraseña incorrectos');
        }

    };

    return (
        <View style={styles.container}>
            {/* Imagen de fondo en la parte superior */}
            <Image source={{ uri: 'https://via.placeholder.com/500x250' }} style={styles.backgroundImage} />

            {/* Logos en fila */}
            <View style={styles.logoContainer}>
                <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.logo} />
                <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.logo} />
            </View>

            {/* Título y subtítulo */}
            <Text style={styles.title}>EMPRESA PÚBLICA MUNICIPAL DE</Text>
            <Text style={styles.subtitle}>FAENAMIENTO Y PRODUCTOS CÁRNICOS DE IBARRA</Text>

            {/* Formulario de login */}
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail o Cédula"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>

                {/* Recordarme y ¿Olvidaste tu contraseña? */}
                <View style={styles.optionsContainer}>
                    <View style={styles.rememberContainer}>
                        {/*<CheckBox*/}
                        {/*    value={rememberMe}*/}
                        {/*    onValueChange={setRememberMe}*/}
                        {/*    tintColors={{ true: '#007bff', false: '#ccc' }}*/}
                        {/*/>*/}
                        <Text style={styles.rememberText}>Recuérdame</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>
                </View>

                {/* Botón de Iniciar sesión */}
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Iniciar sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    backgroundImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        marginBottom: 20,
    },
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 20,
        color: '#555',
    },
    form: {
        marginTop: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 8,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 40,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    rememberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rememberText: {
        marginLeft: 5,
        color: '#555',
    },
    forgotText: {
        color: '#007bff',
        textDecorationLine: 'underline',
    },
    loginButton: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

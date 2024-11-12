import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
    const router = useRouter();

    useEffect(() => {
        const checkAuthentication = async () => {
            const userToken = await AsyncStorage.getItem('userToken');
            console.log('inicia ', userToken);
            if (userToken) {
                router.replace('/home'); // Redirige a la pantalla de inicio
            } else {
                router.replace('/login'); // Redirige a la pantalla de login
            }
        };

        checkAuthentication();
    }, []);

    return null; // Puedes mostrar una pantalla de carga aquí si lo deseas
}

import apiClient from './apiClient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = async (name: string, password: string) => {
    try {
        const response = await apiClient.post('/login', { name, password });
        const token = response.data.token;

        // Guarda el token en AsyncStorage
        await AsyncStorage.setItem('userToken', token);

        return token;
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
};

export const logout = async () => {
    // Elimina el token de AsyncStorage para cerrar sesión
    await AsyncStorage.removeItem('userToken');
};

import apiClient from './apiClient';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getEspecies = async () => {
    try {

        const token = await AsyncStorage.getItem('userToken');

        if (!token) {
            throw new Error('No se encontró el token de autenticación');
        }

        // Realiza la petición con el encabezado Authorization
        const response = await apiClient.get('/stock_cuarto_frito', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        // Guarda el token en AsyncStorage

        return response.data;
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
};



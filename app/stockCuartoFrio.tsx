import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router'; // Usa useLocalSearchParams para obtener los parámetros
import { Ionicons } from '@expo/vector-icons';
import {getEspecies} from "@/app/api/cuartoFrioApi";

export default function stockCuartoFrio() {
    const router = useRouter();
    const { title } = useLocalSearchParams(); // Obtén el parámetro 'title' directamente
    const [especies, setEspecies] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getEspecies();
                console.log('las especies..',data)
                setEspecies(data);
            } catch (error) {
                console.error('Error al obtener las especies:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);



    // Obtén la fecha actual formateada
    const currentDate = new Date().toLocaleDateString('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <View style={styles.container}>
            {/* Fecha debajo del encabezado */}
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>{currentDate}</Text>
            </View>

            {/* Contenido de la pantalla */}
            <View style={styles.content}>
                <Text>Contenido de {title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#4a4a4a',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headerTitle: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    dateContainer: {
        height: 50,
        backgroundColor: '#4a4a4a',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    dateText: {
        color: '#ffffff',
        fontSize: 14,
        textAlign: 'left',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});

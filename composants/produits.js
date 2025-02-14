import { Text, StyleSheet, View, FlatList, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";

const Produits = () => {
    const [produits, setProduits] = useState([]);

    const getProduits = async () => {
        try {
            const response = await fetch(
                "https://fakestoreapi.com/products/category/jewelery"
            );
            const data = await response.json();
            setProduits(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProduits();
    }, []);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.carte}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.titre}>{item.title}</Text>
                <Text style={styles.prix}>${item.price.toFixed(2)}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.rating}>⭐ {item.rating.rate} ({item.rating.count} avis)</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={produits}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 10,
    },
    carte: {
        backgroundColor: '#fff',
        marginBottom: 15,
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    titre: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
        color: '#333',
    },
    prix: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#27ae60',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    rating: {
        fontSize: 14,
        color: '#f39c12',
        fontWeight: 'bold',
    },
});

export default Produits;

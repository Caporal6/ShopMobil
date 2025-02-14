import { Text, StyleSheet, View, FlatList, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons';

const Categorie = () => {
    const navigation = useNavigation();
    const [categories, setCategories] = useState([]);

    const categoryIcons = {
        "electronics": "tv",
        "jewelery": "gem",
        "men's clothing": "tshirt",
        "women's clothing": "female"
    };

    const getCategories = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products/categories");
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    const renderItem = ({ item }) => {
        return (
            <Pressable onPress={() => navigation.navigate('Produit', { category: item })}>
                <View style={styles.carte}>
                    <FontAwesome5 name={categoryIcons[item] || "box"} size={24} color="#333" style={styles.icon} />
                    <Text style={styles.texte}>{item.charAt(0).toUpperCase() + item.slice(1)}</Text>
                </View>
            </Pressable>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={(item) => item}
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
        flexDirection: 'row',
        alignItems: 'center',
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
    icon: {
        marginRight: 10,
    },
    texte: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default Categorie;

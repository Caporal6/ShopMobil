import { Text, StyleSheet, View, FlatList, Pressable, Animated } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons';

const Categorie = () => {
    const navigation = useNavigation();
    const [categories, setCategories] = useState([]);
    const fadeAnim = useRef(new Animated.Value(0)).current;

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
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }).start();
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
                <Animated.View style={[styles.carte, { opacity: fadeAnim }]}>
                    <FontAwesome5 name={categoryIcons[item] || "box"} size={24} color="#333" style={styles.icon} />
                    <Text style={styles.texte}>{item.charAt(0).toUpperCase() + item.slice(1)}</Text>
                </Animated.View>
            </Pressable>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={(item) => item}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff9a9e',
    },
    list: {
        padding: 10,
    },
    carte: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Changed from white to a light grey
        marginBottom: 15,
        padding: 15,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        transform: [{ scale: 1 }],
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

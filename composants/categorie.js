import { Text, StyleSheet, View, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';

const Categorie = () => {

    const renderItem = ({item}) => {
        return (
            <View style={styles.carte}>

                <Text style={styles.texte}>{item}</Text>
            </View>
        );
        };

const [utilisteurs, setUtilisateurs] = useState([]);

const getUtilisateurs = async () => {
    try {
        const response = await fetch(
            "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        setUtilisateurs(data);
    } catch (error) {
        console.log(error);
    }
}
useEffect(() => {
    getUtilisateurs()
}, []);

return(
    <View>
        <FlatList
        data={utilisteurs}
        renderItem={renderItem}
        />
    </View>
)
};










const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },


    carte: {
        backgroundColor: '#fff',
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
    },
    texte: {
        fontSize: 18,
    },
    
});

export default Categorie;
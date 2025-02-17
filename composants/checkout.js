import React from 'react';
import { View, Text, Button, StyleSheet, Image, FlatList, Pressable } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { ajouterProduit, supprimerProduit } from '../store/SliceProduits';

const Checkout = () => {
    const dispatch = useDispatch();
    const produitsPanier = useSelector((state) => state.produits.panier);
    const total = produitsPanier.reduce((sum, produit) => sum + produit.price, 0);

    const supprimer = (index) => {
        dispatch(supprimerProduit(index));
    };

    const renderItem = ({ item, index }) => (
        <Pressable onLongPress={() => supprimer(index)} style={styles.produit}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.produitDetails}>
                <Text style={styles.produitTitle}>{item.title}</Text>
                <Text style={styles.produitPrice}>${item.price.toFixed(2)}</Text>
            </View>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Checkout</Text>
            <FlatList
                data={produitsPanier}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.scrollContainer}
                ListEmptyComponent={
                    <View>
                        <Image source={require('../assets/emptyShopping.png')} style={{ width: 200, height: 200, alignSelf: 'center' }} />
                        <Text style={styles.emptyText}>Votre panier est vide</Text>
                    </View>
                }
            />
            {produitsPanier.length > 0 && (
                <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
            )}
            <Button title="Proceed to Payment" onPress={() => alert('Payment Processed')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        padding: 20,
    },
    scrollContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    emptyText: {
        fontSize: 18,
        color: '#999',
        textAlign: 'center',
        marginTop: 20,
    },
    produit: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        width: '100%',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 10,
    },
    produitDetails: {
        flex: 1,
    },
    produitTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    produitPrice: {
        fontSize: 14,
        color: '#888',
        marginTop: 5,
    },
    totalText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginVertical: 20,
    },
});

export default Checkout;

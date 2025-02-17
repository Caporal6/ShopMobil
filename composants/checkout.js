import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const produitsPanier = useSelector((state) => state.produits.panier);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Checkout</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {produitsPanier.length === 0 ? (
                    <Text style={styles.emptyText}>Votre panier est vide</Text>
                ) : (
                    produitsPanier.map((produit) => (
                        <View key={produit.id} style={styles.produit}>
                            <Image source={{ uri: produit.image }} style={styles.image} />
                            <View style={styles.produitDetails}>
                                <Text style={styles.produitTitle}>{produit.title}</Text>
                                <Text style={styles.produitPrice}>${produit.price.toFixed(2)}</Text>
                            </View>
                        </View>
                    ))
                )}
            </ScrollView>
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
});

export default Checkout;